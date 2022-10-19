class CreateRoutineComments < ActiveRecord::Migration[7.0]
  def change
    create_table :routine_comments do |t|
      t.text :comment
      t.integer :user_id
      t.integer :routine_id
      t.timestamps
    end
    end
  end
end
