// import AnimeJS from "../components/AnimeJS";

export default function PlayerCard({ handleOnClick, player }) {



    const handleBeingSelected = () => handleOnClick(player)


    return <div className='player-wrapper'>
        <h3 onClick={handleBeingSelected}>{player.player}</h3>






        <style jsx>
            {`
                .player-wrapper {
                    display:flex;
                }
        `}
        </style>
    </div>
}
