require 'find'
require 'pp'

file_paths = []

Find.find('cobertura/') do |path|
  file_paths << path if path =~ /.*\/pkg-summary\.html$/
end

pp file_paths