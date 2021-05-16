
import * as D3 from 'd3';
import Anime, { anime } from 'react-animejs-wrapper'
import { useEffect, useRef, useState } from 'react'
import M2015 from '../lib/data/M2015'




const D3ScatterPlot = ({ dataset }) => {

    const [selectedStat, setSelectedStat] = useState("avgPuttsperRnd_fourWeek")
    const [domainY, setDomainY] = useState([10, 45])

    const handleStatClick = (e) => {
        setSelectedStat(e.target.name)
        const minVal = D3.min(dataset.map(player => player.stats[e.target.name]))
        const maxVal = D3.max(dataset.map(player => player.stats[e.target.name]))
        setDomainY([maxVal, minVal])
        console.log(minVal, maxVal)
    }
    console.log()
    // console.log(dataset)

    const d3Ref = useRef()

    useEffect(() => {
        D3.selectAll('svg').remove()
        const size = 800;
        const svg = D3.select(d3Ref.current).append('svg')

        svg.attr("width", size - 200).attr("height", size - 200)

        const x = D3.scaleLinear()
            .domain([0, 18])
            .range([100, 500])

        svg.append('g')
            .attr("class", "axis x")
            .attr("transform", "translate(0, 550)")
            .call(D3.axisBottom(x))

        var y = D3.scaleLinear()
            .domain(domainY)
            .range([500, 100]);
        console.log(domainY)

        svg.append("g")
            .attr("class", "axis y")
            .attr("transform", "translate (50)").call(D3.axisLeft(y))

        svg.append('g').attr("class", "scatter-plot")
            .selectAll("dot")
            .data(dataset) // the .filter part is just to keep a few dots on the chart, not all of them
            .enter()
            .append("circle")
            .attr("cx", (d) => x(d.stats.avgGIRperRnd_twentyFourWeek))
            .attr("cy", (d) => d.stats[selectedStat] != 0 && y(d.stats[selectedStat]))
            .attr("r", 7)
            .style("fill", "#69b3a2")
            .style("opacity", (d) => d.stats.finish < 11 ? 1 : 0.2)
            .style("stroke", "white")

        svg.select(".scatter-plot").selectAll("text")
            .data(dataset)
            .enter()
            .append("text")
            .attr("x", d => x(d.stats.avgGIRperRnd_twentyFourWeek))
            .attr("y", d => y(d.stats[selectedStat]))
            .text(d => `${d.player} ${d.stats.finish}`)
            .style("opacity", "0")
            .on('mouseover', function (d, i) {
                D3.select(this).transition()
                    .duration('1000')
                    .style("opacity", 1);
            })
            .on('mouseout', function (d, i) {
                D3.select(this).transition()
                    .duration('1000')
                    .style("opacity", 0);
            })



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