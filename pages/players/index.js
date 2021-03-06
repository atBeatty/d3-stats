
import * as cheerio from 'cheerio'


export async function getStaticProps() {
    const res = await fetch(`https://www.pgatour.com/players/player.34046.jordan-spieth.html`)
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
    const tables = $('a.tab-nav-link').toArray().map(a => $(a).text().trim())
    const tr = $('tr').toArray()
    const th = $('th').text()
    const tdArray = $(tr).find('td').toArray().map(td => $(td).text().trim())
    // console.log($('#performanceTournament').find('table').toArray())
    return (
        <div >
            playersindex
            {/* <Cheerio text={text} /> */}
        </div >
    )
}
