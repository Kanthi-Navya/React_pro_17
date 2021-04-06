// import { React, useState } from 'react';
// import './SnakeGame.css'
// const SnakeGame = () => {

//   const [state, setState] = useState({

//     width: 0,
//     height: 0,
//     blockWidth: 0,
//     blockHeight: 0,
//     gameLoopTimeout: 50,
//     timeoutId: 0,
//     startSnakeSize: 0,
//     snake: [],
//     apple: {},
//     direction: 'right',
//     directionChanged: false,
//     isGameOver: false,
//     snakeColor: 'black' ,
//     appleColor: 'red',
//     score: 0,
//     highScore: Number(localStorage.getItem('snakeHighScore')) || 0,
//     newHighScore: false
//   })

//   // useEffect(() => {
   
//     // initGame()
    
//     // window.addEventListener('keydown', handleKeyDown)
//     window.addEventListener('keydown', (event) => {
//       console.log("key down");
      
//     });
//     // Gameloop()
//   // },[])

//   const initGame = () => {
    
//     // let percentageWidth = this.props.percentageWidth || 40;
//     let width =
//       document.getElementById('GameBoard').parentElement.offsetWidth *
//       (100 / 100)

//     width -= width % 30
//     if (width < 30) width = 30
//     let height = (width / 3) * 2
//     let blockWidth = width / 30
//     let blockHeight = height / 20
    
//     //  snake initializaton
//     // let startSnakeSize = this.props.startSnakeSize || 6
//     let startSnakeSize = 30 || 6
//     console.log(startSnakeSize, "snake size")
//     let snake = []
//     let Xpos = width / 2
//     let Ypos = height / 2
//     let snakeHead = { Xpos: width / 2, Ypos: height / 2 }
//     snake.push(snakeHead)
//     for (let i = 1; i < startSnakeSize; i++) {
//       Xpos -= blockWidth
//       let snakePart = { Xpos: Xpos, Ypos: Ypos }
//       snake.push(snakePart)
//     }


//     //apple postion initialization
//     let appleXpos =
//       Math.floor(Math.random() * ((width - blockWidth) / blockWidth + 1)) *
//       blockWidth
//     let appleYpos =
//       Math.floor(Math.random() * ((height - blockHeight) / blockHeight + 1)) *
//       blockHeight
//     while (appleYpos === snake[0].Ypos) {
//       appleYpos =
//         Math.floor(Math.random() * ((height - blockHeight) / blockHeight + 1)) *
//         blockHeight
//     }

//     setState({
//       width,
//       height,
//       blockWidth,
//       blockHeight,
//       startSnakeSize,
//       snake,
//       apple: { Xpos: appleXpos, Ypos: appleYpos }
//     })
//   }

//   const Gameloop =() => {
//     // let timeoutId = setTimeout(() => {
//       moveSnake()
//     // }, [])
//   }

//   const moveSnake =() => {
    
//     debugger

//     let snake = state.snake
//     console.log(snake, "snake array")
//     let previousPartX = state.snake[0]
//     let previousPartY = state.snake[0]
//     // let tmpPartX = previousPartX
//     // let tmpPartY = previousPartY
//     // this.moveHead()
    
//     for (let i = 1; i < snake.length; i++) {
//       // tmpPartX = snake[i].Xpos
//       // tmpPartY = snake[i].Ypos
//       snake[i].Xpos = previousPartX
//       snake[i].Ypos = previousPartY
//       // previousPartX = tmpPartX
//       // previousPartY = tmpPartY
//     }
//     setState({ snake })
//   }
//   console.log(state, "snake");
//   return (
//     <div>
//       <p>Snake Game</p>
//       <div
//         id='GameBoard'
//         style={{
//           width: state.width,
//           height: state.height,
//           borderWidth: state.width / 50,
//         }}></div>
//          {state.snake.map((snakePart, index) => {
//           return (
//             <div
//               key={index}
//               className='Block'
//               style={{
//                 width: state.blockWidth,
//                 height: state.blockHeight,
//                 left: snakePart.Xpos,
//                 top: snakePart.Ypos,
//                 background: state.snakeColor,
//               }}
//             />
//           )
//         })}
//     </div>
//   );
// }

// export default SnakeGame;