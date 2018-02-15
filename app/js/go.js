  import typish from './typewriter.js'
  import CountUp from 'countup.js'
  // preload
  let s1 = require('../images/i-miss-u.png')
  let s2 = require('../images/lips.svg')
  let img1 = document.createElement('img')
  let img2 = document.createElement('img')
  img1.setAttribute('src', s1)
  img2.setAttribute('src', s2)

  function go() {
    typish('#typer')
      .type('/**', '<span class="note">')
      .type('0', '<br>')
      .type('00', '<span class="blank">')
      .type('新的一年想不想 jawil 先生教你写代码呀', '<span class="note">')
      .type('0', '<br>')
      .type('00', '<span class="blank">')
      .wait(10)
      .type('等下。。。', '<span class="note">') 
      .wait(10)
      .type('么么哒~o(*≧▽≦)ツ', '<span class="note">', 0)
      .wait(10)
      .then(() => {
        memeda()
       })
      .wait(25)
      .type('0', '<br>')
      .type('*/', '<span class="note">') 
      .type('0', '<br>')
      .type('function', '<span class="purple">')
      .type('0', '<span class="blank">')
      .type('happyNewYear', '<span class="blue">')
      .type('()', '<span class="gray">')
      .type('0', '<span class="blank">')
      .type('{', '<span class="gray">')
        // 换行
      .type('0', '<br>')
      // 两个空格
      .type('00', '<span class="blank">')
        // 第一个options
      .type('const', '<span class="purple">')
      .type('0', '<span class="blank">')
      .type('baseOptions', '<span class="gray">')
      .type('0', '<span class="blank">')
      .type('=', '<span class="blue">')
      .type('0', '<span class="blank">')
      .type('{', '<span class="gray">')
      .type('0', '<br>')
      // 四个空格
      .type('0000', '<span class="blank">')
      .type('from', '<span class="gray">')
      .type(':', '<span class="blue">')
      .type('0', '<span class="blank">')
      .type("'jawil'", '<span class="green">')
      .wait(15)
      .del(7)
      .type("'叶念'", '<span class="green">')
      .wait(15)
      .del(4)
      .type("'卢林'", '<span class="green">')
      .type(',', '<span class="gray">')
      .type('0', '<br>')
      // 郑仙君
      .type('0000', '<span class="blank">')
      .type('to', '<span class="gray">')
      .type(':', '<span class="blue">')
      .type('0', '<span class="blank">')
      .type("'郑仙女'", '<span class="green">')
      .wait(15)
      .del(2)
      .type("君'", '<span class="green">')
      .type(',', '<span class="gray">')
      .type('0', '<br>')
      // time
      .type('0000', '<span class="blank">')
      .type('time', '<span class="gray">')
      .type(':', '<span class="blue">')
      .type('0', '<span class="blank">')
      .type("'2018-02-16 00:00'", '<span class="green">')
      .type(',', '<span class="gray">')
      .type('0', '<br>')
      
      // text 新年快乐
      .type('0000', '<span class="blank">')
      .type('blessings', '<span class="gray">')
      .type(':', '<span class="blue">')
      .type('0', '<span class="blank">')
      .type("'新年快乐！'", '<span class="green">')
      .type('0', '<br>')
      
      .type('00', '<span class="blank">')
      .type('}', '<span class="gray">')
      .type(';', '<span class="gray">')
      .type('0', '<br>')

        // 第二个options
      .type('00', '<span class="blank">')
      .type('const', '<span class="purple">')
      .type('0', '<span class="blank">')
      .type('heartOptions', '<span class="gray">')
      .type('0', '<span class="blank">')
      .type('=', '<span class="blue">')
      .type('0', '<span class="blank">')
      .type('{', '<span class="gray">')
      .type('0', '<br>')
      // 四个空格
      .type('0000', '<span class="blank">')
      .type('color', '<span class="gray">')
      .type(':', '<span class="blue">')
      .type('0', '<span class="blank">')
      .type("'#fc2e5a'", '<span class="green heartBg">')
      .type(',', '<span class="gray">')
      .type('0', '<br>')
      // width
      .type('0000', '<span class="blank">')
      .type('width', '<span class="gray">')
      .type(':', '<span class="blue">')
      .type('0', '<span class="blank">')
      .type("'150px'", '<span class="green">')
      .type(',', '<span class="gray">')
      .type('0', '<br>')
      // margin
      .type('0000', '<span class="blank">')
      .type('margin', '<span class="gray">')
      .type(':', '<span class="blue">')
      .type('0', '<span class="blank">')
      .type("'0 auto'", '<span class="green">')
      .type(',', '<span class="gray">')
      .type('0', '<br>')
      // top
      .type('0000', '<span class="blank">')
      .type('top', '<span class="gray">')
      .type(':', '<span class="blue">')
      .type('0', '<span class="blank">')
      .type("'30%'", '<span class="green">')
      .type(',', '<span class="gray">')
      .type('0', '<br>')
      // duration
      .type('0000', '<span class="blank">')
      .type('duration', '<span class="gray">')
      .type(':', '<span class="blue">')
      .type('0', '<span class="blank">')
      .type("'0.5s'", '<span class="green">')
      .type('0', '<br>')
      .type('00', '<span class="blank">')
      .type('}', '<span class="gray">')
      .type(';', '<span class="gray">')
      .type('0', '<br>')
      
      // creat new
      .type('00', '<span class="blank">')
      .type('let', '<span class="purple">')
      .type('0', '<span class="blank">')
      .type('base', '<span class="red">')
      .type('0', '<span class="blank">')
      .type('=', '<span class="blue">')
      .type('0', '<span class="blank">')
      .type('new', '<span class="purple">')
      .type('0', '<span class="blank">')
      .type('Base', '<span class="yellow">')
      .type('(baseOptions);', '<span class="gray">')
      .type('0', '<br>')
      .type('00', '<span class="blank">')
      .type('let', '<span class="purple">')
      .type('0', '<span class="blank">')
      .type('heart', '<span class="red">')
      .type('0', '<span class="blank">')
      .type('=', '<span class="blue">')
      .type('0', '<span class="blank">')
      .type('new', '<span class="purple">')
      .type('0', '<span class="blank">')
      .type('Heart', '<span class="yellow">')
      .type('(heartOptions);', '<span class="gray">')
      .type('0', '<br>')
      // document.body
      .type('00', '<span class="blank">')
      .type('document', '<span class="red">')
      .type('.', '<span class="gray">')
      .type('body', '<span class="red">')
      .type('.', '<span class="gray">')
      .type('appendChild', '<span class="green-blue">')
      .type('(base);', '<span class="gray">')
      .type('0', '<br>')
      
      .type('00', '<span class="blank">')
      .type('document', '<span class="red">')
      .type('.', '<span class="gray">')
      .type('body', '<span class="red">')
      .type('.', '<span class="gray">')
      .type('appendChild', '<span class="green-blue">')
      .type('(heart);', '<span class="gray">')
      .type('0', '<br>')
      
      .type('};', '<span class="gray">')
      .wait(20)
      .type('0', '<br>')
      .type('happyNewYear', '<span class="blue">')
      .type('();', '<span class="gray">')
      .wait(5)
      .then(() => {
        transBoard('show', () => {
          happyNewYear()
        })
      })
  }
  function memeda() {
    let lip = document.createElement('div')
    lip.className = 'lip'
    document.body.appendChild(lip);
    setTimeout(() => {
      lip.remove()
    }, 2500)
  }
  function transBoard(type, cb) {
    let board = document.querySelector('.board')
    board.style.display = 'block'
    setTimeout(() => {
      if (!type || type === 'hide') {
        board.style.right = 'calc(-100vw - 10px)'
      } else {
        board.style.right = '0'
      }
    }, 30);
    setTimeout(() => {
      cb && cb()
    }, 2000)
  }
  function happyNewYear() {
    let showArea = document.querySelector('#showArea')
    // let heartBg = document.querySelector('#heartBg')
    let foot = document.querySelector('.foot')
    let send = document.querySelector('#send')
    send.addEventListener('click', () => {
      stars()
    })
    showArea.className = 'show'
    // heartBg.style.display = 'block'
    heartMain.style.display = 'block'
    foot.style.display = 'block'
    document.querySelector('pre').style.display='block'
    setTimeout(() => {
      count()
    }, 2000)
  }
  function count() {
    const date = new Date('2018/02/02 00:00:00')
    let end = new Date()
    let seconds = (Date.parse(end) - Date.parse(date)) / 1000
    let days = Math.floor(seconds / (3600 * 24))
    let timer = document.querySelector('#timer')
    timer.style.display = 'block'
    let numAnim = new CountUp("count", 0, days, 0, 5)
    numAnim.start()
  }
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
      let src = require('../images/i-miss-u.png')
      img.setAttribute('src', src)
      img.setAttribute('class', 'stars')
      startsContainer.appendChild(img)
    }
    let comments = document.querySelectorAll('.comment')
    let comentsLength = 0
    if (comments) {
      comentsLength = comments.length
      if (comentsLength > 7) {
        for(let i = 0; i < comentsLength; i++) {
          comments[i].remove()
        }
        comentsLength = 0
      }
    }
    let comment = document.createElement('div')
    comment.className = 'comment'
    comment.style.bottom = 180 + comentsLength * 55 + 'px'
    comment.innerHTML = '新年快乐！'
    document.body.appendChild(comment)
    
    document.body.appendChild(startsContainer)
    let els = document.querySelectorAll('.startsContainer')
    let current = els.length
    if (current > max) {
      els[0].remove()
    }
  }
  export {
    go
  }
