class ContactsController < ApplicationController
	def new
		@contact = Contact.new
	end

	def create
		@contact = Contact.new(contact_params)
		@contact.save

		redirect_to url_for(:controller => :home, :action => :index)
	end


	private
		def contact_params
			params.require(:contact).permit(:email, :subject, :message)
		end
end