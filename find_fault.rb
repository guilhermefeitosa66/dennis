require 'find'

# file = File.open('falhas_isoladas/maven-spring-boot-spring-boot-actuator-docs-.txt')

# slice = "\n"

# file.each do |line|
# 	if line == slice
# 		puts "achou!"
# 	end
# end

# matrix = 
# [
# 	['Spring-Integration-in-Action', # projeto
# 	'siia.booking.integration.FlightNotificationsSpelTest', # classe de teste
# 	'shouldEnrichHeaderAndSendMessageForRelatedTrips', # caso de teste
# 	'siia.booking.domain.flight.Flight' ]
# ]

projects_path = '/home/guilherme/dennis/falhas_isoladas/'
files = []

Dir.glob("#{projects_path}*") do |file|
  files << File.open(file)
end

files = [File.open('/home/guilherme/dennis/falhas_isoladas/maven-spring-boot-spring-boot-integration-tests-spring-boot-gradle-tests-.txt')]

count = 0;

files.each do |f|
	f.each do |line|
		if line == "\n"
			count += 1
		end
	end

	count += 1
end

puts "total: #{count}"