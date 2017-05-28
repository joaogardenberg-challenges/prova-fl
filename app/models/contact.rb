class Contact < ApplicationRecord
	before_save {self.email = email.downcase}
	VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
	validates :email, presence: true, length: {minimum: 1, maximum: 255}, format: {with: VALID_EMAIL_REGEX}
	validates :subject, presence: true, length: {minimum: 1, maximum: 255}
	validates :message, presence: true, length: {minimum: 1, maximum: 255}
end
