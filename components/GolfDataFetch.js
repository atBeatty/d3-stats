


// import AnimeJS from "../components/AnimeJS";
import * as D3 from 'd3';
import * as cheerio from 'cheerio';

import Anime, { anime } from 'react-animejs-wrapper'
import { useEffect, useRef, useState } from 'react'




export default function GolfDataFetch({ data }) {
    const [year, setYear] = useState('')
    const [stat, setStat] = useState('')
    const [url, setUrl] = useState('')

    // console.log(playerData, "PLAYERDATA")

    // const fetchData = async () => {
    //     const req = await fetch('https://www.pgatour.com/content/pgatour/stats/stat.109.y2021.eon.t033.html');
    //     const newData = await req.text();
    //     console.log(newData)

    //     // return setData(newData.results);
    // };

    // const handleClick = (event) => {
    //     event.preventDefault();
    //     fetchData();
    // };
    // useEffect(() => {
    //     fetchData
    // }, [])



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

