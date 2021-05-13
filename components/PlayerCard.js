// import AnimeJS from "../components/AnimeJS";

export default function PlayerCard({ player }) {





    return <div className='player-wrapper'>
        <h1>{player.player}</h1>





        <style jsx>
            {`
                .player-wrapper {
                    display:flex;
                }
        `}
        </style>
    </div>
}
