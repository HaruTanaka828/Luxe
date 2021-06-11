Rails.application.routes.draw do

devise_for :admins

root 'homes#top'

post '/' => 'homes#create'

resources :newss

get '/areacontents' => 'homes#area'

get '/meo' => 'homes#meo'

get '/site' => 'homes#site'

get '/sns' => 'homes#sns'

get '/listing' => 'homes#listing'

end




