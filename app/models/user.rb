class User < ApplicationRecord
     validates :username, presence: true, uniqueness: true
     has_many :activities
     has_many :routines, -> { distinct }, through: :activities
     has_many :routine_comments
     has_many :activity_comments 
     has_many :goals
     
 
     has_secure_password
 
end
