const LogName = (props) => {
    const customStyle = {
        height: props.item.height + "px",
        width: props.item.width + "px",
        backgroundColor: props.item.color
    }
    return(
        <div>
            <div>zxcxzc</div>
            <h1 style={customStyle}>This is Best {props.item.text}</h1>
        </div>
    )
}

export default LogName;