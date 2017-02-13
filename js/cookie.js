//jquery cookie利用
// var period = $.cookie("period");
// $.cookie("period","7days",{ expires: 7 });

// var expires = $.cookie("expires");
// console.log(expires);
// if(period == null) {

//   location.href = 'http://localhost/cookie/top.html';
// }

// console.log(period);

// document.cookie = 'data=123&';
// document.cookie = 'data2=abc';
// document.cookie = 'data=' + encodeURIComponent('&');


$.cookie("abc",'7',{expires:7});
$.cookie("def",'7',{expires:7});
$.cookie("zzz",'sleep',{expires:7});

var a = $.cookie('abc');

(function() {

  function Cookie(data) {
    this.name = "";
    this.entry = "";
    this.disable = "";
    this.able = "";
  }

  Cookie.prototype.getCookie = function(data) {
    var _ = this;
    _.name = data.name;
    _.entry = data.entry;
    _.disable = data.disable;
    _.able = data.able;

    var cookie = $.cookie(_.name);
    var entry = $(_.entry);
    if(cookie) {
      entry.find(_.able).addClass("js-none");
      entry.find(_.disable).removeClass("js-none");
    } else {
      entry.find(_.disable).addClass("js-none");
      entry.find(_.able).removeClass("js-none");

    }
  }
var cookie = new Cookie();


  cookie.getCookie({
    name: "abc",
    entry: ".js-entry",
    disable: ".js-entry-disabled",
    able:".js-entry-able"
  });

  cookie.getCookie({
    name: "def",
    entry: ".js-entry2",
    disable: ".js-entry-disabled2",
    able:".js-entry-able2"
  });








})();
