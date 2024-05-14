# config/routes.rb
Rails.application.routes.draw do
  root 'pages#home' # This sets the home action in the pages controller as the root path
  # ... other routes ...
end
Rails.application.routes.draw do
  # ... other routes ...
  get '/about', to: 'pages#about', as: 'about'
  # ... other routes ...
end

