
import * as D3 from 'd3';
import Anime, { anime } from 'react-animejs-wrapper'
import { useEffect, useRef, useState } from 'react'




const D3Infographic = ({ data }) => {
    console.log()
    const dataset = Object.entries(data)[0][1]
    const d3Ref = useRef()
    const size = 600;
    const marginT = 25;
    const marginB = 25;
    const marginL = 25;
    const marginR = 25;
    const width = size - marginR - marginL
    const height = size - marginT - marginB
    const xScale = D3.scaleLinear().domain([-4, 4]).range([marginL, width - marginL])
    const yScale = D3.scaleLinear().domain([0, 100]).range([height - marginT, marginT]);


    useEffect(() => {
        D3.select('svg').selectAll('circle')
            .data(dataset)
            .enter()
            .append("circle")
            // .attr("cx", d => console.log(d.stats[1][4][1]))
            .attr("cx", d => xScale(d.stats[1][4][1]))
            // .attr("cx", d => console.log(xScale(d[4])))
            .attr("cy", 50)
            .attr("cy", d => height - yScale(d.stats[3][4][1]))
            .attr("fill", d => d.stats[0][0][1].replace("T", "") < 16 && "red")

            .attr("r", 5)
        // .attr("r", d => 1 / d.stats[0][0][1].replace("T", "") * 50)
        // .style("opacity", d => d[1].fairwaysHitPercent / 100)



        D3.select('svg').append('text').text("").attr('transform', `translate(${width / 2},${height})`).style("color", "red").style("font-size", "1rem").style("text-anchor", "middle")

        D3.select('g.x-axis').attr("transform", `translate(0, ${height - marginB - marginB})`).call(D3.axisBottom(xScale))
        D3.select('g.y-axis').attr("transform", `translate(${marginL + marginL})`).call(D3.axisLeft(yScale))


    })



    return <div className="infographic-holder">
        <h1>D3 Infographic</h1>

        <svg id="first" width={width} height={height} style={{ background: "" }} ref={d3Ref}>
            <g className="x-axis"></g>
            <g className="y-axis"></g>
        </svg>
    </div>
}


export default D3Infographic
