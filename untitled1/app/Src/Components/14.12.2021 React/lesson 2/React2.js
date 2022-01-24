const LogName2 = (props2) => {

    const color = props2.user.gender === `male` ? "blue" :"pink"
    return(
        <div style={{background: color}}>
            <h3>This is Users: {props2.user.name}</h3>

        </div>
    )

}

export default LogName2