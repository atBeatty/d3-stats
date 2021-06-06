
import * as D3 from 'd3';
import Anime, { anime } from 'react-animejs-wrapper'
import { useEffect, useRef, useState } from 'react'

import FINISH from '../lib/data/FINISH.json'



const PreviousPerformance = ({ data }) => {
    // const cleanData = data.map(plObj => Object.entries(plObj)[0])
    // console.log(data)
    // cleanData.sort((a, b) => D3.descending(a[1].position.replaceAll("T", ""), b[1].position.replaceAll("T", "")))

    const hl = data.map(stat => {
        return stat.players.filter(p => p[2][0] === "Corey Conners")

    }).filter(stat => stat.length > 0).map(st => st[0]).map(stat => stat[4])

    console.log(hl)
    const d3Ref = useRef()
    const size = 600;
    const padding = 30;
    const marginT = 25;
    const marginB = 25;
    const marginL = 25;
    const marginR = 25;
    const width = size - marginR - marginL - padding
    const height = size - marginT - marginB - padding



    useEffect(() => {
        D3.selectAll('text').remove()
        const xScale = D3.scaleBand()
            .range([0, width])
            .domain(hl.map((d, i) => `${i}${d[1]}`))
            .padding(0.1)
        const yScale = D3.scaleLinear()
            .domain([0, 1])
            .range([height, 0]);



        D3.select('svg').selectAll('rect')
            .data(hl)
            .enter()
            .append('rect')
            .attr("x", (d, i) => i * width / hl.length + 40)
            .attr("width", 10)
            .attr("y", d => height)
            .attr("height", d => -yScale(d[0]))









        D3.select('g.x-axis').attr("transform", `translate(0, ${height - padding - marginB})`).call(D3.axisBottom(xScale)).selectAll('text').attr('transform', 'rotate(90)').style('text-anchor', 'start')
        D3.select('svg').append('text').attr("x", width / 2 - padding).attr("y", height).text('')

        D3.select('g.y-axis').attr("transform", `translate(35)`).call(D3.axisLeft(yScale))
        // D3.select('svg').append('text').attr("x", width / 2 - 2 * padding).attr("y", 0).style("transform", "rotate(-270deg)").text(`${cleanData[1][1].stats[5][0]} `)



    })



    return <div className="infographic-holder">
        <h1>Previous Performance</h1>
        <svg id="first" width={width} height={height} style={{ background: "" }} ref={d3Ref}>
            <g className="x-axis"></g>
            <g className="y-axis"></g>
        </svg>
        <style jsx>
            {`
            * {
                font-family: Arial;
            }
            h1 {
                width: auto;
                text-align:center;
            }
            .infographic-holder {
                display:flex;
                flex-direction:column;
                align-content:center;
                margin: auto;
                width: 33vw;
            }
            `}
        </style></div>
}


export default PreviousPerformance
