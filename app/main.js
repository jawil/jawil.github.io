require("./css/bubble.css");
require("./css/stars.scss");

require("./css/text.css");
require("./css/code.css");
require("./css/full.css");
require("./css/cursor.css");

require.ensure([], function(require) {
  const love = require("./js/go.js");
  window.onload = () => {
    love.go();

    var lastClickTime = 0;
    var clickTimer;
    document.querySelector("pre").addEventListener("click", event => {
      var nowTime = new Date().getTime();
      if (nowTime - lastClickTime < 400) {
        /*双击*/
        lastClickTime = 0;
        clickTimer && clearTimeout(clickTimer);
        document.querySelector("pre").querySelectorAll("i").forEach(item => {
          item.style.backgroundColor = "red";
          stars();
          //item.style.color = "transparent";
        });
      } else {
        /*单击*/
        lastClickTime = nowTime;
        clickTimer = setTimeout(() => {
          console.log("单击");
        }, 400);
      }
    });
  };
});


function stars() {
  let send = document.querySelector('#send')
  send.setAttribute('disabled', '')
  setTimeout(() => {
    send.removeAttribute('disabled')
  }, 2000)
  let max = 5
  let startsContainer = document.createElement('div')
  startsContainer.className = 'startsContainer'
  for (let i = 0; i < 30; i++) {
    let img = document.createElement('img')
    let src = require('./images/6.png')
    img.setAttribute('src', src)
    img.setAttribute('class', 'stars')
    startsContainer.appendChild(img)
  }
  
  document.body.appendChild(startsContainer)
  let els = document.querySelectorAll('.startsContainer')
  let current = els.length
  if (current > max) {
    els[0].remove()
  }
}