import * as cheerio from 'cheerio';
import { useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import GolfDataFetch from '../components/GolfDataFetch'





// This function gets called at build time
export async function getStaticPaths() {
    return {
        paths: [
            { params: { stat: '' } } // See the "paths" section below
        ],
        fallback: true // See the "fallback" section below
    };
}

// This also gets called at build time

export async function getStaticProps({ params }) {
    console.log(params)
    const res = await fetch(`https://www.pgatour.com/content/pgatour/stats/${params.stat}`)
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
    // console.log(text)

    const $ = cheerio.load(text)
    const season = $('select option:selected').first().text()
    const statisticName = $('h1').text()
    const subCategories = $('#statsTable th').toArray().map(el => $(el).text().trim().replaceAll(' ', "_"))
    console.log(season)


    const playerRows = []
    $('#statsTable tr').toArray().splice(1).map((tableRow, j) => {
        const statRow = $(tableRow).find('td').toArray().map((td, index) =>

            [subCategories[index], $(td).text().trim()]

        )
        const name = $($(tableRow).find('td').toArray()[2]).text().trim()
        playerRows.push(statRow)

        // const matchedPlayer = statObject.find(el => el.player === name)
        // // stats: {
        // // sgputt: []
        // // }
        // if (matchedPlayer) {

        //     matchedPlayer.stats[statisticName] = statRow
        // } else {
        //     let newPlayerAdd = { player: name, stats: { [statisticName]: statRow } }
        //     // newPlayerAdd.stats.push(statRow)
        //     statObject.push(newPlayerAdd)
        // }

    })

    // console.log(playerRows)

    $('#statsTable tr').toArray().forEach((tableRow, j) => {


    })

    return (
        <div >
            <h2>{season}</h2>
            <h2>{statisticName}</h2>
            {playerRows.map((row, i) => <p key={i}>{row[0][1]}</p>)}

        </div >
    )
}
