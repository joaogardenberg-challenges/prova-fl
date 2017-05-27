Rails.application.routes.draw do
	root		'home#index'
	get			'/login',	to: 'sessions#new'
	post		'/login',	to: 'sessions#create'
	delete		'/logout',	to: 'sessions#destroy'
	get			'/tables',	to: 'home#tables'
	resources	:subscribes
	resources	:contacts
	resources	:home
end
