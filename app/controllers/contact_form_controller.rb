class ContactFormController < ApplicationController
    def create_contact
      @name = "sharat"
    end

    def save_contact
      begin
        contact = params["contact"]
        if (contact["first_name"].blank? || contact["last_name"].blank? || contact["email"].blank?)
          flash[:error] = "Please fill mandatory fields"
        end

        if flash[:error].blank?
          contact_obj = ContactForm.new(first_name: contact["first_name"], last_name: contact["last_name"], email: contact["email"], message: contact["message"])
          contact_obj.save()
          flash[:notice] = "Contact is created successfully"
          UserMailer.welcome_email(contact["email"]).deliver_now
        end
      rescue Exception => e
        flash[:error] = "#{e}"
      end
    end
end
