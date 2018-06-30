class CreateNotes < ActiveRecord::Migration[5.1]
  def change
    create_table :notes do |t|
      t.string :lang
      t.text :response
      t.integer :likes
      t.references :convo
      t.timestamps
    end
  end
end
