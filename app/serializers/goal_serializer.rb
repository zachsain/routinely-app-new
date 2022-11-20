class GoalSerializer < ActiveModel::Serializer
  attributes :id, :date, :category, :user_id, :amount

  belongs_to :user
end
