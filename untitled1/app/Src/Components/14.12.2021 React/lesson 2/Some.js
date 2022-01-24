// import {useState} from "react";
//
// function Some(props) {
//     const [getPoints, setPoints] = useState(0)
//     let color = "white"
//     let img = "random"
//
//     function addPoints() {
//         const pointsToAdd = Number(props.addCount)
//         setPoints(getPoints + pointsToAdd)
//     }
//
//
//     if (getPoints > 10 && getPoints < 20) {
//         color = "yellow"
//         img = "https://w-dog.ru/wallpapers/16/16/458098685630115/sobaka-vzglyad-drug.jpg"
//     }
//     if (getPoints > 20 && getPoints < 30) {
//         color = "orange"
//
//     }
//     if (getPoints > 30) {
//         color = "red"
//
//     }
//
//
//     return (
//         <div className="App">
//             <h1 className="box"> Points: 0</h1>
//             <button style={{backgroundColor: color}} onClick={addPoints}>Add</button>
//
//         </div>
//
//     )
// }
//
// export default Some