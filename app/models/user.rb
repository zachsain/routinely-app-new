class User < ApplicationRecord
     validates :username, presence: true, uniqueness: true

     has_many :activities
     has_many :routines, through: :activities 
     has_many :routine_comments
     has_many :activity_comments 
 
     has_secure_password
 
end
