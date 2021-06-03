
import * as D3 from 'd3';
import Anime, { anime } from 'react-animejs-wrapper'
import { useEffect, useRef, useState } from 'react'

import FINISH from '../lib/data/FINISH.json'



const D3Infographic = ({ data }) => {
    const cleanData = data.map(plObj => Object.entries(plObj)[0])

    cleanData.sort((a, b) => D3.descending(a[1].position.replaceAll("T", ""), b[1].position.replaceAll("T", "")))




    const d3Ref = useRef()
    const size = 600;
    const padding = 30;
    const marginT = 25;
    const marginB = 25;
    const marginL = 25;
    const marginR = 25;
    const width = size - marginR - marginL - padding
    const height = size - marginT - marginB - padding


    const winnerScale = D3.scaleLinear()
        .domain([0, 72])
        .range([8, 1])

    const xScale = D3.scaleLinear()
        .domain([0, 80])
        .range([marginL + padding, width - marginR])

    const yScale = D3.scaleLinear()
        .domain([-10, 10])
        .range([height - marginT - padding, marginT]);


    useEffect(() => {
        D3.selectAll('text').remove()
        D3.select('svg').selectAll('circle')
            .data(cleanData)
            .enter()
            .append("circle")
            // .attr("cy", d => yScale(d[1].scrambling[4]))
            // .attr("cy", d => yScale(d[1].position.replace("T", "")))

            // .attr("cy", d => d[1].stats[7][1] === "E" ? (yScale(0)) : (yScale(d[1].stats[7][1])))
            .attr('cy', d => yScale(d[1].stats[5][1]))
            .attr("cx", d => xScale(d[1].position.replace("T", "")))
            // .attr("cx", d => xScale(d[1].stats[5][1] / d[1].stats[6][1]))
            // .attr("cx", d => xScale(d[1].stats[5][1] / d[1].stats[6][1]))

            .attr("r", 5)
            // .attr("r", d => d[1].position.replace("T", "") === '1' ? 14 : winnerScale(d[1].position.replace("T", "")))

            .attr('stroke', d => d[1].position.replaceAll("T", "") < 2 ? "coral" : "")
            .attr('stroke-width', d => d[1].position.replaceAll("T", "") < 2 ? "5" : "")
            .style("fill", d => d[1].position.replace("T", "") === '1' ? "chartreuse" : d[1].position.replaceAll("T", "") > 10 ? "green" : "lightgreen")





        D3.select('g.x-axis').attr("transform", `translate(0, ${height - padding - marginB})`).call(D3.axisBottom(xScale))
        D3.select('svg').append('text').attr("x", width / 2 - padding).attr("y", height).text('FINISH POSITION')

        D3.select('g.y-axis').attr("transform", `translate(${marginL + padding})`).call(D3.axisLeft(yScale))
        D3.select('svg').append('text').attr("x", width / 2 - 2 * padding).attr("y", 0).style("transform", "rotate(-270deg)").text(`${cleanData[1][1].stats[5][0]} `)



    })



    return <div className="infographic-holder">
        <h1>{cleanData[0][1].statisticName}</h1>
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


export default D3Infographic
