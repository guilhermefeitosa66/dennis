require 'nokogiri'

xml = Nokogiri::XML(File.open('jacoco/jacoco.xml'))

classes = xml.xpath("//class")

## COMPLEXITY
classes[0].children[-3]
classes[0].children[-3].attributes["missed"].value

## COVERAGE
classes[0].children[-6]
classes[0].children[-6].attributes["covered"].value