import { Masters2015 } from '../../../lib/data/Masters2015'
import { useState } from 'react'
import PlayerCard from '../../../components/PlayerCard'



export default function SeasonStats() {
    const playerData = Masters2015()


    const [selectedPlayer, setSelectedPlayer] = useState('')


    const handleOnClick = (player) => setSelectedPlayer(player)
    const playerCardArray = playerData.fourWeek.map((el, i) => <PlayerCard handleOnClick={handleOnClick} key={i} player={el} />)

    console.log(selectedPlayer)

    return <div className="stats-main">

        <div className="player-card-wrapper">

            {playerCardArray}
        </div>
        <div className="selected-player-wrapper">
            {selectedPlayer.player}
        </div>
        <style jsx>
            {`
            .stats-main {
                display:flex;
                height:100vh;
            }
            .player-card-wrapper {
                overflow:scroll;
                display:flex;
                flex-direction: column;
            }
            `}
        </style>
    </div >
}