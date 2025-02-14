class ApplicationController < ActionController::Base
  include Auth
  include InertiaCsrf
  include Pundit::Authorization
  include InertiaFlash
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern
  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  inertia_share auth: -> {
    if user_signed_in?
      {
        user: current_user.email
      }
    end
  }

  private

  def user_not_authorized
    redirect_to request.referrer || root_path, alert: "You are not authorized to perform this action."
  end
end
