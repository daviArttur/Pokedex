
const loadingScroll = () => {

  function handleScroll() {
    const height = document.body.offsetHeight - document.documentElement.clientHeight;
    const scroll = window.scrollY;
    const charge = (height - scroll)

    if (charge <= height * 0.2) {
      console.log(123)
    }
  }
  
  window.addEventListener('scroll', handleScroll)
}

export default loadingScroll