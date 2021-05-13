
import * as D3 from 'd3';
import Anime, { anime } from 'react-animejs-wrapper'
import { useEffect, useRef, useState } from 'react'
import M2015 from '../lib/data/M2015'




const D3ScatterPlot = ({ dataset }) => {

    console.log(dataset)

    const d3Ref = useRef()

    useEffect(() => {
        D3.selectAll('svg').remove()
        const size = 800;
        const svg = D3.select(d3Ref.current).append('svg')

        svg.attr("width", size - 200).attr("height", size - 200).style("background", "red")

        const x = D3.scaleLinear()
            .domain([0, 20])
            .range([55, 500])

        svg.append('g').attr("class", "axix x").attr("transform", "translate(0, 500)").call(D3.axisBottom(x))

        var y = D3.scaleLinear()
            .domain([20, 35])
            .range([500, 50]);

        svg.append("g").attr("class", "axis y").attr("transform", "translate (50)").call(D3.axisLeft(y))

        svg.append('g')
            .selectAll("dot")
            .data(dataset) // the .filter part is just to keep a few dots on the chart, not all of them
            .enter()
            .append("circle")
            .attr("cx", (d) => x(d.stats.avgGIRperRnd_fourWeek))
            .attr("cy", (d) => y(d.stats.avgPuttsperRnd_fourWeek))
            .attr("r", 7)
            .style("fill", "#69b3a2")
            .style("opacity", 0.3)
            .style("stroke", "white")





    }, [])


    return <>

        <div className="d3-container" ref={d3Ref}>
            HI
        </div>
        <style jsx>
            {`
            .d3-container {
                padding: 20px;
            }
        `}
        </style></>
}


export default D3ScatterPlot