"use strict";

// Overrides native jQuery spinner to avoid validation of the "step".
// We wants to use the step but also wants to leave the user the ability to select specific values.

var $ = require('jquery');
var console = require('console');
$.widget("ui.spinner", $.ui.spinner, {
  _adjustValue: function(value) {
    var adj = this._super(value);

    var options = this.options;

    // fix precision from bad JS floating point math
    value = parseFloat(value.toFixed(this._precision()));

    // clamp the value
    if (options.max !== null && value > options.max) {
      return options.max;
    }
    if (options.min !== null && value < options.min) {
      return options.min;
    }

    return value;
  }
});