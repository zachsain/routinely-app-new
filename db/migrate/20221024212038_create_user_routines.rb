class CreateUserRoutines < ActiveRecord::Migration[7.0]
  def change
    create_table :user_routines do |t|
      t.date :date
      t.string :title
      t.string :category
      t.text :instructions 
      t.string :duration
      t.string :video_url
      t.integer :likes
      t.integer :user_id
      t.timestamps
    end
  end
end
