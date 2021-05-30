import * as cheerio from 'cheerio';
import { useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import GolfDataFetch from '../components/GolfDataFetch'





// This function gets called at build time


// This also gets called at build time

export async function getStaticProps(context) {
    const res = await fetch(`https://www.pgatour.com/content/pgatour/stats/stat.109.y2021.eon.t033.html`)
    const data = await res.text()
    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            text: data
        } // will be passed to the page component as props
    }
}

export default function StatPage({ text }) {
    console.log(text)

    const $ = cheerio.load(text)
    const season = $('select option:selected').first().text()
    const statisticName = $('h1').text()
    const subCategories = $('#statsTable th').toArray().map(el => $(el).text().trim().replaceAll(' ', "_"))
    console.log(season)
    return (
        <div >
            <h2>{season}</h2>
            <h2>{statisticName}</h2>
        </div >
    )
}
