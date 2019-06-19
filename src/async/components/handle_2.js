class Handle {
  constructor(props) {
    let dom = document.createElement('img')
    dom.src='https://cdn.dribbble.com/users/466659/screenshots/6646814/cwr_-home_2.1_2x.png'
    props.innerHTML = 'handle2_browniu_async'
    props.appendChild(dom)
  }
}

export default Handle
