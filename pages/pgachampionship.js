import * as cheerio from 'cheerio';
import D3Infographic from '../components/D3Infographic';
import createPlayerProfiles from '../lib/helpers/createPlayerProfiles'



export async function getStaticProps() {



    [
        [
            "https://www.pgatour.com/stats/stat.103.html",
            "Greens in Regulation Percentage"
        ],
        [
            "https://www.pgatour.com/stats/stat.02437.html",
            "Greens or Fringe in Regulation"
        ],
        [
            "https://www.pgatour.com/stats/stat.326.html",
            "GIR Percentage - 200+ yards"
        ],
        [
            "https://www.pgatour.com/stats/stat.327.html",
            "GIR Percentage - 175-200 yards"
        ],
        [
            "https://www.pgatour.com/stats/stat.328.html",
            "GIR Percentage - 150-175 yards"
        ],
        [
            "https://www.pgatour.com/stats/stat.329.html",
            "GIR Percentage - 125-150 yards"
        ],
        [
            "https://www.pgatour.com/stats/stat.330.html",
            "GIR Percentage - < 125 yards"
        ],
        [
            "https://www.pgatour.com/stats/stat.077.html",
            "GIR Percentage - 100-125 yards"
        ],
        [
            "https://www.pgatour.com/stats/stat.02332.html",
            "GIR Percentage - 100+ yards"
        ],
        [
            "https://www.pgatour.com/stats/stat.02330.html",
            "GIR Percentage - < 100 yards"
        ],
        [
            "https://www.pgatour.com/stats/stat.078.html",
            "GIR Percentage - 75-100 yards"
        ],
        [
            "https://www.pgatour.com/stats/stat.079.html",
            "GIR Percentage - < 75 yards"
        ],
        [
            "https://www.pgatour.com/stats/stat.190.html",
            "GIR Percentage from Fairway"
        ],
        [
            "https://www.pgatour.com/stats/stat.02434.html",
            "GIR Pct. - Fairway Bunker"
        ],
        [
            "https://www.pgatour.com/stats/stat.199.html",
            "GIR Percentage from Other than Fairway"
        ]
    ]
    async function fetchURLs() {
        try {
            // Promise.all() lets us coalesce multiple promises into a single super-promise
            var data = await Promise.all([
                /* Alternatively store each in an array */
                // var [x, y, z] = await Promise.all([
                // parse results as json; fetch data response has several reader methods available:
                //.arrayBuffer()
                //.blob()
                //.formData()
                //.json()
                //.text()
                fetch('https://www.pgatour.com/stats/stat.199.html').then((response) => response.text()),// parse each response as json
                fetch('https://www.pgatour.com/stats/stat.079.html').then((response) => response.text()),
                fetch('https://www.pgatour.com/stats/stat.078.html').then((response) => response.text())
            ]);

            for (var i of data) {
                console.log(`RESPONSE ITEM \n`);
                for (var obj of i) {
                    console.log(obj);
                    //logger utility method, logs output to screen
                    console.log(obj);
                }
            }

        } catch (error) {
            console.log(error);
        }
    }


    const response = await fetch('https://www.pgatour.com/stats/stat.199.html');

    const body = await response.text();
    const $ = cheerio.load(body);



    const rank = $('tr td:nth-child(1)').toArray().splice(1)
    const playerName = $('tr td:nth-child(3)').toArray().splice(1)
    const rounds = $('tr td:nth-child(4)').toArray()
    const percent = $('tr td:nth-child(5)').toArray()
    const successes = $('tr td:nth-child(6)').toArray()
    const attempts = $('tr td:nth-child(7)').toArray()

    const statData = []
    for (let index = 0; index < rank.length; index++) {

        statData[index] = {
            rank: $(rank[index]).text().trim(),
            playerName: $(playerName[index]).text().trim(),
            rounds: $(rounds[index]).text().trim(),
            percent: $(percent[index]).text().trim(),
            successes: $(successes[index]).text().trim(),
            attempts: $(attempts[index]).text().trim(),

        }
    }
    const dataset = createPlayerProfiles()


    return {
        props: {
            dataset, statData
        }
    }
}

export default function PGAChampionship({ dataset, statData }) {
    // console.log(statData)

    return (
        <div >
            <D3Infographic dataset={dataset} />
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
