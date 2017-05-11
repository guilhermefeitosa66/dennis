require 'find'
require 'pp'

reports = []

Find.find("/home/guilherme/spring-projects/maven/") do |path|
  if path.include?("target/site/clover/index.html")
    reports << path
    puts path
  end
end

puts '-'*100
puts reports.count
puts '-'*100
pp reports.map {|e| e.split('/')[5] }.uniq
puts '-'*100
puts reports.map {|e| e.split('/')[5] }.uniq.count