class Handle {
  constructor(props) {
    let dom = document.createElement('img')
    dom.src = 'https://cdn.dribbble.com/assets/art-banners/spacecade_800-3a9fd6ac5c5d60f81c679d80637fe63a7a5f35737486bfa1268476ad0631855f.png'
    props.innerHTML = 'handle1_browniu_async'
    props.appendChild(dom)
  }
}

export default Handle
