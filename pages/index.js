import * as cheerio from 'cheerio';
import { useState } from 'react';
import Link from 'next/link'
import GolfDataFetch from '../components/GolfDataFetch'






export async function getServerSideProps(context) {
  const res = await fetch(`https://www.pgatour.com/content/pgatour/stats/stat.109.y2021.eon.t033.html`)
  const data = await res.text()
  console.log(data)

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data: data }, // will be passed to the page component as props
  }
}

export default function Home(props) {

  const [url, setState] = useState()
  const data = props.data
  const $ = cheerio.load(props.data)

  // console.log(data)

  const season = $('select option:selected').first().text()
  // const statisticName = $('h1').text()
  // const subCategories = $('#statsTable th').toArray().map(el => $(el).text().trim().replaceAll(' ', "_"))
  console.log(season)


  return (
    <div >
      <GolfDataFetch />
      <Link href='/stat.109.y2021.eon.t033.html' >
        <a>Stat 109</a>
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
