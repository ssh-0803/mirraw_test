class UserMailer < ApplicationMailer
  default from: 'notifications@example.com'
   
   def welcome_email(user_email)
      mail(to: user_email, subject: 'Welcome Email')
   end
end
