const handlebars = require('hbs');

handlebars.registerHelper("switch", function(value, options) {
  this._switch_value_ = value;
  var html = options.fn(this); // Process the body of the switch block
  delete this._switch_value_;
  return html;
});

handlebars.registerHelper("case", function(value, options) {
  if (value == this._switch_value_) {
    return options.fn(this);
  }
});

module.exports = handlebars;