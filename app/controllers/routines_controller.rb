class RoutinesController < ApplicationController
    

    def index
        routines = Routine.all
        render json: routines.all.order(created_at: :desc)
    end 

    def show 
        routine = Routine.find(params[:id])
        render json: routine
    end 

    def destory
        routine = Routine.find(params[:id])
        routine.destroy
        head :no_content
    end 

    def create 
        new_routine = Routine.create!(routine_params)
        render json: new_routine, status: :created
    end 

    private 

    def routine_params
        params.permit(:title, :category, :instructions, :duration, :video_url, :id)
    end 

end
