var getScrollPos = function _getScrollPos() {
  var obj = {};
  obj.x = document.documentElement.scrollLeft || document.body.scrollLeft;
  obj.y = document.documentElement.scrollTop || document.body.scrollTop;
  return obj;
};

var genScrollFn = function(fn) {
  return function () {
    var pos = getScrollPos();
    fn(window.scrollTo, pos);
  };
};

var scrollVertically = function(delta) {
  return genScrollFn(function(scrollTo, pos) {
    scrollTo(pos.x, pos.y + delta);
  });
};

var scrollHorizontally = function(delta) {
  return genScrollFn(function(scrollTo, pos) {
    scrollTo(pos.x + delta, pos.y);
  });
};

var scrollToTop = function() {
  return genScrollFn(function(scrollTo, pos) {
    scrollTo(0,0);
  });
};

var scrollToBottom = function() {
  return genScrollFn(function(scrollTo, pos) {
    scrollTo(0, document.body.scrollHeight);
  });
};

key('h', scrollVertically(100));
key('t', scrollVertically(-100));
key('d', scrollHorizontally(-100));
key('n', scrollHorizontally(100));
key('g', scrollToTop());
key('shift+g', scrollToBottom());
