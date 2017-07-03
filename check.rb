require 'find'
require 'pp'
require 'csv'

## CASOS DE TESTE COM NOME DA CLASSE

# faults = CSV.read('maven-falhas.csv', {:col_sep => ";"})

# count = 0
# iguais = []

# faults.each do |fault|
#   if fault[1] == fault[2]
#     count += 1
#     iguais << fault
#     #break if count > 100
#   end
# end

# puts "total: #{count}"

# CSV.open("iguais.csv", "w") do |csv|
#   csv << faults[0]

#   iguais.each do |line|
#     csv << line
#   end
# end

## FALHAS ISOLADAS X COMPLEXIDADE ACOPLAMENTO

# coupling_complexity = CSV.read('essa_pasta_aqui/complexity-acoplamento.csv')
# isolated_failures = CSV.read('essa_pasta_aqui/falhas_isoladas.csv')

# result = {cp: [], if: []}

# isolated_failures.each do |line|
#   coupling_complexity.each do |cp|
#     if cp[0] == line[0] && cp[1] == line[1].split('.')[-1]
#       result[:cp] << cp
#       result[:if] << line
#     end
#   end
# end

# puts "resultado: #{result.count}"

# CSV.open("check/check-comp-cov.csv", "w") do |csv|
#   csv << coupling_complexity[0]

#   result[:cp].each do |line|
#     csv << line
#   end
# end

# CSV.open("check/check-falhas-isoladas.csv", "w") do |csv|
#   csv << isolated_failures[0]

#   result[:if].each do |line|
#     csv << line
#   end
# end


## NUMERO DE FALHAS ENCONTRADAS:



file_paths = []
failure_count = 0
failure_lines = []

Find.find("/home/guilherme/dennis/logs/") do |path|
  file_paths << path if path.include?('.txt')
end

file_paths.each do |path|

  File.open("#{path}", 'r') do |file|
    while line = file.gets
      # if line.include?("<<< FAILURE!")
      if line.include?("<<< FAILURE!") && line.include?("(")
      # if line.include?("<<< FAILURE!") && (line.include?("(") || line.include?(" - in "))
        failure_count += 1
        failure_lines << [path, line]
      end
    end
  end

  print '.'
end

CSV.open("check/log-falhas.csv", "w") do |csv|
  csv << ["ARQUIVO", "FALHA"]

  failure_lines.each do |line|
    csv << line
  end
end

puts ''
puts "total: #{failure_count}"