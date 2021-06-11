require 'test_helper'

class NewssControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get newss_new_url
    assert_response :success
  end

end
