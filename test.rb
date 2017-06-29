require 'find'
require 'pp'
require 'csv'

puts 'reading csv files...'

complexity = CSV.read('maven-complexidade.csv')
coupling = CSV.read('maven-acoplamento.csv')
coverage = CSV.read('maven-cobertura.csv')
fault = CSV.read('maven-falhas.csv')
time = CSV.read('maven-tempo.csv')

puts '-------------------------'
puts 'total lines'
puts '-------------------------'
puts "complexity: #{complexity.count}"
puts "coupling: #{coupling.count}"
puts "coverage: #{coverage.count}"
puts "fault: #{fault.count}"
puts "time: #{time.count}"

puts ''
puts 'removing redundant lines...'
puts ''

complexity.uniq!
coupling.uniq!
coverage.uniq!
fault.uniq!
time.uniq!

puts '-------------------------'
puts 'total lines (without redundancy)'
puts '-------------------------'
puts "complexity: #{complexity.count}"
puts "coupling: #{coupling.count}"
puts "coverage: #{coverage.count}"
puts "fault: #{fault.count}"
puts "time: #{time.count}"

selecion = {complexity: [], coupling: [], coverage: [], fault: [], time: []}

puts ''
print 'selecting data'

complexity.each do |cpx|
  threads = []
  elements = {complexity: cpx, coupling: nil, coverage: nil, fault: nil, time: nil}

  threads << Thread.new do
    coupling.each do |line|
      if line[0] == cpx[0] && line[1] == cpx[1]
        elements[:coupling] = line
        break
      end
    end
  end

  threads << Thread.new do
    coverage.each do |line|
      if line[0] == cpx[0] && line[1] == cpx[1]
        elements[:coverage] = line
        break
      end
    end
  end

  threads << Thread.new do
    fault.each do |line|
      if line[0] == cpx[0] && (line[2].split('.')[-1]) == cpx[1]
        elements[:fault] = line
        break
      end
    end
  end

  # threads << Thread.new do
  #   time.each do |line|
  #     if line[0] == cpx[0]# && (line[2].split('.')[-1]) == cpx[1]
  #       elements[:time] = line
  #       break
  #     end
  #   end
  # end

  threads.each { |thr| thr.join }

  if elements[:coupling] && elements[:coverage] #&& elements[:fault] && elements[:time]
    selecion[:complexity] << (elements[:complexity] << elements[:coupling][2] )
    selecion[:coupling] << elements[:coupling]
    selecion[:coverage] << elements[:coverage]
    # selecion[:fault] << elements[:fault]
    # selecion[:time] << elements[:time]

    coupling.delete elements[:coupling]
    coverage.delete elements[:coverage]
    # fault.delete elements[:fault]
    # time.delete elements[:time]
  end

  print '.'
end

puts ''
puts '-------------------------'
puts "total: #{selecion[:complexity].count}"
puts '-------------------------'
puts 'creating new csv files...'

CSV.open("selecao_dados/complexity-acoplamento.csv", "w") do |csv|
  csv << (complexity[0] << coupling[0][2])

  selecion[:complexity].each do |line|
    csv << line
  end
end

CSV.open("selecao_dados/coupling.csv", "w") do |csv|
  csv << coupling[0]

  selecion[:coupling].each do |line|
    csv << line
  end
end

CSV.open("selecao_dados/coverage.csv", "w") do |csv|
  csv << coverage[0]

  selecion[:coverage].each do |line|
    csv << line
  end
end

CSV.open("selecao_dados/fault.csv", "w") do |csv|
  csv << fault[0]
  
  selecion[:fault].each do |line|
    csv << line
  end
end

# CSV.open("selecao_dados/time.csv", "w") do |csv|
#   selecion[:time].each do |line|
#     csv << line
#   end
# end

puts 'done!'