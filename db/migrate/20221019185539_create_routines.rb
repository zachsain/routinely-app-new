class CreateRoutines < ActiveRecord::Migration[7.0]
  def change
    create_table :routines do |t|
      t.date :date
      t.string :title
      t.string :category
      t.text :instructions 
      t.string :duration
      t.string :video_url
      t.timestamps

    end
  end
end
