import React from 'react'
import { useNavigate } from 'react-router'

// Styles
import styles from './Main.module.scss'

// Router


type sprites = {
  front_default: string
}

type stats = {
  base_stat: number
}

type pokemonsType = {
  id: number
  name: string
  sprites: sprites
  stats: stats[]
}

type Props = {
  valueFromInitialPokemonCharge: number
}

const Main = ({ valueFromInitialPokemonCharge }: Props) => {
  const [pokemons, setPokemons] = React.useState<pokemonsType[] | null>(null);

  const navigate = useNavigate()

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    const pokemonName = event.currentTarget.children[0].children[0].innerHTML
    console.log(pokemonName)
    navigate(`./pokemon/${pokemonName}`)
  }

  React.useLayoutEffect(() => {
    let memory: pokemonsType[] = []
      async function callPokemon() {
        for (let index = valueFromInitialPokemonCharge; index < valueFromInitialPokemonCharge + 9; index++) {
          const call = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
          const json = await call.json()
          memory.push(json)
        }
        setPokemons(memory)
      }
    callPokemon()
  }, [valueFromInitialPokemonCharge])
  return (
    <>
      {pokemons && pokemons.map((pokemon) => {
        return (
          <div onClick={handleClick} key={pokemon.id} className={styles.boxPokemon}>
            <div className={styles.containerIdName}>
              <p>{pokemon.name}</p>
              <p>{pokemon.id}</p>
            </div>
            <img src={pokemon.sprites.front_default} alt="" />
            <div className={styles.boxInfo}>
              <p>Hp: {pokemon.stats[0].base_stat}</p>
              <p>Ataque: {pokemon.stats[1].base_stat}</p>
              <p>Defesa: {pokemon.stats[2].base_stat}</p>
              <p>Velocidade: {pokemon.stats[5].base_stat}</p>
            </div>
          </div>
        )
      })}

      {!pokemons && <p>asdoiahsd</p>}
    </>
  )
}

export default Main