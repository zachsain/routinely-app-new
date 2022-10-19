class CreateRoutineComments < ActiveRecord::Migration[7.0]
  def change
    create_table :routine_comments do |t|

      t.timestamps
    end
  end
end
