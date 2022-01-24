const Shop = ({buyUpgrade,changeWindow}) => {
    return (
        <div>
            <div>
                <div className="btn" onClick={() => changeWindow(2)}>
                    Go back
                </div>
                <div className="btn"onClick={() => upgrade(1)}>
                    2x Click
                </div>
                <div className="btn"onClick={() => upgrade(2)}>
                    5x Click
                </div>
                <div className="btn" onClick={() => upgrade(3)}>
                    10x Click
                </div>

                <div className="btn" onClick={() => upgrade(4)}>
                    New cockie
                </div>
                <div className="btn">
                    New Background
                </div>
                <div className="btn">
                    coockie spin
                </div>
                <div className="btn">
                    coockie spin
                </div>
                <div className="btn">
                    helper
                </div>


            </div>


        </div>
    )
}