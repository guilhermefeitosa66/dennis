require 'spreadsheet'
require 'nokogiri'
require 'uri'
require 'pp'
require 'find'
require 'axlsx' # gem install axlsx

file_paths = []
objects = []

## Ler todos os arquivos jacoco.xml
#Find.find("/home/guilherme/spring-projects/maven/") do |path|
Find.find("jacoco/") do |path|
  file_paths << path if path.include?('jacoco.xml')
end

file_paths.each do |xml_file|
  ## nome do projeto
  #project_name = xml_file.split("/")[5] ## NO FINAL DEVE FICAR ESSE
  project_name = 'greenhouse' # NOME DE TESTE

  ## ler aquivo xml de um projeto
  xml = Nokogiri::XML(File.open(xml_file))

  ## seleciona as classes de um arquivo xml
  classes = xml.xpath("//class")

  classes.each do |c|
    row = {}

    row[:project] = project_name
    row[:class] = c.attributes["name"].value
    # row[:class] = c.attributes["name"].value.split('/')[-1]

    c = c.children.select {|e| e.name == 'counter'}
    # puts c.select {|e| e.attributes['type'].value == 'CLASS' }[0]
    coverage = c.select {|e| e.attributes['type'].value == 'INSTRUCTION' }[0]
    complexity = c.select {|e| e.attributes['type'].value == 'COMPLEXITY' }[0]

    row[:coverage]   = coverage.attributes['covered'] if coverage
    row[:complexity] = complexity.attributes['missed'] if complexity
    
    objects << row
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