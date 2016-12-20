require 'find'
require 'pp'
require 'nokogiri'

# file_paths = []

# Find.find('cobertura/') do |path|
#   file_paths << path if path =~ /.*\/pkg-summary\.html$/
# end

# pp file_paths

# TEST ADD PLUGINS IN POM.XML
# Dir.glob("tempo/*/*.xml") do |xml_files|
file = ""

# ler arquivo xml
File.open("test-pom.xml", 'r') do |xml_file|
  while line = xml_file.gets
    file << line
  end
end

# altera arquivo xml
xml = Nokogiri::XML(file)
node = nil

xml.xpath('.//*').each do |n|
  node = n if n.name == "plugins"
end

plugins = 
'<plugin>
  <groupId>org.apache.maven.plugins</groupId>
  <artifactId>maven-surefire-plugin</artifactId>
  <version>2.16</version>
  <configuration>
    <redirectTestOutputToFile>true</redirectTestOutputToFile>
    <runOrder>random</runOrder>
  </configuration>
</plugin>

<plugin>
  <groupId>org.codehaus.mojo</groupId>
  <artifactId>sonar-maven-plugin</artifactId>
  <version>2.2</version>
</plugin>

<plugin>
  <groupId>com.atlassian.maven.plugins</groupId>
  <artifactId>clover-maven-plugin</artifactId>
  <version>4.1.1</version>
</plugin>'

node.first_element_child.before(plugins)

# cria novo arquivo xml alterado
File.open('test-pom-new.xml', 'w') do |new_file|
  new_file.puts xml
end