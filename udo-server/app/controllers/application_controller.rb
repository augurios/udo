require "application_responder"

class ApplicationController < ActionController::Base
  self.responder = ApplicationResponder
  respond_to :html, :json


  # Prevent CSRF attacks by raising an exception.
	# For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  def angular
  	render 'layouts/application'
  end
end