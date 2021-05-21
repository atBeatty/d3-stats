// import AnimeJS from "../components/AnimeJS";
import * as D3 from 'd3';
import Anime, { anime } from 'react-animejs-wrapper'
import { useEffect, useRef, useState } from 'react'
import M2015 from '../lib/data/M2015'
import D3StatBox from '../components/D3StatBox'

export default function PlayerCard({ playerData }) {
    const [typeOfState, setTypeOfStat] = useState('')
    console.log(playerData, "PLAYERDATA")



    return <div className='player-wrapper'>

        {playerData &&
            <>
                <h1>{playerData.player}</h1>
                <div className="stat-box">

                    {/* {Object.entries(playerData.stats).filter(stat => stat[0].includes(typeOfState)).map(stat => <D3StatBox statName={stat[0]} statValue={stat[1]} />)} */}
                    <D3StatBox playerStats={playerData} />
                </div>

            </>
        }




        <style jsx>
            {`
                .stat-box {
                    display:flex;
                    flex-wrap:wrap;
                    gap:1rem;
                }
        `}
        </style>
    </div>
}
