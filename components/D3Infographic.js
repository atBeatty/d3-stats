
import * as D3 from 'd3';
import Anime, { anime } from 'react-animejs-wrapper'
import { useEffect, useRef, useState } from 'react'




const D3Infographic = ({ data }) => {
    const dataset = []

    data[0][0].players.forEach(dataArray => {
        dataset.push({
            [dataArray[2]]: dataArray
        })
    })
    data[1][0].players.forEach(dataArray => {
        // const playerRow = dataset.find(el => Object.keys(el)[0] === dataArray[2])
        dataset.map(player => {
            // player.push(dataset.find(el => Object.keys(el)[0] === dataArray[2]))



        })
        // console.log(dataArray[2], dataset.map(el => console.log(el)))
        // console.log(dataset.map(el => Object.keys(el)[0]))
    })


    // console.log("DATASET", dataset)
    // data.forEach(dataCollection => {
    //     dataCollection[0].players.forEach(playerRow => {
    //         console.log("playerRow", dataset.find(el => el[playerRow[2]] === "Patrick Reed"))

    //     })

    // })

    const d3Ref = useRef()
    const size = 600;
    const marginT = 25;
    const marginB = 25;
    const marginL = 25;
    const marginR = 25;
    const width = size - marginR - marginL
    const height = size - marginT - marginB
    const xScale = D3.scaleLinear().domain([0, 4]).range([marginL, width - marginL])
    const yScale = D3.scaleLinear().domain([0, 100]).range([height - marginT, marginT]);


    useEffect(() => {
        D3.select('svg').selectAll('circle')
            .data(dataset)
            .enter()
            .append("circle")
            .attr("cx", d => (d))
            // .attr("cx", d => console.log(xScale(d[4])))
            .attr("cy", d => 50)
            // .attr("cy", d => height - yScale(d.GIR_PERCENTAGE[0].players[5]))

            .attr("r", 5)
        // .style("opacity", d => d[1].fairwaysHitPercent / 100)



        D3.select('svg').append('text').text("Greens From 200").attr('transform', `translate(${width / 2},${height})`).style("color", "red").style("font-size", "1rem").style("text-anchor", "middle")

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
