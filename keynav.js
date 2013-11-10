(function(window) {

  var Keynav = (function() {
    function Keynav() {}

    Keynav.prototype = {
      defaultEnabled: true

      , toggleDefault: function () {
        var self = this;
        return function () {
          self.defaultEnabled = !self.defaultEnabled;
        };
      }

      , getScrollPos: function _getScrollPos() {
        var obj = {};
        obj.x = document.documentElement.scrollLeft || document.body.scrollLeft;
        obj.y = document.documentElement.scrollTop || document.body.scrollTop;
        return obj;
      }

      , genScrollFn: function(fn) {
        var self = this;
        return function () {
          var pos = self.getScrollPos();
          fn(window.scrollTo, pos);
          return self.defaultEnabled;
        };
      }

      , scrollVertically: function(delta) {
        return this.genScrollFn(function(scrollTo, pos) {
          window.scrollTo(pos.x, pos.y + delta);
        });
      }

      , scrollHorizontally: function(delta) {
        return this.genScrollFn(function(scrollTo, pos) {
          window.scrollTo(pos.x + delta, pos.y);
        });
      }

      , scrollToTop: function() {
        return this.genScrollFn(function(scrollTo, pos) {
          window.scrollTo(0,0);
        });
      }

      , scrollToBottom: function() {
        return this.genScrollFn(function(scrollTo, pos) {
          window.scrollTo(0, document.body.scrollHeight);
        });
      }

      , historyBack: function() {
        return function() {
          window.history.back();
        };
      }

      , historyPrev: function() {
        return function() {
          window.history.previous();
        };
      }
    };

    return Keynav;
  }());

  var kn = new Keynav();

  key('h', kn.scrollVertically(100));
  key('t', kn.scrollVertically(-100));
  key('d', kn.scrollHorizontally(-100));
  key('n', kn.scrollHorizontally(100));
  key('g', kn.scrollToTop());
  key('shift+g', kn.scrollToBottom());
  key('ctrl+z', kn.toggleDefault());
  key('alt+d', kn.historyBack());
  key('alt+n', kn.historyPrev());

}(window));
