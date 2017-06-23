require 'find'
require 'pp'
require 'csv'

puts 'reading csv files...'

complexity = CSV.read('maven-complexidade.csv')
coupling = CSV.read('maven-acoplamento.csv')
coverage = CSV.read('maven-cobertura.csv')
fault = CSV.read('maven-falhas.csv')
time = CSV.read('maven-tempo.csv')

puts 'removing repetitions...'

complexity.uniq!
coupling.uniq!
coverage.uniq!
fault.uniq!
time.uniq!

selecion = {complexity: [], coupling: [], coverage: [], fault: [], time: []}

print 'selecting data'

complexity.each do |cpx|
  elements = {complexity: cpx, coupling: nil, coverage: nil, fault: nil, time: nil}

  coupling.each do |line|
    if line.to_s.include?(cpx[0]) && line.to_s.include?(cpx[1])
      elements[:coupling] = line
      break
    end
  end

  coverage.each do |line|
    if line.to_s.include?(cpx[0]) && line.to_s.include?(cpx[1])
      elements[:coverage] = line
      break
    end
  end

  fault.each do |line|
    if line.to_s.include?(cpx[0]) && line.to_s.include?(cpx[1])
      elements[:fault] = line
      break
    end
  end

  time.each do |line|
    if line.to_s.include?(cpx[0]) && line.to_s.include?(cpx[1])
      elements[:time] = line
      break
    end
  end

  if elements[:coupling] && elements[:coverage] && elements[:fault] && elements[:time]
    selecion[:complexity] << elements[:complexity]
    selecion[:coupling] << elements[:coupling]
    selecion[:coverage] << elements[:coverage]
    selecion[:fault] << elements[:fault]
    selecion[:time] << elements[:time]

    coupling.delete elements[:coupling]
    coverage.delete elements[:coverage]
    fault.delete elements[:fault]
    time.delete elements[:time]
  end

  print '.'
end

puts '-------------------------'
puts "total: #{selecion[:complexity].count}"
puts '-------------------------'
puts 'creating new csv files...'

CSV.open("selecao_dados/complexity.csv", "w") do |csv|
  selecion[:complexity].each do |line|
    csv << line
  end
end

CSV.open("selecao_dados/coupling.csv", "w") do |csv|
  selecion[:coupling].each do |line|
    csv << line
  end
end

CSV.open("selecao_dados/coverage.csv", "w") do |csv|
  selecion[:coverage].each do |line|
    csv << line
  end
end

CSV.open("selecao_dados/fault.csv", "w") do |csv|
  selecion[:fault].each do |line|
    csv << line
  end
end

CSV.open("selecao_dados/time.csv", "w") do |csv|
  selecion[:time].each do |line|
    csv << line
  end
end

puts 'done!'