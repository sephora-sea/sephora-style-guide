# Sephora Style Guide
The Sephora Style Guide is a front-end framework similar to Twitter Bootstrap (and modelled closely to it) which provides the Sephora Digital SEA team with a set of reusable and composable components to work with.

## Installation

### Ruby on Rails
Add it to your Gemfile:
```ruby
gem 'sephora_style_guide', git: 'https://github.com/luxola/sephora-style-guide', branch: 'master'
```

Run the following command to install it:
```bash
$ bundle
```

You can now include the style guide base file in your `application.scss`:
```scss
@import 'sephora_style_guide/base';
```

For JS modules, you will need to manually include them in your `application.js`:
```js
// = require sephora_style_guide/modal
```

If you need the documentation page, you can add it by mounting the engine in your `config/routes.rb`:
```ruby
mount SephoraStyleGuide::Engine => '/style-guide'
```

### NodeJS
If you are using Yarn:
```bash
$ yarn add sephora-style-guide
```

Or when using npm:
```bash
$ npm install sephora-style-guide --save
```

You can now include the style guide elements (variables, mixins...) in your SCSS files:
```scss
@import '~sephora-style-guide/app/assets/stylesheets/sephora_style_guide/variables';
@import '~sephora-style-guide/app/assets/stylesheets/sephora_style_guide/mixins';
```

## Usage
View the live examples [here](https://www.sephora.sg/style-guide)

## Contributing

### Local environment
- Clone the repo inside the same folder as the main app.
- In your Gemfile:
```ruby
gem 'sephora_style_guide', path: '../sephora_style_guide'
```
- Run `bundle install`
- Restart your server. Any changes you make in the style guide should now reflect immediately in the main app.

### Issuing a Pull Request
- Work on you own branch fron the beginning. Branch name should be something like this: `stories/sephora_style_guide_modal_window_140641681`
- Once you are done, issue the PR.
- After it has been reviewed, it will be merged by the core contributers.

## License
The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
