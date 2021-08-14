Rails.application.routes.draw do
    root "contact_form#create_contact"

    get "/contact_form", to: "contact_form#create_contact"
    post "/save_contact", to: "contact_form#save_contact"

end
