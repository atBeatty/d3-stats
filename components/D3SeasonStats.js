
import * as D3 from 'd3';
import Anime, { anime } from 'react-animejs-wrapper'
import { useEffect, useRef, useState } from 'react'
import M2015 from '../lib/data/M2015'


function getFullSeasonStat(timeline, stat) {
    return M2015().map((el) => el.stats[`${stat}_${timeline}Week`])
}

const D3SeasonStats = ({ dataset }) => {

    const drivingDistanceFour = getFullSeasonStat("four", "avgDrDist")
    const drivingDistanceTen = getFullSeasonStat("ten", "avgDrDist")
    const drivingDistanceTwentyFour = getFullSeasonStat("twentyFour", "avgDrDist")




    const d3Ref = useRef()

    useEffect(() => {
        const size = 1500;
        const svg = D3.select(d3Ref.current).append('svg')
        svg.selectAll('*').remove()
        svg.attr('height', size).attr('width', size).style('background', 'brown')

        svg.selectAll('.four-week')
            .data(drivingDistanceFour)
            .enter()
            .append('rect')
            .attr('class', '.four-week')
            .attr('x', (d, i) => i * 20)
            .attr('y', (d, i) => 500)
            .attr('width', (d, i) => 5)
            .attr('height', (d, i) => parseInt(d) - 180)


        svg.selectAll('.ten-week')
            .data(drivingDistanceTen)
            .enter()
            .append('rect')
            .attr('class', 'ten-week')
            .attr('x', (d, i) => 5 + (i * 20))
            .attr('y', (d, i) => 500)
            .attr('width', (d, i) => 5)
            .attr('height', (d, i) => parseInt(d) - 180)
            .style('fill', 'yellow')

        svg.selectAll('.twentyFour-week')
            .data(drivingDistanceTwentyFour)
            .enter()
            .append('rect')
            .attr('class', 'twentyFour-week')
            .attr('x', (d, i) => 10 + (i * 20))
            .attr('y', (d, i) => 500)
            .attr('width', (d, i) => 5)
            .attr('height', (d, i) => parseInt(d) - 180)
            .style('fill', 'red')

        svg.append('line')
            .style("stroke", "lightgreen")
            .style("stroke-width", 10)
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", 200)
            .attr("y2", 200);




        // const arc = D3.arc()
        //     .innerRadius(0)
        //     .outerRadius(100)
        //     .startAngle(0)
        //     .endAngle(Math.PI / 2);

        // svg.attr("d", arc)
    }, [])
    return <>
        Hi
        <div ref={d3Ref}>

        </div>
    </>
}


export default D3SeasonStats