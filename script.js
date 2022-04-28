getAva()
theme()
holiday()

function holiday() {
  let date = new Date()
  let snow = document.createElement("script")

  if (date.getMonth() == 11 | date.getMonth() == 0) {
    document.documentElement.setAttribute('event', 'NewYear')
    document.head.appendChild(snow)
    snow.src = 'https://thecode.media/wp-content/uploads/2019/12/snowfall2020.js'
  }else if (date.getDate() >= 20 & date.getMonth() == 9 | date.getDate() <= 5 & date.getMonth() == 10) {
    document.documentElement.setAttribute('event', 'Helloween')
  }
}

function theme() {
  const buttonSwitch = document.getElementById('ava')

  buttonSwitch.addEventListener('click', () => {
    if (document.documentElement.getAttribute('theme') == 'dark'){
      document.documentElement.setAttribute('theme', 'light')
    }else {
      document.documentElement.setAttribute('theme', 'dark')
    }
  })
}

async function getAva() {
  const response = await fetch('https://api.telegram.org/bot5281659940:AAEJLcavorU-PoeGX8Q49nGNkDuO9vzGXBE/getUserProfilePhotos?user_id=5285094955')
  const data = await response.json()
  
  let ava = data.result.photos[0][2].file_id
  
  const res = await fetch('https://api.telegram.org/bot5281659940:AAEJLcavorU-PoeGX8Q49nGNkDuO9vzGXBE/getFile?file_id='+ava)
  const dataava = await res.json()
  
  let avaUrl = 'https://api.telegram.org/file/bot5281659940:AAEJLcavorU-PoeGX8Q49nGNkDuO9vzGXBE/' + dataava.result.file_path
  
  document.getElementById('ava').src = avaUrl
}