class Routine < ApplicationRecord
    has_many :activities
    has_many :users, -> { distinct }, through: :activities
    validates :title, presence: true
    validates :category, presence: true
    
    has_many :routine_comments
end
