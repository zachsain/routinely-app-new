class Activity < ApplicationRecord
    belongs_to :user 
    belongs_to :routine
    has_many :activity_comments

    validates_uniqueness_of :routine_id, scope: :user_id

end
