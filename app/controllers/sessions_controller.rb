class SessionsController < ApplicationController
  def new
  end

  def create
    admin = Admin.find_by(user: params[:session][:user].downcase)
  	
  	if admin && admin.authenticate(params[:session][:password])
      log_in admin
      redirect_to tables_path, notice: '<p>You are now logged in.</p>'
  	else
      flash[:danger] = '<p>Invalid admin credentials.</p>'
  		render 'new'
  	end
  end

  def destroy
    log_out
    redirect_to root_path, notice: '<p>You are now logged out.</p>'
  end
end
