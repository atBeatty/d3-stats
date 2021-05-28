import * as cheerio from 'cheerio';
import D3Infographic from '../components/D3Infographic';
import GIR_PERCENTAGE from '../lib/data/GIR_PERCENTAGE'
import SCRAMBLING from '../lib/data/SCRAMBLING'
import SG_PUTTING from '../lib/data/SG_PUTTING'

export async function getStaticProps() {

    const statObject = {}


    try {
        var data = await Promise.all([
            fetch('https://www.pgatour.com/content/pgatour/stats/stat.02674.y2021.eon.t033.html').then((response) => response.text()),
            fetch('https://www.pgatour.com/content/pgatour/stats/stat.02674.y2020.eon.t033.html').then((response) => response.text()),
            fetch('https://www.pgatour.com/content/pgatour/stats/stat.02674.y2019.eon.t033.html').then((response) => response.text()),
            fetch('https://www.pgatour.com/content/pgatour/stats/stat.02674.y2018.eon.t033.html').then((response) => response.text()),
            fetch('https://www.pgatour.com/content/pgatour/stats/stat.02674.y2017.eon.t033.html').then((response) => response.text()),
            fetch('https://www.pgatour.com/content/pgatour/stats/stat.02674.y2016.eon.t033.html').then((response) => response.text()),
            fetch('https://www.pgatour.com/content/pgatour/stats/stat.02674.y2015.eon.t033.html').then((response) => response.text()),
        ]);
        // var data = await Promise.all([
        //     fetch('https://www.pgatour.com/content/pgatour/stats/stat.02564.y2021.eon.t033.html').then((response) => response.text()),
        //     fetch('https://www.pgatour.com/content/pgatour/stats/stat.02564.y2020.eon.t033.html').then((response) => response.text()),
        //     fetch('https://www.pgatour.com/content/pgatour/stats/stat.02564.y2019.eon.t033.html').then((response) => response.text()),
        //     fetch('https://www.pgatour.com/content/pgatour/stats/stat.02564.y2018.eon.t033.html').then((response) => response.text()),
        //     fetch('https://www.pgatour.com/content/pgatour/stats/stat.02564.y2017.eon.t033.html').then((response) => response.text()),
        //     fetch('https://www.pgatour.com/content/pgatour/stats/stat.02564.y2016.eon.t033.html').then((response) => response.text()),
        //     fetch('https://www.pgatour.com/content/pgatour/stats/stat.02564.y2015.eon.t033.html').then((response) => response.text()),
        // ]);


    } catch (error) {
        console.log(error);
    }

    for (const i in data) {
        const $ = cheerio.load(data[i])


        const season = $('select option:selected').first().text()
        const statisticName = $('h1').text()
        const tableStats = $('#statsTable th').toArray().map(el => $(el).text().trim().replaceAll(' ', "_"))


        // EACH FETCH GETS AN i IN STATOBJECT
        statObject[i] = {
            headers: tableStats,
            season: season,
            statisticName: statisticName,
            players: []
        }

        $('#statsTable tr').toArray().forEach((tableRow, j) => {
            statObject[i].players.push($(tableRow).find('td').toArray().map(td => $(td).text().trim()))
        })



    }

    return {
        props: {
            dataset: statObject
        }
    }




}

export default function PGAChampionship({ dataset }) {
    console.log(dataset)
    return (
        <div >
            <D3Infographic x={GIR_PERCENTAGE} y={SCRAMBLING} />
            {/* <D3Infographic dataset={dataset} /> */}

        </div >
    )
}

// Date
// tournamentResult_Tournament
// tournamentResult_Place
// tournamentResult_r1
// tournamentResult_r2
// tournamentResult_r3
// tournamentResult_r4
// tournamentResult_Tot
// tournamentResult_TP
// tournamentResult_Money
// placeAfter_1
// placeAfter_2
// placeAfter_3
// placeAfter_4
// fairways_Hit
// fairways_Rank
// drDistance_Yards
// drDistance_Rank
// greens_Hit
// greens_Rank
// putts_Avg
// putts_Tot
// putts_Rank
// p3s
// p4s
// p5s
// Egls
// Brds
// Pars
// Bgys
// Otrs
