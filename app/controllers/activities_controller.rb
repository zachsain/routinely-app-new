class ActivitiesController < ApplicationController

    def index
        render json: Activity.all
    end 

    def create 
        activity = Activity.create!(activity_params)
        render json: activity, status: :created
    end 

    def show 
        activity = Activity.find(params[:id])
        render json: activity 
    end

    def destory 
        activity = Activity.find(params[:id])
        activity.destroy  
        head :no_content
    end

    def update
        activity = Activity.find(params[:id])
        activity.update(activity_params)
        render json: activity
    end 

    private 

    def activity_params 
        params.permit(:id, 
        :date, 
        :title,
        :category,
        :duration, 
        :user_id, 
        :routine_id, 
        :likes, 
        :description,
        # routine_attributes: [:title, :category, :duration, :instructions]
        )
    end 
    
end
