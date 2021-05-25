
import * as D3 from 'd3';
import Anime, { anime } from 'react-animejs-wrapper'
import { useEffect, useRef, useState } from 'react'




const D3Infographic = ({ dataset }) => {
    console.log(Object.entries(dataset))
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
    const x = D3.scaleLinear().domain([0, 100]).range([marginL, width - marginL])
    const y = D3.scaleLinear().domain([0, 100]).range([height - marginT, marginT]);

    useEffect(() => {
        // D3.select('g.x-axis').call(D3.axisBottom())
        D3.select('svg').selectAll('circle')
            .data(data) // the .filter part is just to keep a few dots on the chart, not all of them
            .enter()
            .append("circle")
            .attr("cx", d => x(d[1]['greensFrom200']))
            .attr("cy", d => height - y(d[1]['bounceBackPercentage']))
            .attr("r", 5)
            .style("fill", "green")

        D3.select('g.x-axis').attr("transform", `translate(0, ${height - marginB - marginB})`).call(D3.axisBottom(x))
        D3.select('g.y-axis').attr("transform", `translate(${marginL + marginL})`).call(D3.axisLeft(y))



    })



    return <div className="infographic-holder">


        <svg width={width} height={height} style={{ background: "red" }} ref={d3Ref}>
            <g className="x-axis"></g>
            <g className="y-axis"></g>
        </svg>
    </div>
}


export default D3Infographic
