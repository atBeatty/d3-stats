import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import results2015 from '../lib/data/results2015.json'
import M2015 from '../lib/data/M2015'
import { useState } from "react";
import PlayerBreakdown from '../components/PlayerBreakdown'
import PlayerCard from '../components/PlayerCard'
// import {mastersDataStore} from '../lib/data/getMastersXLSX'

export default function Home() {

  const [selectedPlayer, setSelectedPlayer] = useState(null)
  const dataset = M2015()
  const handleClick = (e) => {
    setSelectedPlayer(dataset.find(pl => pl.player === e.target.name))
  }


  // const playerLinks = M2015().map(pl => <Link href={`/${pl.player}`}><a>{pl.player}</a></Link>)
  const playerButtons = dataset.map(pl => <button name={pl.player} onClick={handleClick}>{pl.player}</button>)






  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>

    Masters Visuals
      <Link href='/masters/2015' >2015</Link>

      {/* <img src='/circles.svg'></img> */}
      <div>{playerButtons}</div>

      <PlayerCard playerData={selectedPlayer} />

    </div >
  )
}
