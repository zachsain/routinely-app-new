class CreateGoals < ActiveRecord::Migration[7.0]
  def change
    create_table :goals do |t|
      t.string :category
      t.integer :amount
      t.string :user_id
      t.boolean :completed, default: false
      t.timestamps
    end
  end
end
