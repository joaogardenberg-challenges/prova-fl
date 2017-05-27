Rails.application.routes.draw do
	resources :subscribes
	resources :contacts
	root 'home#index'
end
