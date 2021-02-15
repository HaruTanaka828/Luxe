class HomesController < ApplicationController

  def top
  end

  def create
    @contact = Contact.new(contact_params)
    @contact.save
    redirect_to root_path
  end

  private
    def  contact_params
    params.permit(:name, :address, :body)
  end

end
