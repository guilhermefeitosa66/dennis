require 'spreadsheet'
require 'nokogiri'
require 'uri'
require 'find'
require 'axlsx' # gem install axlsx

file = ""
# ler arquivos xml

file_paths = []

Find.find('tempo/') do |path|
  file_paths << path if path =~ /.*\.xml$/
end

projects = []
# Dir.glob("tempo/*/*.xml") do |xml_files|
file_paths.each do |xml_files|
  project_name = xml_files.split("/")[1]

  File.open("#{xml_files}", 'r') do |xml_file|
    while line = xml_file.gets
      if line.include? "testcase"
        file << line
        # projects << project_name
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
    sheet.add_row %w{TESTCASE CLASS TIME}
    xml.child.elements.each_with_index { |e,i| sheet.add_row([ e.attributes["name"].value, e.attributes["classname"].value, e.attributes["time"].value]) }
  end
  p.serialize('tempo.xlsx')
end

puts "done!"