/*global window */

/* part 1 >> intro
    whats Bom?
     - Browser object model
    what can i do with Bom?
    - js Bom action to the browser
    ---EX: change url
    --- Background requests
    --- alart, confirm, prompt
    --- window move, window open, window close
    --- change text in the status bar
    
    Bom information
    - Bom has no standerd!
    - all modern browsers implement similar
    --- window
    --- screen
    --- location
    --- history
    --- navigation 
    --- timing
    --- cookies
    - colection of objects control the browser
    - default object of browser is window
    - all global js objects are member of window object
*/

/* part 2 >>>
    window
    - window object is the browser window
    - window object supported by all broser
    - !!! window object has probertise & methods not subborted in all browser
    - window is the default object of browser
    - all global js object are members of window object
*/

/* part 3 >>>
    - alert('message);
    - confirm 
    - prompt
*/

/* part 4 >>>
    - setTimeOut(function, milliseconds, param1, parame2, parame3)
    - clearTimeout(id or number of SetTimeout)
*/

/* part 5 >>>
    - setInterval(function, milliseconds)
    - clearSetInterval(id or number of SetTimeout)
*/

/* part 6 >>>
    - open('url', 'name or attribute', 'specification', 'history replace')
*/
/* part 7 >>>
    - scrollBY(X , Y)
    - scrollTO(X , Y)
*/
/* part 8 >>>
    - stop()
    - close()
    - focus()
*/
/* part 9 >>>
    - innerWidth()
    - outerWidth()
*/
/* part 10 >>>
    - window.pageXOffset
    - window.pageYOffset
*/
/* part 11 >>>
    - window.location.href = 'link location';
    --- location.href =
     - url
     - locale page
     - hash id page
     - protocol [FTP, mail, file] 
*/
/* part 12 >>>
    - window.location.host
    - window.location.hash 
*/
/* part 13 >>>
    - window.location.protocol
    - window.location.pathname
    - window.location.search
*/
/* part 14 >>>
    -   window.location.replace
    -   window.location.assign
    -   window.location.reload(true or false)
    ---true reload of server
    ---true reload of cach browser
*/
/* part 15 >>>
    - window.history.back();
    - window.history.forward();
    - window.history.go();
    ---go(-2) back
    ---go(2) forward
*/
/* part 16 >>>
    - navigator.appCodeName
    - navigator.appName
    - navigator.appVersion
    - navigator.platform
    - navigator.cookieEnabled
    - navigator.language
    - navigator.onLine
    - navigator.product
*/
/* part 17 >>>
    - screen.width
    - screen.height
    - screen.availWidth
    - screen.availHeight
    - screen.colorDepth
    - screen.pixelDepth
*/
/* part 18 >>>
    - document.cookie('name=value; expires=Date; path="")
*/
/* part 19 >>>
    - See the example
    - script cookie >>>> https://github.com/florian/cookie.js
*/
//-----------EXample------------------

// EX: part 3

// alert('hay');

/* 
var conf = window.confirm('are you sure you code = 20')
if (conf === true) { // eslint-disable-next-line no-console
    window.console.log('comblet');
} else {// eslint-disable-next-line no-console
   window.console.log('plasse rebet sing-up'); 
}
*/

// EX: part 3,4
var prom = window.prompt('how old are you');
if (prom > 18) {
    // Ex: part 4
    window.setTimeout(function () {
        'use strict';
        window.document.getElementById('m-wel').textContent = 'welcome you';
    }, 3000); // 3seconds
} else {
    // Ex: part 4
    window.setTimeout(function () {
        'use strict';
        window.document.getElementById('m-wel').textContent = 'sorry';
    }, 3000); // 3seconds
}
// Ex: part 4
window.document.getElementById('click-x').onclick = function () {
    'use strict';
    window.clearTimeout(1);
};

// EX: part 5
var clock = window.document.getElementById('clock');
window.setInterval(function () {
    'use strict';
    if (clock.textContent <= 0) {
        clock.textContent = 'done';
        window.clearInterval(2);
    } else {
        clock.textContent = clock.textContent - 1;
    }
}, 1000);

// Ex: part 6
window.document.getElementById('open-x').onclick = function () {
    'use strict';
    window.open('https://www.google.com', '_blank', 'width=400, height=400, left=100, menubar=no, statusbar=no', 'true');
};

// EX: part 7
window.document.getElementById('scroll-by').onclick = function () {
    'use strict';
    window.scrollBy(200, 150);
    window.console.log('window scroll left ' + window.scrollX);
    window.console.log('window scroll top ' + window.scrollY);
};
window.document.getElementById('scroll-to').onclick = function () {
    'use strict';
    window.scrollTo(50, 50);
    window.console.log('window scroll left ' + window.scrollX);
    window.console.log('window scroll top ' + window.scrollY);
};

// EX: part 8
// use Browser in applye the examble

// EX: part 9
window.console.log('window.innerWidth = ' + window.innerWidth);
window.console.log('window.outerWidth = ' + window.outerWidth);

// EX: part 10
window.console.log('window.pageXOffset = ' + window.pageXOffset);
window.console.log('window.pageYOffset = ' + window.pageYOffset);

// EX: part 11
window.console.log(window.location.href);

// EX: part 12
window.console.log(window.location.host);
window.console.log(window.location.hash);

// EX: part 13
window.console.log(window.location.protocol);
window.console.log(window.location.pathname);
window.console.log(window.location.search);

// EX: part 14
window.console.log(window.location.replace);
window.console.log(window.location.reload);
window.console.log(window.location.assign);

// EX: part 15
/*
window.console.log(window.history.back());
window.console.log(window.history.forward());
window.console.log(window.history.go(2));
*/

// EX: part 16
window.console.log(navigator.appCodeName);
window.console.log(navigator.appName);
window.console.log(navigator.appVersion);
window.console.log(navigator.platform);
window.console.log(navigator.cookieEnabled);
window.console.log(navigator.language);
window.console.log(navigator.onLine);
window.console.log(navigator.product);
if (navigator.cookieEnabled === true) {
    window.console.log('yes cookie Enabled');
}

// EX: part 17
window.console.log('screen width = ' + screen.width);
window.console.log('screen height = ' + screen.height);
window.console.log('screen availWidth = ' + screen.availWidth);
window.console.log('screen availHeight = ' + screen.availHeight);
window.console.log('screen colorDepth = ' + screen.colorDepth);
window.console.log('screen pixelDepth = ' + screen.pixelDepth);

// EX part 18 
// write console in browser document.cookie = "favColor=#f00";

// EX part 19 
/* add cookie write console in browser 
    - document.cookie = 'favFont=Droid; expires=Thu Jul 20 2020 19:41:24 GMT+0200 (توقيت شرق أوروبا الرسمي); path=/';
*/