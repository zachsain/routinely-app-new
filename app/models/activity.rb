class Activity < ApplicationRecord
    belongs_to :user 
    belongs_to :routine
    has_many :activity_comments
    validates :title, presence: true

end
