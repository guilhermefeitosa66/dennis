require 'spreadsheet'
require 'nokogiri'
require 'uri'
require 'axlsx' # gem install axlsx
require 'pp'
require 'find'

coverage = []
classes_app = []
classes_test = []
projects = []
row = 0
col = 0

# projects_path = '/home/guilherme/spring-projects/maven/'
projects_path = 'maven/'

Dir.glob('maven/*') do |dir|
  projects << dir.split("/")[1]
end

## Localiza os arquivos que contem a lista de classes da app e de classes de teste,
## para posteriormente obter os nomes de cada classes e os arquivos que contem seu relatório
projects.each do |project|

  Find.find("#{projects_path}/#{project}") do |path|
    #classes_app << path if path.include?('site/clover/') && path.include?('pkg-summary.html')
    #classes_test << path if path.include?('site/clover/') && path.include?('testsrc-pkg-summary.html')
  end
end

# ler arquivos html
classes_app.each do |html_files|

end

# ## gerar planilha com os dados
# Axlsx::Package.new do |p|
#   p.workbook.add_worksheet(:name => "testcases") do |sheet|
#     sheet.add_row %w{PROJECT CLASS METHOD COVERAGE}
#     coverage.each { |e| sheet.add_row([ e[:project], e[:class], e[:method_name], e[:coverage] ]) }
#   end
#   p.serialize('cobertura.xlsx')
# end

# puts "done!"


# <plugin>
#   <groupId>com.atlassian.maven.plugins</groupId>
#   <artifactId>clover-maven-plugin</artifactId>
#   <version>4.1.1</version>
#   <configuration>
#     <generatePdf>false</generatePdf>
#     <generateXml>false</generateXml>
#     <generateHtml>true</generateHtml>
#     <generateJson>false</generateJson>
#     <!-- <licenseLocation>/path/to/clover.license</licenseLocation> -->
#   </configuration>
# </plugin>

# mvn clean clover:setup test clover:aggregate clover:clover ## executar primeiro
# mvn clover:clover ## => gerar relatório em html

## BEGIN TEST

ts  = ["t1", "t2", "t3", "t4", "t5", "t6"]

ps  = 
[
  ["projeto 1", "classe 1"],
  ["projeto 1", "classe 2"],
  ["projeto 1", "classe 3"],
  ["projeto 2", "classe 1"],
  ["projeto 2", "classe 2"],
  ["projeto 2", "classe 3"]
]

p1 = 
[
  ["projeto 1", "classe 1", 1, 1, 1],
  ["projeto 1", "classe 2", 1, 1, 1],
  ["projeto 1", "classe 3", 1, 1, 1]
]

p2 = 
[
  ["projeto 2", "classe 1", 2, 2, 2],
  ["projeto 2", "classe 2", 2, 2, 2],
  ["projeto 2", "classe 3", 2, 2, 2]
]

r = 
[
  ["projeto 1", "classe 1", 1, 1, 1, 0, 0, 0],
  ["projeto 1", "classe 2", 1, 1, 1, 0, 0, 0],
  ["projeto 1", "classe 3", 1, 1, 1, 0, 0, 0],
  ["projeto 2", "classe 1", 0, 0, 0, 2, 2, 2],
  ["projeto 2", "classe 2", 0, 0, 0, 2, 2, 2],
  ["projeto 2", "classe 3", 0, 0, 0, 2, 2, 2]
]
