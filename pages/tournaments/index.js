

import * as cheerio from 'cheerio'
export async function getStaticProps({ params }) {
    console.log(params)
    const res = await fetch(`https://www.pgatour.com/tournaments/schedule.html`)
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

export default function Tournaments(props) {
    const $ = cheerio.load(props.text)

    const tableRows = $('tr').toArray().filter(tournament => $(tournament).find('td.tournament-name .tournament-links a').first().attr('data-tournament'))
    const tournamentArray = tableRows.map((tableRow, index) => {
        const name = $(tableRow).find('td.tournament-name .tournament-text a').text().trim()
        const tId = $(tableRow).find('td.tournament-name .tournament-links a').first().attr('data-tournament')
        const order = index + 1
        return {id: tId, name: name, order: order}

    })
     console.log(tournamentArray)
    return <div className="tournaments-wrapper">
        Tournaments
        
    </div>
}
//