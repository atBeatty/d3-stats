
import * as D3 from 'd3';
import Anime, { anime } from 'react-animejs-wrapper'
import { useEffect, useRef, useState } from 'react'

import FINISH from '../lib/data/FINISH.json'


const D3Infographic = ({ data }) => {
    const cleanData = data.map(plObj => Object.entries(plObj)[0])

    console.log(cleanData[0])





    const d3Ref = useRef()
    const size = 600;
    const padding = 10;
    const marginT = 25;
    const marginB = 25;
    const marginL = 25;
    const marginR = 25;
    const width = size - marginR - marginL - padding
    console.log(size, width)
    const height = size - marginT - marginB - padding
    const xScale = D3.scaleLinear().domain([0, 70]).range([marginL, width - marginR])
    const yScale = D3.scaleLinear().domain([0, 100]).range([height - marginT, marginT]);


    useEffect(() => {
        D3.select('svg').selectAll('circle')
            .data(cleanData)
            .enter()
            .append("circle")
            .attr("cy", d => (yScale(d[1].stats[4][1])))
            // .attr("cx", d => console.log(xScale(d[4])))
            .attr("cx", d => xScale(d[1].position.replaceAll("T", "")))
            // .attr("fill", d => d.stats[0][0][1].replace("T", "") < 16 && "red")

            .attr("r", 2)
        // .attr("r", d => 1 / d.stats[0][0][1].replace("T", "") * 50)
        // .style("opacity", d => d[1].fairwaysHitPercent / 100)



        D3.select('svg').append('text').text("").attr('transform', `translate(${width / 2},${height})`).style("color", "red").style("font-size", "1rem").style("text-anchor", "middle")

        D3.select('g.x-axis').attr("transform", `translate(0, ${height - marginB})`).call(D3.axisBottom(xScale))
        D3.select('g.y-axis').attr("transform", `translate(${marginL})`).call(D3.axisLeft(yScale))


    })



    return <div className="infographic-holder">
        <h1>{cleanData[0][1].statisticName}</h1>
        <svg id="first" width={width} height={height} style={{ background: "" }} ref={d3Ref}>
            <g className="x-axis"></g>
            <g className="y-axis"></g>
        </svg>
    </div>
}


export default D3Infographic
