class RoutineCommentSerializer < ActiveModel::Serializer

  attributes :id, :comment, :user_id, :routine_id

  belongs_to :user
  belongs_to :routine
  
end
