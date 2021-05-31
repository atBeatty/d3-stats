import * as cheerio from 'cheerio';
import { useState } from 'react';
import Link from 'next/link'
import GolfDataFetch from '../components/GolfDataFetch'





export default function Home(props) {



  return (
    <div >
      <GolfDataFetch />

      <Link href='/stat.109.y2021.eon.t033.html' >
        <a>Stat 109</a>
      </Link>
      <Link href='/stat.02569.y2021.eon.t033.html' >
        <a>Stat 02569</a>
      </Link>
      <Link href='/stat.130.y2021.eon.t033.html' >
        <a>Stat 130</a>
      </Link>
      <Link href='/stat.103.y2021.eon.t033.html' >
        <a>Stat 103</a>
      </Link>
      <Link href='/stat.02372.y2021.eon.t033.html' >
        <a>Stat 02372</a>
      </Link>
    </div >
  )
}
