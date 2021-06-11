class NewssController < ApplicationController

before_action :authenticate_admin!

  def new
    @news = News.new
    @newss = News.page(params[:page]).per(3).reverse_order
  end

  def create
    news = News.new(news_params)
    news.save
    redirect_to new_newss_path
  end

  def destroy
    news = News.find(params[:id])
    news.destroy
    redirect_to new_newss_path
  end

  private
    def  news_params
    params.require(:news).permit(:body, :url)
  end

end