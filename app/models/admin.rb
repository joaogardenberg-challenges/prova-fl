class Admin < ApplicationRecord
	before_save {self.user = user.downcase}
	validates :user, presence: true, length: {maximum: 50}
	validates :password, presence: true, length: {maximum: 50}
	has_secure_password
end
