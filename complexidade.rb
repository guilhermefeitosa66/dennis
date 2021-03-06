require 'nokogiri'
require 'find'
require 'axlsx'
require 'csv'

projects = []
complexity = []

# projects_path = '/home/guilherme/dennis/maven/' # teste
projects_path = '/home/guilherme/spring-projects/maven/'

puts "lendo projetos..."
Dir.glob("#{projects_path}*") do |dir|
  projects << dir.split("/")[5]
end

## Localiza os arquivos que contem a lista de classes, para em seguida obter 
## os nomes de cada arquivo que contem o relatório individual da classe
projects.each do |project|
  classes_summary = []
  classes_app = []

  puts "localizando sumário de classes do projeto: #{project}..."
  
  Find.find("#{projects_path}/#{project}/") do |path|
    classes_summary << path if path.include?('site/clover/') && path.include?('/pkg-summary.html')
    #classes_test << path if path.include?('site/clover/') && path.include?('testsrc-pkg-summary.html')
  end

  ## localiza a tabela 'packageClassesTable' em cada arquivo
  puts "criando lista de classes do projeto: #{project}..."

  classes_summary.each do |file|
    html = Nokogiri::HTML(File.open(file))
    rows = html.xpath("//table[@id='packageClassesTable']/tbody/tr")

    ## percorre a tabela de classes da app localizada para adicionar o caminho do arquivo da classe e seu nome
    rows.each do |tr|    
      tr.at_xpath('td[1]/span/text()').to_s.strip.split('.').each do |single_class|
        classes_app << [file.gsub('pkg-summary.html', ''), project, single_class]
      end
    end
  end

  puts "total de classes: #{classes_app.count}"

  ## percorre todos os arquivos de relatório da classe, para localizar os testes que a cobrem
  puts "criando lista da complexidade das classes do projeto: #{project}..."

  classes_app.each do |ca|
    begin
      html = Nokogiri::HTML(File.open("#{ca[0]}/#{ca[2]}.html".gsub('//','/') ))
      #rows = html.xpath("//tbody[@id='tests-body']/tr")

      cpxt = html.xpath("//table[1]/tbody/tr").at_xpath('td[5]/text()').to_s.strip
      complexity << [ca[1], ca[2], cpxt]

    rescue Exception => e
      next
    end
  end

  puts "-" * 100
end

## gerar planilha com os dados
puts "gerando planilha..."
Axlsx::Package.new do |p|
  p.workbook.add_worksheet(:name => "complexidade") do |sheet|
    sheet.add_row ["PROJECT", "CLASS", "COMPLEXITY"]
    complexity.each { |row| sheet.add_row(row) }
  end
  p.serialize('maven-complexidade.xlsx')
end

CSV.open("maven-complexidade.csv", "w") do |csv|
  csv << ["PROJECT", "CLASS", "COMPLEXITY"]
  complexity.each { |row| csv << row }
end

puts "pronto!"


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
