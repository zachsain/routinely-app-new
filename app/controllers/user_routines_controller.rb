class UserRoutinesController < ApplicationController

    def index 
        user_routines = UserRoutine.all
        render json: user_routines
    end 

    def show
        user_routines = UserRoutine.find(parans[:id])
        render json: user_routines
    end 

    def destory
        routine = Routine.find(params[:id])
        routine.destroy
        head :no_content
    end 

    def create 
        new_routine = UserRoutine.create!(routine_params)
        render json: new_routine, status: :created
    end 

    private

    def routine_params
        params.permit(:id, :date, :title, :category, :instructions, :duration, :video_url, :likes, :user_id)
    end 



end
