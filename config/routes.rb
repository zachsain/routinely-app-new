Rails.application.routes.draw do
  resources :activity_comments
  resources :routine_comments
  resources :routines
  resources :activities
  resources :users
  
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # get '/routines/:id', to: 'patients#show'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
  
end


