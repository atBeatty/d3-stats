import Cheerio from '../components/Cheerio'
import * as cheerio from 'cheerio'


// 413
// 414
// 415
// 416
// 417
// 418
// 420
// 421
// 422
// 423
// 424
// 425
// 398
// 498


// This function gets called at build time
export async function getStaticPaths() {
    return {
        paths: [
            { params: { stat: '' } }
        ],
        fallback: true
    };
}


export async function getStaticProps({ params }) {
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
        }
    }
}

export default function StatPage({ text }) {


    // console.log(text)

    return (
        <div >
            <Cheerio text={text} />
        </div >
    )
}
