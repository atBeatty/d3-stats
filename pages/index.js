import * as cheerio from 'cheerio';
import { useState } from 'react';
import Link from 'next/link'
import PreviousPerformance from '../components/PreviousPerformance'
import { text } from 'cheerio/lib/static';
import { data } from 'cheerio/lib/api/attributes';
import { find } from 'cheerio/lib/api/traversing';



export async function getStaticProps() {
  const bodyArray = await Promise.all([
    fetch('https://www.pgatour.com/content/pgatour/stats/stat.02567.y2021.eon.t021.html').then(resp => resp.text()),
    fetch('https://www.pgatour.com/content/pgatour/stats/stat.02567.y2021.eon.t019.html').then(resp => resp.text()),
    fetch('https://www.pgatour.com/content/pgatour/stats/stat.02567.y2021.eon.t480.html').then(resp => resp.text()),
    fetch('https://www.pgatour.com/content/pgatour/stats/stat.02567.y2021.eon.t475.html').then(resp => resp.text()),
    fetch('https://www.pgatour.com/content/pgatour/stats/stat.02567.y2021.eon.t012.html').then(resp => resp.text()),
    fetch('https://www.pgatour.com/content/pgatour/stats/stat.02564.y2021.eon.t041.html').then(resp => resp.text()),
  ])

  const dataset = bodyArray.map(statPage => {
    const $ = cheerio.load(statPage)
    const ths = $('#statsTable').find('th').toArray().map(statCat => $(statCat).text().trim())

    const trs = $('tbody').find('tr').toArray()
    const statName = $('h1').text()
    const tdsArray = trs.map(row => $(row).find('td').toArray().map(td => $(td).text().trim())).splice(1)

    const statPairs = tdsArray.map((row) => row.map((td, index) => [td, ths[index]]))
    const option = $('option:selected').text().split('Tournament Only')
    console.log(statPairs[3])
    return { stat: statName, players: statPairs, tournament: option }
  })

  return {
    props: {
      data: dataset
    }
  }
}


export default function Home({ data }) {
  const d3Data = {}

  return (
    <div >
      <PreviousPerformance data={data} />

      <Link href='/stat.109.y2021.eon.t033.html' >
        <a>Stat 109</a>
      </Link>
      <Link href='/stat.02569.y2021.eon.t033.html' >
        <a>Stat 02569</a>
      </Link>
      <Link href='/stat.02564.y2021.eon.t033.html' >
        <a>Stat 02564</a>
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
      <Link href='/stat.376.y2021.eon.t033.html' >
        <a>Stat 376</a>
      </Link>
    </div >
  )
}
