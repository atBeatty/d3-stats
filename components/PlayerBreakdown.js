

// import AnimeJS from "../components/AnimeJS";
import * as D3 from 'd3';
import Anime, { anime } from 'react-animejs-wrapper'
import { useEffect, useRef, useState } from 'react'
import M2015 from '../lib/data/M2015'
import { useRouter } from 'next/router'







export default function PlayerBreakdown({ playerStats }) {
    console.log(playerStats)

    const playerName = playerStats.four["Player"]

    const playerFourWeek = Object.entries(playerStats.four)
    const playerTenWeek = Object.entries(playerStats.ten)
    const playerTwentyFourWeek = Object.entries(playerStats.twentyFour)





    const d3Ref = useRef()
    const size = 800;
    const padding = 60;
    const marginT = 100;
    const marginB = 100;
    const marginL = 100;
    const marginR = 100;
    const width = size - marginR - marginL
    const height = size - marginT - marginB


    useEffect(() => {
        const xScale = D3.scaleBand().domain(playerFourWeek).range([padding, width - padding])
        // const yScale = D3.scaleLinear().domain([0, 500]).range([height - padding, padding])

        D3.select('g.x-axis').attr(`transform`, `translate(0, ${height - padding})`).call(D3.axisBottom(xScale))
        D3.select('g.y-axis').attr(`transform`, `translate(${padding})`).call(D3.axisLeft(yScale))





    }, [])



    return <div style={{ border: "1px solid yellow" }} className="player-breakdown">

        <div className="player-breakdown-container">
            <h1>{playerName}</h1>
        </div>
        <div className="infographic-holder">
            <svg width={width} height={height} style={{ background: "red" }} ref={d3Ref}>
                <g className="x-axis"></g>
                <g className="y-axis"></g>
            </svg>
        </div>


        <style jsx>
            {`
                

        `}
        </style>
    </div>







}