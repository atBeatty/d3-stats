import * as cheerio from 'cheerio';
import { useState } from 'react';
import Link from 'next/link'
import GolfDataFetch from '../components/GolfDataFetch'
import { text } from 'cheerio/lib/static';
import { data } from 'cheerio/lib/api/attributes';
import { find } from 'cheerio/lib/api/traversing';



export async function getStaticProps() {
  const bodyArray = await Promise.all([
    fetch('https://www.pgatour.com/content/pgatour/stats/stat.02674.y2021.eon.t021.html').then(resp => resp.text()),
    fetch('https://www.pgatour.com/content/pgatour/stats/stat.02674.y2021.eon.t019.html').then(resp => resp.text()),
    fetch('https://www.pgatour.com/content/pgatour/stats/stat.02674.y2021.eon.t480.html').then(resp => resp.text()),
  ])

  const dataset = bodyArray.map(statPage => {
    const $ = cheerio.load(statPage)
    const trs = $('tbody').find('tr').toArray()
    const statName = $('h1').text()

    const tdsArray = trs.map(row => $(row).find('td').toArray().map(td => $(td).text().trim())).splice(1)
    const option = $('option:selected').text().split('Tournament Only')
    return { stat: statName, players: tdsArray, tournament: option }
  })

  console.log(dataset)
  return {
    props: {
      data: dataset
    }
  }
}


export default function Home({ data }) {
  const d3Data = {}
  console.log(data)
  //THREE TIMES
  // data.forEach(statPage => {
  //   statPage.map(row => {
  //     d3Data[row[2]] = {
  //       stats: {
  //         statName: []
  //       }
  //     }
  //   })


  // })



  // props.data.map(body => {

  //   // WITH EACH BODY GRAB table rows
  //   const $ = cheerio.load(body)
  //   const trs = $('tbody').find('tr').toArray()


  //   //EACH ROW MAP IT TO LOOK LIKE AN ARRAY OF TD CELLS
  //   const tdsArray = trs.map(row => $(row).find('td').toArray().map(td => $(td).text().trim())).splice(1)


  //   console.log(tdsArray)

  //   //ADD PLAYER OBJECTS INTO DATASET VAR

  // })
  // console.log(trArray.filter(el => el[2] === "Kevin Na"))


  // data.forEach(tr => {


  //   let $ = cheerio.load(tr)
  //   let tdArray = $('td').toArray().map(el => $(el).text().trim())

  //   if (dataset[tdArray[2]]) {
  //     console.log(tdArray, dataset[tdArray[2]])
  //     if (tdArray[2] === "Matt Kuchar") {
  //       dataset[tdArray[2]].stats.concat(tdArray)
  //     }

  //   } else {
  //     tdArray[2] === "Matt Kuchar" ? dataset[tdArray[2]] = { stats: tdArray } :
  //       console.log("else")
  //   }



  // })


  // merged.map((body, index) => {
  //   const $ = cheerio.load(body)
  //   const statisticName = $('h1').text()
  //   const subCategories = $('#statsTable th').toArray().map(el => $(el).text().trim().replaceAll(' ', "_"))

  //   const tableRows = $('tbody tr').toArray()
  //   const tdArray = tableRows.map(tr => $(tr).find('td').toArray().map(td => $(td).text().trim()))

  //   tdArray.forEach(row => {
  //     // if (dataset["Phil Mickelson"]) { console.log(row) }
  //     if (!!dataset[row[2]]) {
  //       dataset[row[2]].push(row)
  //     } else {
  //       dataset[row[2]] = [row]
  //     }
  //   })

  console.log(d3Data)


  // })
  // const dataset = []


  // props.text.forEach((statPage, i) => {
  //   let $ = cheerio.load(statPage)



  //   const tableRows = $('tbody tr').toArray()
  //   const tdArray = tableRows.map(tr => $(tr).find('td').toArray().map(td => $(td).text().trim()))

  //   //FILL NAMES IN FIRST
  //   tdArray.forEach((playerInfo, index) => {

  //     const name = playerInfo[2]
  //     const matchedPlayer = dataset.find(pl => pl.playerName === name)
  //     console.log(!!matchedPlayer)
  //     !matchedPlayer
  //       ?
  //       dataset.push({ player: name, stats: [playerInfo] })
  //       :
  //       matchedPlayer.stats.push(playerInfo)
  //   })




  // })


  return (
    <div >
      <GolfDataFetch />

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
