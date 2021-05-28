
import * as D3 from 'd3';
import Anime, { anime } from 'react-animejs-wrapper'
import { useEffect, useRef, useState } from 'react'




const D3Infographic = ({ x, y }) => {
    // console.log(Object.entries(dataset))
    // const data = Object.entries(dataset)
    const d3Ref = useRef()
    // console.log(x, y)

    const size = 600;
    const marginT = 25;
    const marginB = 25;
    const marginL = 25;
    const marginR = 25;
    const width = size - marginR - marginL
    const height = size - marginT - marginB
    const xScale = D3.scaleLinear().domain([0, 61]).range([marginL, width - marginL])
    const yScale = D3.scaleLinear().domain([25, 35]).range([height - marginT, marginT]);


    useEffect(() => {
        // D3.select('g.x-axis').call(D3.axisBottom())
        D3.select('svg').selectAll('circle')
            // .data(dataset.sort(D3.ascending)) // the .filter part is just to keep a few dots on the chart, not all of them
            .data(x) // the .filter part is just to keep a few dots on the chart, not all of them
            .enter()
            .append("circle")
            .attr("cx", d => d[5] ? xScale(d[5]) : 0)
            .attr("cy", d => height - yScale(d[5]))
            // .attr("cy", d => height - y(d[1]['puttingAvg']))
            // .attr("cy", d => y(d[1]['puttingAvg']))
            .attr("r", 5)
        // .style("opacity", d => d[1].fairwaysHitPercent / 100)



        D3.select('svg').append('text').text("Greens From 200").attr('transform', `translate(${width / 2},${height})`).style("color", "red").style("font-size", "1rem").style("text-anchor", "middle")

        D3.select('g.x-axis').attr("transform", `translate(0, ${height - marginB - marginB})`).call(D3.axisBottom(xScale))
        D3.select('g.y-axis').attr("transform", `translate(${marginL + marginL})`).call(D3.axisLeft(yScale))


    })



    return <div className="infographic-holder">
        <h1>D3 Infographic</h1>

        <svg width={width} height={height} style={{ background: "" }} ref={d3Ref}>
            <g className="x-axis"></g>
            <g className="y-axis"></g>
        </svg>
    </div>
}


export default D3Infographic
