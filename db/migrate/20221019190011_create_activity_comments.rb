class CreateActivityComments < ActiveRecord::Migration[7.0]
  def change
    create_table :activity_comments do |t|
      t.text :comment 
      t.integer :user_id
      t.integer :activity_id

      t.timestamps
    end
  end
end
