import React from 'react'

// Components
import Main from '../main/Main'

import styles from './Pokedex.module.scss'


const Pokedex = () => {

  const [ charge, setCharge ] = React.useState<number[]>([1]);
  const [ wait, setWait ] = React.useState<boolean>(false)

  const loadingScroll = () => {

    function handleScroll() {
      const height = document.body.offsetHeight - document.documentElement.clientHeight;
      const scroll = window.scrollY;
      const chargeVerify = Number(height - scroll)
  
      if (chargeVerify <= height * 0.25 && wait === false) {
        setWait(true)
        setCharge([...charge, charge[charge.length - 1] + 9])
        setTimeout(() => {
          setWait(false)
        }, 800)
      }
    }
    window.addEventListener('scroll', handleScroll)
  }
  loadingScroll()

  return (
    <section className={styles.container}>
      {charge && charge.map((index: number) => {
        return <Main key={index} valueFromInitialPokemonCharge={index}/>
      })}
    </section>
  )
}

export default Pokedex