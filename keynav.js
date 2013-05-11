var getScrollPos = function _getScrollPos() {
  var obj = {};
  obj.x = document.documentElement.scrollLeft || document.body.scrollLeft;
  obj.y = document.documentElement.scrollTop || document.body.scrollTop;
  return obj;
};

var scrollVertically = function(delta) {
  window.scrollTo(getScrollPos().x, getScrollPos().y + delta);
};

var scrollHorizontally = function(delta) {
  window.scrollTo(getScrollPos().x + delta, getScrollPos().y);
};

key('h', function(){ scrollVertically(100); });
key('t', function(){ scrollVertically(-100); });
key('d', function(){ scrollHorizontally(-100); });
key('n', function(){ scrollHorizontally(100); });
