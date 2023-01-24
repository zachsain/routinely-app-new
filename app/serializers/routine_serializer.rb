class RoutineSerializer < ActiveModel::Serializer
  attributes :id, :date, :title, :category, :instructions, :duration, :video_url, :created_at 
  
end
