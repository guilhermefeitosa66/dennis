require 'spreadsheet'
require 'nokogiri'
require 'uri'
require 'pp'
require 'find'
require 'axlsx' # gem install axlsx

Find.find("/home/guilherme/spring-projects/logs/") do |path|
  file_paths << path if path.include?('.txt')
end

file_paths.each do |path|
  puts '=' * 100
  puts "extraindo dados de: #{path}"
  puts '=' * 100
  
  ## nome do projeto
  # project_name = path.split("/")[5].gsub(".txt", "")

  tests = []

  # isola apenas as linhas que contem resultados validos
  File.open("#{path}", 'r') do |file|
    while line = file.gets
      tests << line if line.include? "Tests run:"
    end
  end

  pp tests

  # lines.each do |l|
  #   new_row = {}
  #   new_row[:project] = project_name
  #   new_row[:class] = l.split(".java")[0].split("/")[-1]
  #   new_row[:cbo] = l.split("cbo=")[1].split(",")[0]

  #   objects << new_row
  # end

end

# # gerar planilha com os dados de acoplamento
# Axlsx::Package.new do |p|
#   p.workbook.add_worksheet(:name => "acoplamento") do |sheet|
#     sheet.add_row %w{PROJECT CLASS COUPLING}
#     objects.each { |o| sheet.add_row([ o[:project], o[:class], o[:cbo].to_s ]) }
#   end

#   p.serialize('acoplamento.xlsx')
# end

## BEGIN TEST
# tests = []

# File.open("/home/guilherme/spring-projects/logs/maven-aws-maven-.txt", 'r') do |file|
#   while line = file.gets
#     tests << line if line.include? "Tests run:"
#   end
# end

# pp tests
## END TEST