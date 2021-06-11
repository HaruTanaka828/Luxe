class HomesController < ApplicationController

  def top
    @newss = News.page(params[:page]).per(3).reverse_order
  end

  def create
    @contact = Contact.new(contact_params)
    @contact.save
    flash[:success] = "お問い合わせありがとうございます。入力頂いたメールアドレス宛にお返事させて頂きますので今しばらくお待ちください。"
    ContactMailer.contact_mail(@contact).deliver
    redirect_to root_path
  end

  private
    def  contact_params
    params.permit(:name, :address, :body)
  end

end
