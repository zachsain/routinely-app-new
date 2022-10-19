class CreateActivityComments < ActiveRecord::Migration[7.0]
  def change
    create_table :activity_comments do |t|

      t.timestamps
    end
  end
end
