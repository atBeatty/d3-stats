
import * as D3 from 'd3';
import Anime, { anime } from 'react-animejs-wrapper'
import { useEffect, useRef, useState } from 'react'
import M2015 from '../lib/data/M2015'




const D3ScatterPlot = ({ dataset }) => {

    const [selectedStat, setSelectedStat] = useState("avgPuttsperRnd_fourWeek")
    const [domainY, setDomainY] = useState([])

    const handleStatClick = (e) => {
        setSelectedStat(e.target.name)
        const minVal = D3.min(dataset.map(player => parseFloat(player.stats[e.target.name])))
        const maxVal = D3.max(dataset.map(player => parseFloat(player.stats[e.target.name])))
        setDomainY([minVal, maxVal])
    }
    const d3Ref = useRef()



    useEffect(() => {
        D3.selectAll('svg').remove()
        const size = 800;
        const margin = 100;
        const svg = D3.select(d3Ref.current).append('svg').attr("width", size).attr("height", size)

        const x = D3.scaleLinear().domain([20, 40]).range([margin, size - margin])
        const y = D3.scaleLinear().domain([5, 32]).range([500, 100]);

        svg.append('g').attr("class", "axis x").attr("transform", "translate(0, 550)").call(D3.axisBottom(x))
        svg.append("g").attr("class", "axis y").attr("transform", "translate(200)").call(D3.axisLeft(y))

        svg.append("text").attr("x", (size - margin) / 2).attr("y", size - margin - margin).text("Avg Putts Per Rnd").style("font-family", "Arial")
        svg.append("text").attr("x", 100).attr("y", 450).text("Avg GIR Per Rnd").style("font-family", "Arial").style("transform-origin", "left").style("transform", "rotate(-90deg)")

        svg.selectAll("dot")
            .data(dataset) // the .filter part is just to keep a few dots on the chart, not all of them
            .enter()
            .append("circle")
            .attr("cx", d => x(d.stats.avgPuttsperRnd_fourWeek))
            .attr("cy", d => y(d.stats.avgGIRperRnd_fourWeek))
            .attr("r", 5)
            .style("fill", "green")
            .style("opacity", (d) => (!d.stats.finish | d.stats.finish === "Cut") ? "0" : "1")
        // .on('mouseover', function (d, i) {
        //     D3.select(this).transition()
        //         .style("fill", "red");
        // })
        // .on('mouseout', function (d, i) {
        //     D3.select(this).transition()
        //         .duration('100')
        //         .style("opacity", .4)
        //         .style("fill", "#69b3a2");
        // })



        svg.selectAll("dot")
            .data(dataset)
            .enter()
            .append("circle")
            .attr("cx", (d) => x(d.stats.avgPuttsperRnd_tenWeek))
            .attr("cy", (d) => y(d.stats.avgGIRperRnd_tenWeek))
            .attr("r", 5)

            .style("opacity", (d) => (!d.stats.finish | d.stats.finish === "Cut") ? "0" : "1")
        // .on('mouseover', function (d, i) {
        //     D3.select(this).transition()
        //         .style("fill", "red");
        // })
        // .on('mouseout', function (d, i) {
        //     D3.select(this).transition()
        //         .duration('100')
        //         .style("opacity", .4)
        //         .style("fill", "#69b3a2");
        // })

        // svg.select(".scatter-plot").selectAll("text")
        //     .data(dataset)
        //     .enter()
        //     .append("text")
        //     .attr("x", d => x(d.stats.avgPuttsperRnd_fourWeek))
        //     .attr("y", d => y(d.stats.avgGIRperRnd_fourWeek))

        //     .text(d => `${d.player}`)
        //     .style("opacity", 0)
        //     .on('mouseover', function (d, i) {
        //         D3.select(this).transition()
        //             .duration('100')
        //             .style("opacity", 1);
        //     })
        //     .on('mouseout', function (d, i) {
        //         D3.select(this).transition()
        //             .duration('100')
        //             .style("opacity", 0);
        //     })



        // svg.append('g').attr("class", "scatter-plot")
        //     .selectAll("dot")
        //     .data(dataset) // the .filter part is just to keep a few dots on the chart, not all of them
        //     .enter()
        //     .append("circle")
        //     .attr("cx", (d) => x(d.stats.finish))
        //     .attr("cy", (d) => y(d.stats.avgPuttsperRnd_tenWeek))
        //     .attr("r", 7)
        //     .style("fill", "blue")
        //     .style("opacity", (d) => d.stats.finish < 11 ? 1 : 0.2)
        //     .style("stroke", "white")






    }, [selectedStat, domainY])



    return <>
        {Object.keys(dataset[1].stats).map((stat, index) => <button name={stat} onClick={(e) => handleStatClick(e)} key={index}> {stat}</button >)}
        <h2>{selectedStat}</h2>

        <div className="d3-container" ref={d3Ref}>
            <svg style={{ width: "100px" }}></svg>
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