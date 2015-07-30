;(function($) {
  "use strict";

  var StarsRating = function (ele, opt) {
    this.ele = ele;
    this.options = opt;
    this.$ele = $(this.ele);
    this.init();
  }

  StarsRating.prototype.init = function () {
    this.$ele.addClass('star-rating');
    this.$ele.css('font-size', this.options.size);
    this.$ele.delegate('label', 'click', function(evt) {
      var $star = $(evt.target);
      $star.siblings().attr('data-select', false);
      $star.attr('data-select', true);
      this.$ele.find('input').val($star.data('value'));
    }.bind(this));
    this.render();
  }

  StarsRating.prototype.render = function () {
    var startEle = '';
    for (var i = this.options.count; i > 0; i--) {
       startEle += '<label data-value="' + i * this.options.score + '">★</label>'
    }
    startEle += '<input type="text" name="star-value" value="0" hidden/>';
    this.ele.innerHTML = startEle;
  }

  var defaults = {
    size: '30px',
    count: 5,
    score: 1
  };

  $.fn.StarsRating = function (options) {
    if (!document.head.querySelector('#star-rating')) {
      document.head.innerHTML += '<style id="star-rating" type="text/css">@{{src/main.css}}</style>';
    }
    var options = $.extend({}, defaults, options);
    return this.each(function () {
      new StarsRating(this, options);
    });
  }

  $.fn.getStarsScore = function (options) {
    var options = $.extend({}, defaults, options);
    var val = [];
    this.each(function () {
      val.push(Number($(this).find('input').val()));
    });
    return val.length > 1 ? val : val[0];
  }
})(window.jQuery);