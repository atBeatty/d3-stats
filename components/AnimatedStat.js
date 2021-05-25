

import { useEffect } from 'react'
import Anime, { anime } from 'react-animejs-wrapper'



const AnimatedStat = ({ playerStats }) => {
    const { playerName, fourWeek, tenWeek, twentyFourWeek } = playerStats
    // console.log(playerName, fourWeek, tenWeek, twentyFourWeek, playerStats, "PlayerStats")


    useEffect(() => {


    })


    return <div>


        <Anime
            style={{
                display: 'flex',
                flexDirection: 'column',
                // backgroundColor: 'lightgrey',
                alignItems: 'left',
                width: '80px',
            }}
            config={{
                translateX: [-35, 0],
                scale: [0, 1],
                loop: true,
                easing: 'easeInOutQuad',
                delay: anime.stagger(100, { start: 200 }),
            }}

        >
            <div>Hi</div>
        </Anime>
    </div>
}


export default AnimatedStat