
import * as D3 from 'd3';
import Anime, { anime } from 'react-animejs-wrapper'
import { useEffect, useRef } from 'react'



const D3StatBox = ({ playerStats }) => {

    const { playerName, fourWeek, tenWeek, twentyFourWeek } = playerStats

    if (playerStats) {
        const four = Object.entries(fourWeek).map((entry, index) => {
            return {
                stat: entry[0], value: entry[1]
            }
        })
    }

    const d3Ref = useRef()
    useEffect(() => {
        const size = 500;
        const svg = D3.select(d3Ref.current).append('svg').attr('height', size).attr('width', size)
        // console.log(d3Ref)

        // svg.selectAll('rect')
        //     .data()
        //     .enter()
        //     .append('rect')
        //     .attr('x', (d, i) => i * 20)
        //     .attr('y', (d, i) => d.value)
        //     .attr('height', 100)
        //     .attr('width', 10)
        //     .attr('fill', 'red')


    }, [])
    return <>
        <div ref={d3Ref}>

        </div>
    </>
}


export default D3StatBox