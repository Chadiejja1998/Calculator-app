require "test_helper"

class CalculatorsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get calculators_index_url
    assert_response :success
  end
end
