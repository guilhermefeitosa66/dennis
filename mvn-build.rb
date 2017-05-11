require 'spreadsheet'
require 'nokogiri'
require 'uri'
require 'axlsx' # gem install axlsx
require 'pp'
require 'find'

# Dir.glob("maven/*") do |dir|
#   # puts dir
#   puts "==================================================="
#   puts "==================================================="
#   puts "#{dir}"
#   puts "mvn -f /home/guilherme/spring-projects/#{dir} install"
#   puts "==================================================="
#   puts "==================================================="

#   system "mvn -f /home/guilherme/spring-projects/#{dir} install"
# end

## projetos a serem ignorados
exclude = [
  # PROJETOS NÃO RESOLVIDOS
  "eclipse-integration-commons",
  "eclipse-integration-gradle",
  "eclipse-integration-tcserver",
  "grails-ide",
  # PROJETOS SEM TESTES
  "spring-analytics",
  "spring-data-build",
  "spring-insight-plugins",
  "spring-roo-wrapping",
  "toolsuite-discovery-runtimes",
  "toolsuite-distribution",
  # PROJETOS EM JS E GROOVY
  "spring-flo",
  "spring-ide"]

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

## executa comando de sistema dentro do diretório dos projetos
Find.find("/home/guilherme/spring-projects/maven/") do |file|
  next if exclude.any? {|e| file.to_s.include? e }

  if file.include? "pom.xml"
    # puts file
    puts "=" * 100
    puts file
    puts "=" * 100

    dir = file.gsub("pom.xml", "")
    # system "mvn -f #{dir} install"
    # system "mvn -f #{dir} test"
    # system "mvn -f #{dir} javancss:report" # complexidade ciclomática
    # system "mvn -f #{dir} org.jacoco:jacoco-maven-plugin:0.7.8:prepare-agent install org.jacoco:jacoco-maven-plugin:0.7.8:report" # cobertura
    # system "cd #{dir} && mvn org.jacoco:jacoco-maven-plugin:0.7.8:prepare-agent install org.jacoco:jacoco-maven-plugin:0.7.8:report" # cobertura
    # system "mvn -f #{dir} jdepend:generate " # acoplamento
    # system "cd #{dir} && git checkout -- pom.xml"
    # system "cd #{dir} && git clean -f"
    # system "cd #{dir} && git checkout ."
    # system "java -jar /home/guilherme/dennis/springlint/springlint-0.4.jar -o /home/guilherme/dennis/acoplamento/ -otype 'html' -p /home/guilherme/spring-projects/#{dir}" # ACOPLAMENTO
    system "cd #{dir} && mvn clean clover:setup test clover:aggregate clover:clover"
    system "cd #{dir} && mvn clover:clover"
  end
end


## GERAR RELATÓRIOS DE ACOPLAMENTO
# Dir.glob('/home/guilherme/spring-projects/maven/*') do |dir|
#   project = dir.split("/")[5]

#   puts "=" * 100
#   puts dir
#   puts project
#   puts "=" * 100

#   springlint = "/home/guilherme/dennis/springlint/springlint-0.4.jar"
#   out = "/home/guilherme/dennis/acoplamento/#{project}"
  
#   system "mkdir #{out}"
#   system "java -jar #{springlint} -o #{out}/ -otype 'html' -p #{dir}/ > #{out}.txt" # ACOPLAMENTO
# end