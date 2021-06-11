class ChangeDatatypeBodyOfContacts < ActiveRecord::Migration[5.2]
  def change
  	change_column :contacts, :body, :text
  end
end
