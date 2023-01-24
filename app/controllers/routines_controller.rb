class RoutinesController < ApplicationController
    before_action :authorize, only: [:show, :create, :destroy]
    
    def index
        routines = Routine.all
        render json: routines.all.order(created_at: :desc)
    end 

    def show 
        routine = Routine.find(params[:id])
        render json: routine
    end 

    def destroy 
        routine = Routine.find(params[:id])
        routine.destroy
        head :no_content
    end 

    def create 
        new_routine = Routine.create!(routine_params)
        render json: new_routine, status: :created
    end 

    def find 
       #lower makes param case insensitive
       #find all routines that have params as category
       #return all the activities that use those routines
       routine = Routine.where('lower(category) = lower(?)', params[:category])
       ids = routine.pluck(:id)
       activities = Activity.where(routine_id: ids).reverse_order
       
       if activities.blank?
        render json: {error: "category not found"}, status: :not_found  
       else
            render json: activities
       end 
    end 

    private 

    def routine_params
        params.permit(:title, :category, :instructions, :duration, :video_url, :id)
    end 
    
end
