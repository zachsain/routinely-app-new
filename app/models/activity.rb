class Activity < ApplicationRecord
    belongs_to :user 
    belongs_to :routine
    has_many :activity_comments
    accepts_nested_attributes_for :routine
end
