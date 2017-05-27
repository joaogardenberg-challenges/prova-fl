class SubscribesController < ApplicationController
	def create
		@subscribe = Subscribe.new(subscribe_params)
		
		if @subscribe.save
			redirect_to root_path, notice: '<p>Successfully subscribed.</p>'
		end
	end

	private
		def subscribe_params
			params.require(:subscribe).permit(:email)
		end
end
