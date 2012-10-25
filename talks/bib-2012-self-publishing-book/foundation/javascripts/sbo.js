var refresh, 
    refreshCookieName = "refresh", 
    refreshCookieCount = 10, 
    secondsUntilRefresh = 60;
// Thanks, PPK!
function createCookie(name,value,days) {
  var expires, date = new Date();
  if (days) {
    date.setTime(date.getTime()+(days*24*60*60*1000));
    expires = "; expires="+date.toGMTString();
  }
  else {
    expires = "";
  }
  document.cookie = name+"="+value+expires+"; path=/";
  }

function readCookie(name) {
  var nameEQ = name + "=",
      ca = document.cookie.split(';');
  for(i=0; ca.length > i ;i++) {

    var c = ca[i];
    while (c.charAt(0)==' ') {
      c = c.substring(1,c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length,c.length);
    }
  }
  return null;
}
