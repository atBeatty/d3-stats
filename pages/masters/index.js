import { useState } from 'react'
import M2015_fourWeek from '../../lib/data/M2015_fourWeek.json'
import M2015_tenWeek from '../../lib/data/M2015_tenWeek.json'
import M2015_twentyFourWeek from '../../lib/data/M2015_twentyFourWeek.json'
import PlayerBreakdown from '../../components/PlayerBreakdown'
import D3Infographic from '../../components/D3Infographic'
export async function getStaticProps() {

    const data = {
        four: M2015_fourWeek,
        ten: M2015_tenWeek,
        twentyFour: M2015_twentyFourWeek
    }
    return {
        props: { data }, // will be passed to the page component as props
    }
}

export default function MastersIndex({ data }) {
    const [selectedPlayer, setSelectedPlayer] = useState('')
    const playerNames = data.four.map(player => <h3 onClick={() => setSelectedPlayer(collectPlayer(player.Player))}>{player.Player}</h3>)




    function collectPlayer(player) {
        // console.log(player, "PLAYER")
        const playerStats = {}
        playerStats.four = data.four.find(pl => pl.Player === player)
        playerStats.ten = data.ten.find(pl => pl.Player === player)
        playerStats.twentyFour = data.twentyFour.find(pl => pl.Player === player)

        return playerStats


    }


    return <div className="masters-index">

        <div className="player-names">

            {playerNames}
        </div>
        <div className="player-breakdown">
            {
                selectedPlayer &&
                <PlayerBreakdown playerStats={selectedPlayer} />
            }
        </div>

        <style jsx>

            {`
                .masters-index {
                    display: flex;
                }
                .player-names {
                    width: 40vw;
                }
            `}
        </style>
    </div >
}

