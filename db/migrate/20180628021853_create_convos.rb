class CreateConvos < ActiveRecord::Migration[5.1]
  def change
    create_table :convos do |t|
      t.string :lang
      t.string :category
      t.string :title
      t.text :question
      t.references :language
      t.timestamps
    end
  end
end
