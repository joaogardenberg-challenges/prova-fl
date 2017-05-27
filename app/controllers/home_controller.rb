class HomeController < ApplicationController
	def index
		@admin = Admin.new(user: 'fulllab', password: 'rails')
		@admin.save
	end

	def admin
	end

	def tables
		@subscribes = Subscribe.all.order('id ASC')
		@contacts = Contact.all.order('id ASC')
	end
end
