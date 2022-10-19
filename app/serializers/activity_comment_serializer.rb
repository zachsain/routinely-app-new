class ActivityCommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user_id, :activity_id

    belongs_to :user
    belongs_to :activity
end
