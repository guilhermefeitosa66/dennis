require 'spreadsheet'
require 'nokogiri'
require 'uri'
require 'axlsx' # gem install axlsx
require 'pp'
require 'find'

projects = []
classes_summary = []
classes_app = []
tests_case = []
coverages = []


# projects_path = '/home/guilherme/spring-projects/maven/'
projects_path = '/home/guilherme/dennis/maven/' # teste

puts "lendo projetos..."
Dir.glob('maven/*') do |dir|
  projects << dir.split("/")[1]
end

## Localiza os arquivos que contem a lista de classes, para em seguida obter 
## os nomes de cada arquivo que contem o relatório individual da classe
puts "localizando sumário de classes..."
projects.each do |project|

  Find.find("#{projects_path}/#{project}") do |path|
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

  ## percorre todos os arquivos de relatório da classe, para localizar os testes que a cobrem
  puts "criando lista de casos de teste do projeto: #{project}..."
  classes_app.each do |ca|
    begin
      html = Nokogiri::HTML(File.open("#{ca[0]}/#{ca[2]}.html".gsub('//','/') ))
      rows = html.xpath("//tbody[@id='tests-body']/tr")

      ## adiciona todos os casos de teste no vetor
      rows.each do |tr|
        if ! tests_case.include? tr.at_xpath('td[3]/span/text()').to_s.strip
          tests_case << tr.at_xpath('td[3]/span/text()').to_s.strip
        end
      end
    rescue Exception => e
      next
    end
    
  end

end

## percorre todos os arquivos de relatório da classe, para verificar quais testes a cobrem
puts "construido matriz de cobertura por classes..."
classes_app.each do |ca|
  begin
    html = Nokogiri::HTML(File.open("#{ca[0]}/#{ca[2]}.html".gsub('//','/') ))
    rows = html.xpath("//tbody[@id='tests-body']/tr")

    new_row = [ca[1], ca[2]]

    ## adiciona as classes com a sua cobertura para cada caso de teste
    tests_case.each do |tc|
      coverage = 0

      rows.each do |tr|
        if tr.at_xpath('td[4]/span[2]/text()').to_s.strip == 'PASS' && tr.at_xpath('td[3]/span/text()').to_s.strip == tc
          coverage = tr.at_xpath('td[2]/span/text()').to_s.strip
        end
      end

      new_row << coverage
    end

    coverages << new_row
  rescue Exception => e
    next
  end
end

## gerar planilha com os dados
puts "gerando planilha..."
Axlsx::Package.new do |p|
  p.workbook.add_worksheet(:name => "cobertura") do |sheet|
    sheet.add_row (["PROJECT", "TESTCASE/CLASS"] + tests_case)
    coverages.each { |row| sheet.add_row(row) }
  end
  p.serialize('cobertura.xlsx')
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
