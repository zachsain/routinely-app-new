class RoutineSerializer < ActiveModel::Serializer
  attributes :id, :date, :title, :category, :instructions, :duration, :video_url, :likes 

  has_many :activities
  has_many :users, through: :activities
  has_many :routine_comments
end
