# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

languages = Language.create([{lang:'html'},{lang:'css'},{lang:'js'},{lang:'jquery'},{lang:'java'},{lang:'sql'}])
Convo.create(lang: languages.first,category:'help',title:'is there a tag for this?',question:'Is there a way to make this bold without using css?')
Convo.create(lang: languages.second,category:'help',title:'layout dilema',question:'why is wont my div center? someDiv.div{width:40%,float:left}')
