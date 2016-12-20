require 'spreadsheet'
require 'nokogiri'
require 'uri'
require 'axlsx' # gem install axlsx
require 'pp'
require 'find'

coverage = []
file_paths = []

# Find.find('cobertura/') do |path|
Find.find('/home/guilherme/spring-projects/maven/') do |path|
  file_paths << path if path =~ /.*\/testsrc-pkg-summary\.html$/
end

# ler arquivos html
file_paths.each do |html_files|
  sumary = ""
  file = ""
  # ler o arquivo do sumário com o nome das classes
  File.open("#{html_files}", 'r') do |s|
    while line = s.gets
      sumary << line
    end
  end

  # extrai a lista de  classes do sumário
  html = Nokogiri::HTML(sumary)

  rows = html.xpath("//table[@id='packageClassesTable']/tbody/tr")
  classes_list = rows.collect do |row|
    class_name = {}
    [
      [:class_name, 'td[1]/span/text()'],
    ].each do |name, xpath|
      class_name[name] = row.at_xpath(xpath).to_s.strip
    end
    class_name
  end

  project_name = html_files.split("/")[5]
  path = html_files.gsub("/testsrc-pkg-summary.html", "")
  puts path

  # extrair nome do método e cobertura
  classes_list.each do |c|
    c[:class_name] = c[:class_name].split(".")[0]

    File.open("#{path}/#{c[:class_name]}.html", 'r') do |html_file|
      while line = html_file.gets
        file << line
      end
    end

    html = Nokogiri::HTML(file)
    id = "dialog-#{c[:class_name]}-methods-body"
    rows = html.xpath("//table/tbody[@id='#{id}']/tr")

    array = rows.collect do |row|
      detail = {}
      [
        [:method_name, 'td[1]/span/text()'],
        [:coverage, 'td[7]/span/text()'],
      ].each do |name, xpath|
        detail[name] = row.at_xpath(xpath).to_s.strip
      end
      detail[:method_name] = detail[:method_name].gsub("&lt;","<").gsub("&gt;",">")
      detail[:coverage] = 0 if detail[:coverage].to_i < 0
      detail
    end

    array.each do |e|
      coverage << {project: project_name, class: c[:class_name], method_name: e[:method_name], coverage: e[:coverage]}
    end
  end
end

# gerar planilha com os dados
Axlsx::Package.new do |p|
  p.workbook.add_worksheet(:name => "testcases") do |sheet|
    sheet.add_row %w{PROJECT CLASS METHOD COVERAGE}
    coverage.each { |e| sheet.add_row([ e[:project], e[:class], e[:method_name], e[:coverage] ]) }
  end
  p.serialize('cobertura.xlsx')
end

puts "done!"