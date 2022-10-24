class RoutinesController < ApplicationController
    
    # def create 
    #     routine = Routine.create(routine_params)
    #     render json: routine, status: :created
    # end 

    def index
        routines = Routine.all
        render json: routines
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
        user = User.find(session[:id])
        new_routine = user.routines.create!(routine_params)
        render json: new_routine, status: :created
    end 

    private 

    def routine_params
        params.permit(:id, :date, :title, :category, :instructions, :duration, :video_url, :likes)
    end 

end
