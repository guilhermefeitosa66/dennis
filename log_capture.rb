require 'spreadsheet'
require 'nokogiri'
require 'uri'
require 'axlsx' # gem install axlsx
require 'pp'
require 'find'

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

Find.find("maven/") do |file|
  next if exclude.any? {|e| file.to_s.include? e }

  if file.include? "pom.xml"
    # puts file
    puts "=" * 150
    puts file
    puts "=" * 150

    dir = file.gsub("pom.xml", "")
    project_full_name = dir.gsub("/","-")
    project = file.split("/")[1].gsub("pom.xml", "")

    system "mvn -f /home/guilherme/spring-projects/#{dir} test > /home/guilherme/spring-projects/logs2/#{project}-log-#{project_full_name}.txt"
  end
end
