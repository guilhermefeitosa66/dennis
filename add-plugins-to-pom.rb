require 'find'
require 'nokogiri'

## ADD PLUGINS IN POM.XML
pom_files = []
projects = [
  'aws-maven',
  'eclipse-integration-commons',
  'eclipse-integration-gradle',
  'eclipse-integration-tcserver',
  'grails-ide',
  'greenhouse',
  'greenhouse-android',
  'insight-plugin-mongodb',
  'se-db4o',
  'spring-amqp-samples',
  'spring-analytics',
  'spring-batch-admin',
  'spring-boot',
  'spring-bus',
  'spring-data-aerospike',
  'spring-data-book',
  'spring-data-build',
  'spring-data-cassandra',
  'spring-data-commons',
  'spring-data-couchbase',
  'spring-data-dev-tools',
  'spring-data-document-examples',
  'spring-data-elasticsearch',
  'spring-data-envers',
  'spring-data-examples',
  'spring-data-gemfire',
  'spring-data-gemfire-sts-templates',
  'spring-data-graph',
  'spring-data-graph-examples',
  'spring-data-jpa',
  'spring-data-keyvalue',
  'spring-data-ldap',
  'spring-data-mongodb',
  'spring-data-multistore-test',
  'spring-data-neo4j',
  'spring-data-redis',
  'spring-data-rest',
  'spring-data-solr',
  'spring-flex',
  'spring-flex-roo',
  'spring-flo',
  'spring-guice',
  'spring-hadoop-samples',
  'spring-hateoas',
  'spring-ide',
  'spring-insight-plugins',
  'Spring-Integration-in-Action',
  'spring-mvc-showcase',
  'spring-petclinic',
  'spring-plugin',
  'spring-retry',
  'spring-roo',
  'spring-roo-community-addons',
  'spring-roo-wrapping',
  'spring-security-oauth',
  'spring-security-portlet',
  'spring-tenancy',
  'spring-test-mvc',
  'spring-tuple',
  'spring-vault',
  'spring-webflow-issues',
  'spring-webflow-samples',
  'spring-xd-samples',
  'toolsuite-discovery-runtimes',
  'toolsuite-distribution'
  ]

## Localiza todos os arquivos pom.xml
projects.each do |project|
  Find.find("/home/guilherme/spring-projects/maven/#{project}") do |file|
    if file.include? "pom.xml"
      pom_files << file
      puts file
    end
  end
end

pom_files.each do |pom_file|

  ## Ler o arquivo pom.xml
  xml = Nokogiri::XML(File.open(file))

  ## localiza o elemento <build>
  xml.xpath('.//*').each {|n| @build = n if n.name == "build"}

  ## caso o elemento <build não exista, segue para o próximo arquivo,
  ## se existir localiza dentro dele o elemento <plugins> para adicionar novos plugins
  if @build.nil?
    next
  else
    @build.children.each {|n| @plugins = n if n.name == "plugins" }
  end

  ## plugins a serem acrescentados no arquivo pom.xml
  surefire = 
  '<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-surefire-plugin</artifactId>
    <version>2.16</version>
    <configuration>
      <redirectTestOutputToFile>true</redirectTestOutputToFile>
    </configuration>
  </plugin>'

  sonar = 
  '<plugin>
    <groupId>org.codehaus.mojo</groupId>
    <artifactId>sonar-maven-plugin</artifactId>
    <version>2.2</version>
  </plugin>'

  clover = 
  '<plugin>
    <groupId>com.atlassian.maven.plugins</groupId>
    <artifactId>clover-maven-plugin</artifactId>
    <version>4.1.1</version>
    <configuration>
      <generatePdf>false</generatePdf>
      <generateXml>false</generateXml>
      <generateHtml>true</generateHtml>
      <generateJson>false</generateJson>
      <!-- <licenseLocation>/path/to/clover.license</licenseLocation> -->
    </configuration>
  </plugin>'

  jacoco = 
  '<plugin>
    <groupId>org.jacoco</groupId>
    <artifactId>jacoco-maven-plugin</artifactId>
    <version>0.7.8</version>
    <reportSets>
      <reportSet>
        <reports>
          <!-- select non-aggregate reports -->
          <report>report</report>
        </reports>
      </reportSet>
    </reportSets>
  </plugin>'

  ## se o plugin já não existir dentro de <build><plugins>...</build></plugins>, então ele será adicionado

  #@plugins.first_element_child.before(surefire) unless @plugins.to_s.include? "maven-surefire-plugin"
  #@plugins.first_element_child.before(sonar)    unless @plugins.to_s.include? "sonar-maven-plugin"
  @plugins.first_element_child.before(clover)   unless @plugins.to_s.include? "clover-maven-plugin"
  #@plugins.first_element_child.before(jacoco)   unless @plugins.to_s.include? "jacoco-maven-plugin"

  ## altera o arquivo pom.xml com os novos plugins adicionados
  File.open("#{pom_file}", 'w') do |new_file|
    new_file.puts xml
  end
end