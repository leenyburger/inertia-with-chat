class StaticsController < ApplicationController

  def index
    render inertia: 'statics/Index'
  end
end
