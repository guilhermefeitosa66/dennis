require 'find'
require 'nokogiri'

# ADD PLUGINS IN POM.XML
pom_files = []

Find.find("/home/guilherme/spring-projects/maven/") do |file|
  if file.include? "pom.xml"
    pom_files << file
    puts file
  end
end

pom_files.each do |path|
  file = ""
  # ler arquivo xml
  File.open("#{path}", 'r') do |xml_file|
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

  next if node.nil?

  surefire = 
  '<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-surefire-plugin</artifactId>
    <version>2.16</version>
    <configuration>
      <redirectTestOutputToFile>true</redirectTestOutputToFile>
      <runOrder>random</runOrder>
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
  </plugin>'

  node.first_element_child.before(surefire) unless xml.to_s.include? "maven-surefire-plugin"
  node.first_element_child.before(sonar)    unless xml.to_s.include? "sonar-maven-plugin"
  node.first_element_child.before(clover)   unless xml.to_s.include? "clover-maven-plugin"

  # cria novo arquivo xml alterado
  File.open("#{path}", 'w') do |new_file|
    new_file.puts xml
  end
end