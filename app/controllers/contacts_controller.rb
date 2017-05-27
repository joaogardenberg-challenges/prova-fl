class ContactsController < ApplicationController
	def create
		@contact = Contact.new(contact_params)
		
		if @contact.save
			redirect_to root_path, notice: '<p>The message was successfully sent.</p>'
		end
	end

	private
		def contact_params
			params.require(:contact).permit(:email, :subject, :message)
		end
end