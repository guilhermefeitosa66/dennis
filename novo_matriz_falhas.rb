require 'find'
require 'pp'
require 'csv'

file_paths = []

failure_lines = []

Find.find("/home/guilherme/dennis/logs/") do |path|
  file_paths << path if path.include?('.txt')
end

file_paths.each do |path|

  File.open("#{path}", 'r') do |file|
    while line = file.gets
      if line.include?("<<< FAILURE!") && line.include?("(")
        failure_lines << line.split('(')[-1].split(')')[0]
      end
    end
  end

  print '.'
end

# pp failure_lines

time = CSV.read('essa_pasta_aqui/tempo.csv')

# CSV.open("check/log-falhas.csv", "w") do |csv|
#   csv << ["ARQUIVO", "FALHA"]

#   failure_lines.each do |line|
#     csv << line
#   end
# end

puts ''