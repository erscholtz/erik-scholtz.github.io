#!/usr/bin/env ruby
# frozen_string_literal: true

# Build locally; GitHub Actions handles publishing.
Dir.chdir(__dir__) do
  success = system({ "JEKYLL_ENV" => "production" }, "bundle", "exec", "jekyll", "build", "--trace")
  abort "Build failed. Run bundle install and try again." unless success
end
puts "Site built in _site/. Preview with: bundle exec jekyll serve"
