class ContactMailer < ApplicationMailer

  def contact_mail(contact)
    @contact = contact
    mail(
      from: 'system@example.com',
      to:   ENV['Gmail_address2'],
      subject: 'お問い合わせ通知'
    )
  end
end