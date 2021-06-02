


// import AnimeJS from "../components/AnimeJS";
import * as D3 from 'd3';
import * as cheerio from 'cheerio';
import FINISH from '../lib/data/FINISH.json'
import SCRAMBLING from '../lib/data/SCRAMBLING.json'

import Anime, { anime } from 'react-animejs-wrapper'
import { useEffect, useRef, useState } from 'react'
import D3Infographic from './D3Infographic';




export default function Cheerio({ text }) {


    const dataset = []
    if (!!text) {
        const $ = cheerio.load(text)

        const season = $('select option:selected').first().text()
        const statisticName = $('h1').text()
        const subCategories = $('#statsTable th').toArray().map(el => $(el).text().trim().replaceAll(' ', "_"))

        $('#statsTable tr').toArray().splice(1).forEach((tableRow, j) => {
            const name = $($(tableRow).find('td').toArray()[2]).text().trim()
            const statRow = $(tableRow).find('td').toArray().map((td, index) =>

                [subCategories[index], $(td).text().trim()]

            )
            const finish = FINISH[0].players.find(pl => pl[2] === name)
            const scrambling = SCRAMBLING[0].players.find(pl => pl[2] === name)
            !!finish
                ?
                dataset.push({
                    [name]: {
                        scrambling: scrambling,
                        statisticName: statisticName,
                        position: Object.entries(finish)[0][1],
                        stats: statRow
                    }
                })

                :
                dataset.push({
                    [name]: {
                        statisticName: statisticName,
                        scrambling: scrambling,

                        position: "100",
                        stats: statRow
                    }
                })



        })



        return <div className='player-wrapper'>
            <D3Infographic data={dataset} />
            <button />
        </div>
    } else {
        return <></>

    }


}

