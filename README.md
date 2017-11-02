# fix-footer
[Demo (CodePen)](https://codepen.io/shimba/pen/mWXVVW)

## How to use? ##

Initialize the script.
```javascript
(function (d, w) {
    'use strict';

    let fix = new FixFooter({
        pageClass: 'body',
        spacedClass: '.content'
    });

    w.addEventListener('resize', fix.space);
})(document, window);
```
