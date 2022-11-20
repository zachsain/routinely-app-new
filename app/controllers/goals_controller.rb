class GoalsController < ApplicationController

    def index 
        goal = Goal.all
        render json: goal
    end 

    def create 
        goal = Goal.create!(goal_params)
        render json: comment, status: :created
    end 

    private
    def goal_params
        params.permit(:category, :amount, :user_id, :completed, :date)
    end 
end
