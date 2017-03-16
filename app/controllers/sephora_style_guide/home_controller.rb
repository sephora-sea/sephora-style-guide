module SephoraStyleGuide
  class HomeController < SephoraStyleGuide::ApplicationController
    def index
      @buttons = buttons
    end

    private

    def buttons
      [
        {
          name: 'Default',
          class: nil
        },
        {
          name: 'Primary',
          class: 'btn-primary'
        },
        {
          name: 'White',
          class: 'btn-white'
        },
        {
          name: 'Grey',
          class: 'btn-grey'
        },
        {
          name: 'Disabled',
          class: 'disabled'
        }
      ].freeze
    end
  end
end
