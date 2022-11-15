class ActivitiesController < ApplicationController

    def index
        activities = Activity.all
        render json: activities.all.order(created_at: :desc)
    end 

    def create 
        activity = Activity.create!(activity_params)
        render json: activity, status: :created
    end 

    def show 
        activity = Activity.find(params[:id])
        render json: activity 
    end

    def destroy 
        activity = Activity.find(params[:id])
        activity.destroy  
        head :no_content
    end

    def update
        activity = Activity.find(params[:id])
        activity.update!(activity_params)
        render json: activity
    end 

    private 

    def activity_params 
        params.permit(
        :id, 
        :date, 
        :title,
        :category,
        :duration, 
        :user_id, 
        :routine_id, 
        :description,
        )
    end 
    
end
