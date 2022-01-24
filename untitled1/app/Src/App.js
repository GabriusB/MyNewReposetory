import './App.css';
import Question1 from "./Components/14.12.2021 React/Lesson6Day21/Question1";

// import Cats from "./Components/Cats.js";
// import Karate from "./Components/Karate.js";
// import Sleeping from "./Components/Sleeping.js";
// import TasPats from "./Components/TasPats"
// import React2 from "./Components/14.12.2021 React/lesson 2/React2";
// import {useState} from "react";
// import Some from "./Components/14.12.2021 React/lesson 2/Some";
// import Other from "./Components/14.12.2021 React/lesson 3/Other";
// import Cars from "./Components/14.12.2021 React/lesson 3/Cars";
// import TextChange from "./Components/14.12.2021 React/lesson 3/TextChange";

// function App() {
//
//
//
//     // const arr2 = [
//     //     {
//     //         height: 100,
//     //         width: 200,
//     //         color: "black",
//     //         text: "some text"
//     //     },
//     //     {
//     //         height: 150,
//     //         width: 80,
//     //         color: "red",
//     //         text: "any text"
//     //     },
//     //     {
//     //         height: 200,
//     //         width: 200,
//     //         color: "blue",
//     //         text: "some more text"
//     //     }
//     // ]
//
// //2
//     // const arr = [
//     //     "http://cdn.onlinewebfonts.com/svg/download_159991.png",
//     //     "https://yt3.ggpht.com/a/AATXAJyPq7E8FfAogXr-WO95pzRe4gaSMfdCCC4Bzg=s900-c-k-c0xffffffff-no-rj-mo",
//     //     "https://i.ytimg.com/vi/0iLGFSifrAk/maxresdefault.jpg"
//     // ]
//
//     const name = "Gabrielius"
//     const age = 21
//     const surname = "Bubulas"
//     const city = "Vilnius"
//
//     // function some (){
//     //     console.log(`asdasdasd`)
//     // }
//
//   return (
//     <div className="App">
//
//       {/*  <Bestwishes item={arr2[0]}/>*/}
//       {/*  <Bestwishes item={arr2[1]}/>*/}
//       {/*  <Bestwishes item={arr2[2]}/>*/}
//
//     </div>
//   );
// }
//
// export default App;


// function App2() {
// const users = [
//     {
//         "id": 1,
//         "gender": "male",
//         "name": "Leanne Graham",
//         "username": "Bret",
//         "email": "Sincere@april.biz",
//         "address": {
//             "street": "Kulas Light",
//             "suite": "Apt. 556",
//             "city": "Gwenborough",
//             "zipcode": "92998-3874",
//             "geo": {
//                 "lat": "-37.3159",
//                 "lng": "81.1496"
//             }
//         },
//         "phone": "1-770-736-8031 x56442",
//         "website": "hildegard.org",
//         "company": {
//             "name": "Romaguera-Crona",
//             "catchPhrase": "Multi-layered client-server neural-net",
//             "bs": "harness real-time e-markets"
//         }
//     },
//     {
//         "id": 2,
//         "gender": "female",
//         "name": "Ervin Howell",
//         "username": "Antonette",
//         "email": "Shanna@melissa.tv",
//         "address": {
//             "street": "Victor Plains",
//             "suite": "Suite 879",
//             "city": "Wisokyburgh",
//             "zipcode": "90566-7771",
//             "geo": {
//                 "lat": "-43.9509",
//                 "lng": "-34.4618"
//             }
//         },
//         "phone": "010-692-6593 x09125",
//         "website": "anastasia.net",
//         "company": {
//             "name": "Deckow-Crist",
//             "catchPhrase": "Proactive didactic contingency",
//             "bs": "synergize scalable supply-chains"
//         }
//     },
//     {
//         "id": 3,
//         "gender": "male",
//         "name": "Clementine Bauch",
//         "username": "Samantha",
//         "email": "Nathan@yesenia.net",
//         "address": {
//             "street": "Douglas Extension",
//             "suite": "Suite 847",
//             "city": "McKenziehaven",
//             "zipcode": "59590-4157",
//             "geo": {
//                 "lat": "-68.6102",
//                 "lng": "-47.0653"
//             }
//         },
//         "phone": "1-463-123-4447",
//         "website": "ramiro.info",
//         "company": {
//             "name": "Romaguera-Jacobson",
//             "catchPhrase": "Face to face bifurcated interface",
//             "bs": "e-enable strategic applications"
//         }
//     },
// ]
// const [getColorIndex, setColorIndex] = useState(0)
// let colors = [
//     '#61dafb',
//     '#21748d',
//     '#4FDA8FFF',
//     '#E8E161FF',
//     '#fd56a9'
// ]
//
// function changeColor() {
//     const random = Math.floor(Math.random()*colors.length)
//     setColorIndex(random)
// }
//
// return (
//     <div className="App">
//         {/*<Some color={colors[getColorIndex]}/>*/}
//         <Some addCount="5"/>
//         {/*<button onClick={changeColor}>Click Here</button>*/}
//     </div>
// );
// }
//
// export default App2;


