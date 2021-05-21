
import * as D3 from 'd3';
import Anime, { anime } from 'react-animejs-wrapper'
import { useEffect, useRef } from 'react'
import { style } from 'd3';



const D3StatBox = ({ playerStats }) => {
    console.log(Object.entries(playerStats.stats))
    const d3Ref = useRef()



    useEffect(() => {
        D3.selectAll('svg').remove()
        D3.selectAll("g").remove()
        const size = 600;
        const margin = 80;
        const svg = D3.select(d3Ref.current)
            .append('svg')
            .attr('height', size - margin)
            .attr('width', size - margin)

        const xScale = D3.scaleLinear().domain([0, 40]).range([50, size - 100])
        const yScale = D3.scaleLinear().domain([8, 15]).range([440, margin])

        svg.append('g').attr("class", "x-scale").attr("transform", `translate(0, ${size - margin - margin})`).call(D3.axisBottom(xScale))
        svg.append('g').attr("class", "y-scale").attr("transform", "translate(50)").call(D3.axisLeft(yScale))



        var arc = D3.arc()
            .innerRadius(10)
            .outerRadius(45)
            .startAngle(5)
            .endAngle(3);
        var arc2 = D3.arc()
            .innerRadius(40)
            .outerRadius(45)
            .startAngle(10)
            .endAngle(8);

        svg.append("path")
            .attr("transform", "translate(100, 100)")
            .attr("class", "arc")
            .attr("d", arc)
            .attr("fill", "green");
        // svg.selectAll('rect')
        //     .data(Object.entries(playerStats.stats))
        //     .enter()
        //     .append('rect')
        //     .attr('x', (d, i) => i * 20 + 50)
        //     .attr('y', (d, i) => 430)
        //     .attr('height', d => 10)
        //     .attr('width', 10)
        //     .attr('fill', 'red')

        // svg.append('g')
        //     .selectAll('dot')
        //     .data(Object.entries(playerStats.stats))
        //     .enter()
        //     .append('circle')
        //     .attr("cx", d => d)
        //     .attr("cy", 50)
        //     .attr("r", 50)
        //     .style("fill", "green")


    }, [])
    return <div className="stat-box">
        {playerStats.player}
        <div className="svg-wrapper" ref={d3Ref}>

        </div>

        <style jsx>
            {`
        `}
        </style></div>
}


export default D3StatBox