
import * as D3 from 'd3';
import Anime, { anime } from 'react-animejs-wrapper'
import { useEffect, useRef, useState } from 'react'




const D3Infographic = ({ dataset }) => {
    // console.log(Object.entries(dataset))
    const data = Object.entries(dataset)
    const d3Ref = useRef()

    // console.log(dataset)
    const size = 800;
    const marginT = 25;
    const marginB = 25;
    const marginL = 25;
    const marginR = 25;
    const width = size - marginR - marginL
    const height = size - marginT - marginB
    const x = D3.scaleLinear().domain([0, 61]).range([marginL, width - marginL])
    const y = D3.scaleLinear().domain([25, 35]).range([height - marginT, marginT]);
    const opacityScale = D3.scaleLinear().domain([0, 100]).range([0, 1])
    useEffect(() => {
        // D3.select('g.x-axis').call(D3.axisBottom())
        D3.select('svg').selectAll('circle')
            .data(data.sort(D3.ascending)) // the .filter part is just to keep a few dots on the chart, not all of them
            .enter()
            .append("circle")
            .attr("cx", d => d[1]['finishPos'] ? x(d[1]['finishPos']) : 0)
            .attr("cy", d => height - y(d[1]['puttingAvg']))
            // .attr("cy", d => height - y(d[1]['puttingAvg']))
            // .attr("cy", d => y(d[1]['puttingAvg']))
            .attr("r", d => d[1].greensHitFrom200)
            // .style("opacity", d => d[1].fairwaysHitPercent / 100)
            .style("opacity", d => opacityScale(d[1].fairwaysHitPercent))

            .style("stroke", d => d[1].finishPos < 8 ? "blue" : "")
            .style("stroke-width", d => d[1].finishPos < 8 ? "4" : "0")
            .style("fill", d => (
                d[1].finishPos < 12
                    ?
                    "green"
                    :


                    "pink"
            ))


        D3.select('svg').append('text').text("Greens From 200").attr('transform', `translate(${width / 2},${height})`).style("color", "red").style("font-size", "1rem").style("text-anchor", "middle")

        D3.select('g.x-axis').attr("transform", `translate(0, ${height - marginB - marginB})`).call(D3.axisBottom(x))
        D3.select('g.y-axis').attr("transform", `translate(${marginL + marginL})`).call(D3.axisLeft(y))


    })



    return <div className="infographic-holder">


        <svg width={width} height={height} style={{ background: "" }} ref={d3Ref}>
            <g className="x-axis"></g>
            <g className="y-axis"></g>
        </svg>
    </div>
}


export default D3Infographic
