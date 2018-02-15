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
