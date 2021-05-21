import Link from 'next/link'
import M2015 from '../../lib/data/M2015'

export async function getStaticProps() {
    const res = await fetch('https://www.golfstats.com/search/?player=Jordan+Spieth&career=&chart=&box=&tour=&tournament=&yr=2020&submitted=go')
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data }, // will be passed to the page component as props
    }
}

export default function MastersIndex({ data }) {


    console.log(data)
    return <div>Masters Index



        <Link href='/masters/2015'>2015</Link>
    </div>
}