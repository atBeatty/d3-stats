
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
        setDomainY([maxVal + 20, minVal])
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
            .domain([0, 70])
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
            .attr("cx", (d) => x(d.stats.finish))
            .attr("cy", (d) => y(d.stats[selectedStat]))
            .attr("r", 7)
            .style("fill", "#69b3a2")
            .style("opacity", (d) => d.stats.finish < 11 ? 1 : 0.2)
            .style("stroke", "white")

        svg.selectAll("text")
            .data(dataset)
            .enter()
            .append("text")
            // Add your code below this line
            .attr("x", (d) => x(d.stats.finish))
            .attr("y", (d) => size - 200 - y(d.stats[selectedStat]))
            .attr("text", d => d)

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

        <div className="d3-container" ref={d3Ref}>
            HI
        </div>
        <style jsx>
            {`
            div * {
                transition: all .5s ease
            }
            .d3-container {
                padding: 20px;
            }
        `}
        </style></>
}


export default D3ScatterPlot