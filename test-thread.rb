
(1..10).each do |i|
  a = false
  b = false
  threads = []

  threads << Thread.new do
    10.times { print '[a]'; sleep(1) }
    a = true
  end

  threads << Thread.new do
    10.times { print '[b]'; sleep(1) }
    b = true
  end

  threads.each { |thr| thr.join }

  if a && b
    puts "it's okay!"
  else
    puts "it's NOT okay!"
  end
  
end