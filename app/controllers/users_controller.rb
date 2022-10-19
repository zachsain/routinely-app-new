class UsersController < ApplicationController

    def create
        user = User.create(user_params)
        if user.valid?
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
      end
    
      
    def show
        render json: @current_user, status: :created
    end
    

  def show 
    user = User.find(params[:id])
    render json: user 
  end 

  private 
  def user_params 
    params.permit(:username, :password_digest, :email, :bio)
  end 
  
end
