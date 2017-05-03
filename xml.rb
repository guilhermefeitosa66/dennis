require 'nokogiri'

xml = Nokogiri::XML(File.open('jacoco/jacoco.xml'))

classes = xml.xpath("//class")

## class name
classes[0].attributes["name"].value.split('/')[-1]
classes[0].attributes["name"].value

## COMPLEXITY
classes[0].children[-3]
classes[0].children[-3].attributes["missed"].value

## COVERAGE
classes[0].children[-6]
classes[0].children[-6].attributes["covered"].value

# c.select {|e| e.attributes['type'].value == 'CLASS' }
# c.select {|e| e.attributes['type'].value == 'COMPLEXITY' }[0].attributes['missed']
# c.select {|e| e.attributes['type'].value == 'COMPLEXITY' }[0].attributes['missed'].value