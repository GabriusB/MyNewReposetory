const belenkas = (Taspats) => {
    const color = "red"
    const bg = "backgroundColor:"+color

    return(
        <div>

            <img src={Taspats.photo} alt=""/>
            <h2>{Taspats.text}</h2>
        </div>
    )
}

export default belenkas