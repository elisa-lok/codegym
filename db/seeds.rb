# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
puts 'Creating Questions'
questions = Question.create([
  {
    title: 'How to check if a key is present in a hash?',
    tag: 'Ruby'
  },
  {
    title: 'What is the difference between strings and symbol?',
    tag: 'Ruby'
  },
  {
    title: 'What happen if you add two same keys in hash?',
    tag: 'Ruby'
  },
  {
    title: 'How to delete a key from a hash?',
    tag: 'Ruby'
  },
  {
    title: 'How to check if two hashes are identical?',
    tag: 'Ruby'
  },
  {
    title: 'How to combine two hashes in Ruby?',
    tag: 'Ruby'
  },
  {
    title: 'How to get unique keys from two hashes in Ruby?',
    tag: 'Ruby'
  },
  {
    title: 'How does the has_key? key? member? and include? methods in a hash?',
    tag: 'Ruby'
  },
  {
    title: 'What are blocks in Ruby?',
    tag: 'Ruby'
  },
  {
    title: 'Does the order of keys matters to compare two hashes in Ruby?',
    tag: 'Ruby'
  }
])
puts 'Questions Created'
