class ActivitiesController < ApplicationController
    before_action :authorize, only: [:show, :create, :destroy]
    rescue_from ActiveRecord::RecordInvalid, with: :handle_invalid_data
    # rescue_from ActiveRecord::RecordInvalid, with: :handle_not_found

    def create 
        user = User.find(session[:user_id])
        activity = user.activities.create!(activity_params)
        # activity = Activity.create!(activity_params)
        render json: activity, status: :created
    end 

    def show 
        activity = Activity.find(params[:id])
        render json: activity
    end

    def destroy 
        user = User.find(session[:user_id])
        activity = user.activities.find(params[:id])
        activity.destroy  
        head :no_content
    end

    def update
        activity = Activity.find(params[:id])
        activity.update!(activity_params)
        render json: activity
    end 

    def search 
        activity = Activity.where("description LIKE  ?", + "%" + params[:word] + "%")
        routine_id = activity.pluck(:routine_id)
        # routines = Routine.find(routine_id)
        routines = Routine.where(id: routine_id).limit(1)

        if activity.blank?
            render json: {error: "word not found"}, status: :not_found    
        else 
            render json: routines   
        end 
    end

    private 

    def activity_params 
        params.permit(
            :id, 
            :date, 
            :title,
            :category,
            :duration, 
            :routine_id, 
            :description,
        )
    end 

end
