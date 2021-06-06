
import * as cheerio from 'cheerio'


export async function getStaticProps() {
    let headers = new Headers()

    const res = await fetch(`https://www.golfstats.com/search/?player=Hideki+Matsuyama&yr=2013%20&tour=All&tournament=&box=2013&submit=go`, {
        headers: headers.set('Authorization', 'Basic ' + btoa(process.env.GOLFSTATS_USERNAME + ":" + process.env.GOLFSTATS_PASSWORD)),
    })


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

export default function PlayersIndex({ text }) {

    const $ = cheerio.load(text)
    // console.log(
    //     $('table tr').toArray().map(
    //         tr => $(tr).find('td').toArray().map(td => $(td).text().trim())
    //     )
    // )



    // console.log($('#performanceTournament').find('table').toArray())
    return (
        <div >
            playersindex
            {text}

            {/* <Cheerio text={text} /> */}
        </div >
    )
}