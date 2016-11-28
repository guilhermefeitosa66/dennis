require 'spreadsheet'
require 'nokogiri'
require 'uri'
require 'axlsx' # gem install axlsx

file = ""
# ler arquivos xml
#Dir.glob("*/*.xml") do |xml_files|
Dir.glob("*.html") do |html_files|
  File.open("#{html_files}", 'r') do |html_file|
    while line = html_file.gets
      if line.include? "testcase"
        file << line
      end
    end
  end
end

# Dir.glob("*/*.xml") do |my_text_file|
#   puts "#{my_text_file}"
# end

# file = '<?xml version="1.0" encoding="UTF-8"?>' + "\n<testcases>\n" + file + "</testcases>"

html = Nokogiri::HTML(file)

# rows = html.xpath('//table/tbody[@id="threadbits_forum_251"]/tr')
rows = html.xpath('//table/tbody/tr')
details = rows.collect do |row|
  detail = {}
  [
    [:method_name, 'td[1]/span/text()'],
    [:line, 'td[2]/span/text()'],
    [:total_statement, 'td[3]/span/text()'],
    [:filtered, 'td[4]/span/text()'],
    [:complexity, 'td[5]/span/text()'],
    [:uncovered_elements, 'td[6]/span/text()'],
    [:total_coverage, 'td[7]/span/text()'],
  ].each do |name, xpath|
    detail[name] = row.at_xpath(xpath).to_s.strip
  end
  detail
end
p details

# gerar planilha com os dados
# Axlsx::Package.new do |p|
#   p.workbook.add_worksheet(:name => "testcases") do |sheet|
#     sheet.add_row %w{TESTCASE CLASS TIME}
#     xml.child.elements.each { |e| sheet.add_row([e.attributes["name"].value, e.attributes["classname"].value, e.attributes["time"].value]) }
#   end
#   p.serialize('dataset.xlsx')
# end

puts "done!"