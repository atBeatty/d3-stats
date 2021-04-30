import Link from 'next/link'
import { useRouter } from 'next/router'
import M2015 from '../../lib/data/m2015'
import { useEffect } from 'react'
import D3SeasonStats from '../../components/D3SeasonStats'

export default function Season(props) {



    const data = M2015()
    const arrayOfPlayerNames = data.map((bio, index) => <Link href={`/${bio.player}`}>{bio.player}</Link>)




    return <div className="season-wrapper">
        {/* {arrayOfPlayerNames} */}

        <D3SeasonStats dataset={data} />
    </div>
}