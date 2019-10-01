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

In the [Ecomm main app](https://github.com/sephora-sea/luxola/pulls), these variables and mixins are automatically included via the `style-resources-loader`.

## Usage
View the live examples [here](https://www.sephora.sg/style-guide)

## Contributing

### Local environment
- Clone the repo inside the same folder as the main app.
- In your main app `Gemfile`:
```ruby
gem 'sephora_style_guide', path: '../sephora-style-guide'
```
- In your main app `package.json`:
```js
"sephora-style-guide": "file:../sephora-style-guide"
```
- Run `bundle install` and `yarn install`. You should see changes in your `Gemfile.lock` as well as `yarn.lock`.
- Restart your server. Any changes you make in the style guide should now reflect immediately in the main app.

### Issuing a Pull Request
- Work on you own branch from the beginning. Branch name should be something like this: `stories/add_new_font_sephora_sans_shop_426`
- Once you are done, issue the PR.
- Test the changes in the main app. This can be done by specifying the branch as the target in `Gemfile` and `package.json`:
```ruby
gem 'sephora_style_guide', github: 'sephora-sea/sephora-style-guide', branch: 'stories/add_new_font_sephora_sans_shop_426'
```
```js
"sephora-style-guide": "luxola/sephora-style-guide#stories/add_new_font_sephora_sans_shop_426",
```
- After it has been reviewed and tested, it will be merged by the core contributors.

### Updating the main app
- Undo any changes made to `Gemfile` and `package.json`.
- Run `bundle update sephora_style_guide`. You will see a message like this: "Bundler attempted to update sephora_style_guide but its version stayed the same". However, this will usually refer to the version of the style guide gem, for example `0.0.5`, which doesn't update that often. If you check your `Gemfile.lock`, you should see changes to the `revision` part with the commit hash of the latest changes in style guide.
- Run `yarn upgrade sephora-style-guide`.
- Commit the changes and

## License
The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
