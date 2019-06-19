class Handle {
  constructor(props) {
    let dom = document.createElement('img')
    dom.src='https://cdn.dribbble.com/users/628165/screenshots/6644872/travel-app_2x.png'
    props.innerHTML = 'handle3_browniu_async'
    props.appendChild(dom)
  }
}

export default Handle
