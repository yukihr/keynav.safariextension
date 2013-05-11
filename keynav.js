var getScrollPos = function _getScrollPos() {
  var obj = {};
  obj.x = document.documentElement.scrollLeft || document.body.scrollLeft;
  obj.y = document.documentElement.scrollTop || document.body.scrollTop;
  return obj;
};

var scrollVertically = function(delta) {
  return function () {
    window.scrollTo(getScrollPos().x, getScrollPos().y + delta);
  };
};

var scrollHorizontally = function(delta) {
  return function () {
    window.scrollTo(getScrollPos().x + delta, getScrollPos().y);
  };
};

key('h', scrollVertically(100));
key('t', scrollVertically(-100));
key('d', scrollHorizontally(-100));
key('n', scrollHorizontally(100));
