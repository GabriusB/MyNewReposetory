const Menu = ({changeWindow}) =>{
    return(
        <div className="btn" onClick={ () => changeWindow(2)}>
            Start Game
        </div>
    )
}

export default Menu;