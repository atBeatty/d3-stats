


// import AnimeJS from "../components/AnimeJS";
import * as D3 from 'd3';
import * as cheerio from 'cheerio';
import FINISH from '../lib/data/FINISH.json'

import Anime, { anime } from 'react-animejs-wrapper'
import { useEffect, useRef, useState } from 'react'




export default function GolfDataFetch({ text }) {

    const [year, setYear] = useState('')
    const [stat, setStat] = useState('')
    const [url, setUrl] = useState('')





    return <div className='player-wrapper'>

        <ul>
            <li onClick={() => setStat('02564')}>02564</li>
            <li onClick={() => setStat(130)}>130</li>
            <li onClick={() => setStat(376)}>376</li>
            <li onClick={() => setStat('02568')}>02568</li>

        </ul>
        <ul>
            <li onClick={() => setYear(2021)}>2021</li>
            <li onClick={() => setYear(2020)}>2020</li>
            <li onClick={() => setYear(2019)}>2019</li>
            <li onClick={() => setYear(2018)}>2018</li>

        </ul>
        <h3>{url}</h3>

        <button />
    </div>


}

