class SubscribesController < ApplicationController
	def new
		@subscribe = Subscribe.new
	end

	def create
		@subscribe = Subscribe.new(subscribe_params)
		@subscribe.save

		redirect_to url_for(:controller => :home, :action => :index)
	end


	private
		def subscribe_params
			params.require(:subscribe).permit(:email)
		end
end
