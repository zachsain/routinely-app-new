class CreateActivities < ActiveRecord::Migration[7.0]
  def change
    create_table :activities do |t|
      t.string :date
      t.string :title 
      t.string :category 
      t.string :duration
      t.text :description
      t.integer :user_id
      t.integer :routine_id

      t.timestamps
    end
  end
end
