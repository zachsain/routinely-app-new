class RoutineCommentsController < ApplicationController
    
    def create 
        comment = RoutineComment.create(comment_params)
        render json: comment, status: :created
    end 

    def destroy 
        comment = RoutineComment.find(params[:id])
        comment.destroy 
        head :no_content 

    end 

    private
    def comment_params
        params.permit(:comment, :user_id, :routine_id)
    end 
end
