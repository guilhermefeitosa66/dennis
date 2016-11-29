require 'spreadsheet'
require 'nokogiri'
require 'uri'
require 'axlsx' # gem install axlsx

file = ""
# ler arquivos xml
Dir.glob("tempo/*/*.xml") do |xml_files|
  File.open("#{xml_files}", 'r') do |xml_file|
    while line = xml_file.gets
      if line.include? "testcase"
        file << line
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
    xml.child.elements.each { |e| sheet.add_row([e.attributes["name"].value, e.attributes["classname"].value, e.attributes["time"].value]) }
  end
  p.serialize('tempo.xlsx')
end

puts "done!"