const XBet2 = () => {

    const BigBox = {
        display: "flex",
        width: 630 + "px",
        height: 200 + "px",
        border: 3 + "px" + "solid" + "black",
        justifyContent: "space-evenly"
    }

    let money = 200

function betmoney () {

}



    return(
      <div>
          <div><h2>Money: {money}</h2></div>

          <div style={BigBox} >
    <div className="box2">    </div>
    <div className="box2">    </div>
    <div className="box2">    </div>


        </div>
      </div>
    );
}
export default XBet2;