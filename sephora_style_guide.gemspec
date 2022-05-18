$:.push File.expand_path('../lib', __FILE__)

# Maintain your gem's version:
require 'sephora_style_guide/version'

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = 'sephora_style_guide'
  s.version     = SephoraStyleGuide::VERSION
  s.authors     = ['Justin Ho']
  s.email       = ['justin@sephoradigital.com']
  s.homepage    = 'http://www.sephora.sg/style-guide'
  s.summary     = 'Style Guide for Sephora Digital SEA'
  s.description = 'Style Guide for Sephora Digital SEA'
  s.license     = 'MIT'

  s.files = Dir['{app,config,db,lib}/**/*', 'MIT-LICENSE', 'Rakefile', 'README.md']

  s.add_dependency 'rails'
  s.add_dependency 'slim'
  s.add_dependency 'jquery-rails', '~> 4.4'
  s.add_dependency 'inline_svg'

  s.add_development_dependency 'rspec'
  s.add_development_dependency 'sqlite3'
end
