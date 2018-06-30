class HelpCtrlController < ApplicationController
    def index
        
    end
    def show
        @language = Language.find(params[:id])
        @convos = @language.convos
    end
end
