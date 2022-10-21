class Routine < ApplicationRecord
    has_many :activities
    has_many :users, through: :activities
    has_many :routine_comments
end
