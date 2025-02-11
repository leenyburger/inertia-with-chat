class StaticsController < ApplicationController

  def index
    render inertia: 'statics/index'
  end
end
