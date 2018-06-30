class Convo < ApplicationRecord
    belongs_to :language
    has_many :notes
end
