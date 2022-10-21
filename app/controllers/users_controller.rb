class UsersController < ApplicationController
  before_action :authorize, only: [:show]

    def create
        user = User.create(user_params)
        if user.valid?
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
      end
    
      
    # def show
    #     render json: @current_user, status: :created
    # end
    
    def show
      current_user = User.find(session[:user_id])
      render json: current_user
    end 

    def index
      users = User.all
      render json: users
    end 

  # def show 
  #   user = User.find(session[:id])
  #   render json: user 
  # end  #need to change this back to rendering with session id 

  private

  def user_params 
    params.permit(:username, :password, :email, :bio)
  end 

  def authorize
    return render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
  end
  
end
