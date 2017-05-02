require 'spreadsheet'
require 'nokogiri'
require 'uri'
require 'find'
require 'csv'
require 'pp'
require 'axlsx' # gem install axlsx

# lines = []

# CSV.foreach("jacoco.csv") do |row|
#   # use row here...
#   lines << row
# end

# ## e[4] = coverage
# ## e[9].to_i + e[10].to_i = complexty

# project_name = "greenhouse"
# lines.map! { |e| [project_name, e[1], e[2], e[4].to_i / 100, e[9].to_i + e[10].to_i] }
# lines = lines - lines.first

# pp lines.first

file = ""
file_paths = []

## Ler todos os arquivos jacoco.xml
Find.find("/home/guilherme/spring-projects/maven/") do |path|
  file_paths << path if path.include?('jacoco.xml')
end

# file_paths.each do |xml_files|
#   project_name = xml_files.split("/")[5]

#   File.open("#{xml_files}", 'r') do |xml_file|
#     while line = xml_file.gets
#       if line.include? "testcase"
#         str = line.gsub("time=", " project=\"#{project_name}\" time=")
#         file << str
#       end
#     end
#   end
# end

# gerar planilha com os dados
Axlsx::Package.new do |p|
 p.workbook.add_worksheet(:name => "cobertura") do |sheet|
   sheet.add_row %w{PROJECT PACKAGE CLASS COVERAGE}
   lines.each_with_index { |e,i| sheet.add_row([ e.attributes["project"].value, e.attributes["name"].value, e.attributes["classname"].value, e.attributes["time"].value]) }
 end
 p.serialize('cobertura.xlsx')
end

puts "done!"