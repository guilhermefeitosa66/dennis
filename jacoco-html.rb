require 'spreadsheet'
require 'nokogiri'
require 'uri'
require 'pp'
require 'find'
require 'axlsx' # gem install axlsx

file_paths = []
objects = []

## Ler todos os arquivos index.html dos relatórios jacoco
# Find.find("jacoco/") do |path|
Find.find("/home/guilherme/spring-projects/maven/") do |path|
  file_paths << path if path.include?('jacoco') && path.include?('index.html')
end

file_paths.each do |html_file|
  puts '=' * 150
  puts "extraindo dados de: #{html_file}"
  puts '=' * 150
  
  ## nome do projeto
  project_name = html_file.split("/")[5] ## NO FINAL DEVE FICAR ESSE
  # project_name = 'greenhouse' # NOME DE TESTE

  ## ler aquivo html de um projeto
  html = Nokogiri::HTML(File.open(html_file))

  # html = Nokogiri::HTML(File.open('jacoco/org.springframework.templating/index.html'))
  rows = html.xpath("//table[@id='coveragetable']/tbody/tr")

  rows.each do |r|
    if r.at_xpath('td[1]/a/@class').to_s.strip == 'el_class'
      new_row = {}
      new_row[:project] = project_name
      new_row[:class] = r.at_xpath('td[1]/a/text()').to_s.strip
      new_row[:coverage] = r.at_xpath('td[3]/text()').to_s.strip
      new_row[:complexity] = r.at_xpath('td[7]/text()').to_s.strip

      objects << new_row
    end
  end
end

# gerar planilha com os dados de cobertura
Axlsx::Package.new do |p|
  p.workbook.add_worksheet(:name => "cobertura") do |sheet|
    sheet.add_row %w{PROJECT CLASS COVERAGE}
    objects.each { |o| sheet.add_row([ o[:project], o[:class], o[:coverage].to_s ]) }
  end

  p.serialize('cobertura.xlsx')
end

# gerar planilha com os dados de complexidade
Axlsx::Package.new do |p|
  p.workbook.add_worksheet(:name => "complexidade") do |sheet|
    sheet.add_row %w{PROJECT CLASS COMPLEXITY}
    objects.each { |o| sheet.add_row([ o[:project], o[:class], o[:complexity].to_s ]) }
  end

  p.serialize('complexidade.xlsx')
end

puts "done!"


## BEGIN TEST
# html = Nokogiri::HTML(File.open('jacoco/org.springframework.templating/index.html'))
# rows = html.xpath("//table[@id='coveragetable']/tbody/tr")
# rows[0].at_xpath('td[1]/a/@class').to_s.strip ## se == 'el_class'
# rows[0].at_xpath('td[1]/a/text()').to_s.strip ## nomr da classe
# rows[0].at_xpath('td[3]/text()').to_s.strip ## cobertura
# rows[0].at_xpath('td[7]/text()').to_s.strip ## compexidade
## END TEST