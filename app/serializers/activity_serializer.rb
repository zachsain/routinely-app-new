class ActivitySerializer < ActiveModel::Serializer

  attributes :id, :date, :title, :category, :duration, :description, :user_id, :routine_id
  belongs_to :user
  belongs_to :routine
    
end
