Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
  get '/help' => 'help_ctrl#index'
  get '/help/:id' => 'help_ctrl#show'
  resources :help_ctrl
end
