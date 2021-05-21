

// import AnimeJS from "../components/AnimeJS";
import * as D3 from 'd3';
import Anime, { anime } from 'react-animejs-wrapper'
import { useEffect, useRef, useState } from 'react'
import M2015 from '../lib/data/M2015'
import { useRouter } from 'next/router'







export default function PlayerBreakdown({ playerStats }) {





    const router = useRouter()

    const playerName = router.asPath.split("%20").join(" ").split("/")[1]
    const playerObj = playerStats.find(pl => pl.player === playerName)
    console.log(playerObj)




    const d3Ref = useRef()

    const svgStyle = {
        width: 500,
        height: 500,
        margin: 50,
    }


    useEffect(() => {
        D3.selectAll('svg').remove()
        D3.selectAll('g').remove()
        const svg = D3.select(d3Ref.current).append('svg').attr("height", svgStyle.height)




        // SCALES

        const xScale = D3.scaleLinear().domain([0, 200]).range([0, 400])
        const yScale = D3.scaleLinear().domain([200, 0]).range([50, 445])
        // const yScale = D3.scaleLinear().domain([200, 0]).range([svgStyle.margin, svgStyle.height - svgStyle.margin])


        // const yScale = D3.scaleLinear()

        svg.append('g')
            .attr('class', 'axis x')
            .attr('transform', `translate(${svgStyle.margin}, ${svgStyle.height - svgStyle.margin})`)
            .style("stroke", "red")
            .call(D3.axisBottom(xScale))
        svg.append('g')
            .attr('class', 'axis y')
            .attr('transform', `translate(50)`)
            .style("stroke", "red")
            .call(D3.axisLeft(yScale))

        svg.append('g')
            .attr('class', 'bar-chart')
            .selectAll('rect')
            .data(Object.entries(playerObj.stats))
            .enter()
            .append('rect')
            .attr("x", (d, i) => svgStyle.margin + (i * 10))
            .attr("y", (d, i) => 50)
            .attr("height", (d) => d[1])
            .attr("width", 5)
            .style("fill", "blue")












    })






    return <div className="player-breakdown-container">
        <h2>{playerObj && playerObj.player}</h2>

        <div style={svgStyle} ref={d3Ref}></div>

    </div>
}