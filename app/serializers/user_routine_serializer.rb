class UserRoutineSerializer < ActiveModel::Serializer
  attributes :id, :title, :category, :instructions, :duration, :video_url, :likes, :user_id
  belongs_to :user
end
