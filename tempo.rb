require 'spreadsheet'
require 'nokogiri'
require 'uri'
require 'find'
require 'axlsx' # gem install axlsx

file = ""
# ler arquivos xml

file_paths = []

# Find.find('tempo/') do |path|
Dir.glob('/home/guilherme/spring-projects/maven/*') do |project_dir|

  Find.find("#{project_dir}/") do |path|
    # file_paths << path if path =~ /.(TEST-)*\.xml$/
    file_paths << path if path.include?('.xml') && path.include?('TEST-')
  end
end

# Dir.glob("tempo/*/*.xml") do |xml_files|
file_paths.each do |xml_files|
  project_name = xml_files.split("/")[5]

  File.open("#{xml_files}", 'r') do |xml_file|
    while line = xml_file.gets
      if line.include? "testcase"
        str = line.gsub("time=", " project=\"#{project_name}\" time=")
        puts str
        file << str
      end
    end
  end
end

# Dir.glob("*/*.xml") do |my_text_file|
#   puts "#{my_text_file}"
# end

file = '<?xml version="1.0" encoding="UTF-8"?>' + "\n<testcases>\n" + file + "</testcases>"

xml = Nokogiri::XML(file)

# gerar planilha com os dados
Axlsx::Package.new do |p|
  p.workbook.add_worksheet(:name => "testcases") do |sheet|
    sheet.add_row %w{PROJECT TESTCASE CLASS TIME}
    xml.child.elements.each_with_index { |e,i| sheet.add_row([ e.attributes["project"].value, e.attributes["name"].value, e.attributes["classname"].value, e.attributes["time"].value]) }
  end
  p.serialize('tempo.xlsx')
end

puts "done!"