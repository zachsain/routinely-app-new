class ActivitySerializer < ActiveModel::Serializer

  attributes :id, :title, :category, :duration, :description, :likes, :user_id, :routine_id
  belongs_to :user
  belongs_to :routine
  has_many :activity_comments
  
end
