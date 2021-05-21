
import M2015 from '../lib/data/M2015'
import results2015 from '../lib/data/results2015.json'
import PlayerBreakdown from '../components/PlayerBreakdown'
import { useRouter } from 'next/router';


export default function PlayerPage() {

    const data = M2015()
    // const router = useRouter()
    // const playerName = router.asPath.split("%20").join(" ").split("/")[1]
    // const playerObj = data.find(pl => pl.player === playerName)

    // console.log(data.find(pl => pl.player === playerName))


    return < div >




        <PlayerBreakdown playerStats={data} />
        {/* <PlayerBreakdown playerStats={playerObj} /> */}
    </div>

}