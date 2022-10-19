class ActivityCommentsController < ApplicationController

    def create 
        comment = ActivityComment.create(comment_params)
        render json: comment, status: :created
    end 

    def destroy 
        comment = ActivityComment.find(params[:id])
        comment.destroy
        head :no_content 
    end 

    # def update 
    #     comment = ActivityComment.find(params[:id])
    #     comment.update(comment_params)

    # end 

    private
    def comment_params
        params.permit(:comment, :user_id, :routine_id)
    end 
    
end
