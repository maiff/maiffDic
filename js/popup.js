(function(){
  let buuton = $('input[type="button"]')
  let username = $('input[type="text"]')
  let password = $('input[type="password"]')

  let form = $('form')
  let p = $('p')
  buuton.click(function (e) {
    $.post('https://www.maiff.cn/diclogin',{
      username: username.val(),
      password: password.val()
    }).then((data) => {
      if (data.cookie) {
        chrome.storage.sync.set({'cookie': data.cookie})
        isLogin(1)
      }
      else
        alert('登录失败')
    })
  })

  chrome.storage.sync.get('cookie', function (obj) {
    if (obj.cookie) {
      isLogin(1)    
    } else {
      isLogin(0)
    }
  })

  function isLogin (is) {
    if (is) {
      form.hide()
      p.show()
    } else {
      form.show()
      p.hide()
    }
  } 
}())