// function App3() {
//     const [getAnimalIndex, setAnimalIndex] = useState(0)
//     const animals = ['KINGKONG', 'Fish', 'cat', 'Cow', 'Dog']
//
//     function changeAnimal() {
//         setAnimalIndex(getAnimalIndex + 1)
//     }
//
//     if (getAnimalIndex > animals.length - 1) {
//         setAnimalIndex(0)
//     }
//     // const animal = `cow`
//     // let comp
//     //
//     // if(animal === "cat"){
//     //     comp = <Other/>
//     // }
//     // if(animal === "cow") {
//     //     comp = <Some addCount="2"/>
//     // }
//     // if (animal === "dog"){
//     //     comp = <h1>Labas animal yra dog</h1>
//     // }
//
//     return (
//         <div className="App">
//             <Other animal={animals[getAnimalIndex]}/>
//
//             <button onClick={changeAnimal}>Change Animal</button>
//         </div>
//     );
// }
//
// export default App3;

// function App4() {
//     const [getCarIndex, setCarIndex] = useState(0)
//     const cars = [
//         {
//             model: "audi",
//             color: 'red',
//             fuelConsumption: 5,
//             distance: 150
//         },
//         {
//             model: "bmw",
//             color: 'brown',
//             fuelConsumption: 8,
//             distance: 320
//         },
//         {
//             model: "volvo",
//             color: 'brown',
//             fuelConsumption: 7,
//             distance: 440
//         },
//     ]
//
//     function changeCars() {
//         setCarIndex(getCarIndex + 1)
//     }
//
//     if (getCarIndex > cars.length - 1) {
//         setCarIndex(0)
//     }
//
//     return (
//         <div className="App">
//             <Cars car={cars[getCarIndex]}/>
//
//             <button onClick={changeCars}> Click There</button>
//         </div>
//     );
// }
//
// export default App4;

/////////////////////////////////////////////////////

// function App5() {
//     const [getState, setState] = useState(1)
//
// function say(){
//         setState(54)
// }
// function say2(){
//         setState(2154)
// }
// function say3(){
//         setState(222254)
// }
// return(
//     <div>
//         <h1>State is {getState}</h1>
//         <div className="App">
//             <TextChange props1={say}/>
//             <TextChange props1={say2}/>
//             <TextChange props1={say3}/>
//         </div>
//     </div>
// )
//
// }
// export default App5;

/////////////////////////////////////////////////

// import Menu from "./Components/14.12.2021 React/Lesson4/Game 17.12/Menu"
// import Shop from "./Components/14.12.2021 React/Lesson4/Game 17.12/Shop"
// import Game from "./Components/14.12.2021 React/Lesson4/Game 17.12/Game"
//
// function FirstGame() {
//     const [getWindowNum, setWindowNum] = useState(1)
//     const [getPointsToAdd,  setPointsToAdd] = useState(1)
//
//     const [getPoints, setPoints] = useState(1000)
//
//     function change() {
//         console.log(num)
//         setWindowNum(2)
//     }
//     function addPoints() {
//         setPoints(getPoints + getPointsToAdd)
//     }
//     function buyUpgrade (index) {
//         if(index === 1) {
//             if(getPoints >= 100){
//                 setPointsToAdd(2)
//                 setPoints(getPoints - 100)
//                 setWindowNum(2)
//             }
//         }
//         if(index === 2) {
//             if(getPoints >= 500){
//                 setPointsToAdd(2)
//                 setPoints(getPoints - 500)
//                 setWindowNum(2)
//             }
//         }
//         if(index === 3) {
//             if(getPoints >= 1000){
//                 setPointsToAdd(2)
//                 setPoints(getPoints - 1000)
//                 setWindowNum(2)
//             }
//         }
//         if(index === 4) {
//
//         }
//         if(index === 5) {
//
//         }
//         if(index === 6) {
//
//         }
//         if(index === 7) {
//
//         }
//
//     }
//
//     return (
//         <div className={}>
//             {getWindowNum === 1 && <Menu changeWindow={change}/>}
//             {getWindowNum === 2 && <Game changeWindow={change}
//                                          points={getPoints}
//                                          coockieClick={getPointsToAdd}/>}
//             {getWindowNum === 3 && <Shop changeWindow={change} upgrade={buyUpgrade()}/>}
//         </div>
//     );
// };
// export default FirstGame;

/////////////////////////////////////////////////
//
// import ButtonsColor1 from "./Components/14.12.2021 React/Lesson4/Buttons/ButtonsColor1";
// import ButtonsColor2 from "./Components/14.12.2021 React/Lesson4/Buttons/ButtonsColor2";

//
// import XBet from "./Components/14.12.2021 React/Lesson5day20/XBet";
// import XBet2 from "./Components/14.12.2021 React/Lesson5day20/XBet2";
//
// function SevenBet() {
//
//     return (
//         <div className="App">
//             <div>
//                 <XBet/>
//                 <button className="m10"><h2>Bet</h2></button>
//
//             </div>
//             <XBet2/>
//         </div>
//     );
// }
//
// export default SevenBet;
//
import ChosePlayer from "./BigGame/Components/ChosePlayer";

function BigGame() {
    return (
        <div>
            <ChosePlayer/>

        </div>
    )
}
export default BigGame;

