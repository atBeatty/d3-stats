
import * as D3 from 'd3';
import Anime, { anime } from 'react-animejs-wrapper'
import { useEffect, useRef, useState } from 'react'
import M2015 from '../lib/data/M2015'




const D3Infographic = ({ dataset }) => {
    const puttPerRnd = dataset
    console.log(dataset)
    const d3Ref = useRef()
    const size = 800;
    const marginT = 100;
    const marginB = 100;
    const marginL = 100;
    const marginR = 100;
    const width = size - marginR - marginL
    const height = size - marginT - marginB

    useEffect(() => {
        // D3.select('g.x-axis').call(D3.axisBottom())


    })



    return <div className="infographic-holder">


        <svg width={width} height={height} style={{ background: "red" }} ref={d3Ref}>
            <g className="x-axis"></g>
            <g className="y-axis"></g>
        </svg>
    </div>
}


export default D3Infographic
