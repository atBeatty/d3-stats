import * as cheerio from 'cheerio';




export async function getStaticProps() {
  const seasons = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]





  const response = await fetch(`https://www.pgatour.com/stats/stat.119.html`);

  const body = await response.text();
  const $ = cheerio.load(body);

  const rank = $('tr td:nth-child(1)')
  const priorRank = $('tr td:nth-child(2)')
  const playerName = $('tr td:nth-child(3)')
  const rounds = $('tr td:nth-child(4)')
  const avg = $('tr td:nth-child(5)')
  const totalPutts = $('tr td:nth-child(6)')


  const statData = []
  for (let index = 0; index < 200; index++) {

    statData[index] = {
      rank: $(rank[index]).text().trim(),
      priorRank: $(priorRank[index]).text().trim(),
      playerName: $(playerName[index]).text().trim(),
      rounds: $(rounds[index]).text().trim(),
      avg: $(avg[index]).text().trim(),
      totalPutts: $(totalPutts[index]).text().trim(),

    }
  }


  return {
    props: {
      statData
    }
  }
}

export default function Home(props) {

  console.log(props)



  return (
    <div >
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
