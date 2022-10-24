class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :image_url, :bio
  has_many :activities
  has_many :routines, through: :activities
  has_many :user_routines
  has_many :activity_comments
  has_many :routine_comments
end
