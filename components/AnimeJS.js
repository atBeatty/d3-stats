
import Anime from "react-anime"
import animejs from 'animejs';

// WRAP THE ANIME AROUND THE MAPPED ARRAY FOR KEYS

export default function AnimeJS({ statsObject }) {

    // console.log(Object.entries(statsObject)[6][1])
    const playerPolygon = Object.entries(statsObject).map((entry, index) => {
        return <svg key={index} height="210" width="500">
            <polygon points={`250, ${parseFloat(entry[1][1])} 0, 210 500,210`} />
            {/* <polygon points={`${parseFloat(entry[1][1])},10 250,190 10,210`} /> */}
        </svg>
    })

    const statsJSX = Object.entries(statsObject).map((entry, index) => entry[1]).map((el, index) => {

        return <>

            <Anime
                // in
                // duration={300}
                // appear
                // onEntering={{
                //   translateY: [100, 0],
                //   opacity: [0, 1],
                //   delay: animejs.stagger(60),
                //   easing: "linear"
                // }}
                key={index}
                easing="easeOutElastic"
                duration={1500}
                direction="alternate"
                loop={true}
                delay={(el, index) => index * 450}
                translateX={el}
                scale={[.75, .9]}>
                <div>{el}</div>

            </Anime></>
    })
    const animeJSX = Object.entries(statsObject).map((entry, index) => {

        return <><div>{entry[1]}</div>
            <Anime easing="easeOutElastic"
                duration={1000}
                direction="alternate"
                loop={true}
                delay={(el, index) => index * 450}
                translateX='13rem'
                scale={[.75, .9]}>

            </Anime> </>
    })

    return <>
        {/* {statsJSX} */}
        {playerPolygon[1]}
    </>
}