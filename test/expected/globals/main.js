(function(__exports__, __dependency1__) {
  "use strict";
  var foo = __dependency1__;

  var bar = function($el) {
    foo($el);
  };

  __exports__.bar = bar;
})(myNamespace, myNamespace.foo);(function(__exports__, __dependency1__) {
  "use strict";
  var jQuery = __dependency1__;

  var foo = function($el) {
    $el.hide();
  };

  __exports__.foo = foo;
})(myNamespace, jQuery);(function(__exports__) {
  "use strict";
  var lol = 'lol';
  __exports__.lol = lol;
})(myNamespace);