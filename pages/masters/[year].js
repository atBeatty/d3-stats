import Link from 'next/link'
import { useRouter } from 'next/router'
import M2015 from '../../lib/data/M2015'
import results2015 from '../../lib/data/results2015.json'
import { useEffect } from 'react'
import D3SeasonStats from '../../components/D3SeasonStats'

export default function Season(props) {



    const data = M2015()
    const arrayOfPlayerNames = data.map((bio, index) => {

        results2015.map(player => {
            bio.player.includes(player.Player.split(". ")[1]) ? bio.stats.finish = player.Pos : null
        })
        bio.player === "Jordan Spieth" ? console.log(bio) : console.log("not working")
        // return < Link href={`/${bio.player}`
        // }> {bio.player}</Link >
    })


    return <div className="season-wrapper">

        {arrayOfPlayerNames}



        {/* <D3SeasonStats dataset={data} /> */}
    </div>
}