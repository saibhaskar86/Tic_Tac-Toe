import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity,Alert} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import { useState,useEffect, use}  from 'react'

const Game=()=>{

  const initialboard=[
      ['','',''],
      ['','',''],
      ['','',''],
  ];

  const [board,setBoard] =useState(initialboard);
  const [player,setplayer] =useState(X);
  const [winner,setWinner]=useState('');

  useEffect(()=>{
    checkwinner();
  },[board]);

  const handlepress=(rowIndex,cellIndex)=>{
    if(board[rowIndex][cellIndex] ==='' & !winner)
      {
        const newBoard =[...board];
        newBoard[rowIndex][cellIndex] = player;
        setBoard(newBoard);
        setplayer(player ==='X'?'O':'X')
      }
  }

  const checkWinner =() =>
    {
      for(let i=0;i<3;i++)
        {
          if(
            board[i][0]!==''&&
            board[i][0]== board[i][1]&&
            board[i][0]== board[i][2]
          )
          {
            setWinner(board[i][0]);
            break;
          }
        }

//check colum
        for(let i=0;i<3;i++)
          {
            if(
              board[0][i]!==''&&
              board[0][i]=== board[1][i]&&
              board[0][i]=== board[2][i]
            )
            {
              setWinner(board[0][i]);
              break;
            }
          }

          //check diagonal


          for(let i=0;i<3;i++)
            {
              if(
                board[0][0]!==''&&
                board[0][0]=== board[1][2]&&
                board[0][0]=== board[2][2]
              )
              {
                setWinner(board[0][0]);
                break;
              }
              else if(
                board[0][2]!==''&&
                board[0][2]=== board[1][1]&&
                board[0][2]=== board[2][0]
              )
              {
                setWinner(board[0][2]);
              }
            }

            const resetboard = () =>{
              setBoard(initialboard);
              setplayer('X');
              setWinner('');
            }

            useEffect(()=>{
              if(winner)
                {
                  Alert.alert(`Player${winner}Won!!`,' ',[{text:'OK',onPress:resetboard}]);
                }
            },[winner]);

            useEffect(()=>{
              if(!winner)
                {
                  const isBoardfull =board.every((row)=>row.every((cell)=>cell !==''));

                  if(isBoardfull)
                    {
                      Alert.alert(`its's a Tie!!`,' ',[{text:'OK',onPress:resetboard}]);
                    }
                }
            },[board]);


       
    }
  
  return (  
     
    <View style={styles.container}>
        <Text style={styles.tittle}>Tic-Tac-Toe</Text>
        <board board={board} onPress={handlepress}/>
        <TouchableOpacity
        style = {styles.resetbutton}
        onPress={resetboard}

        >
<Text  style = {styles.resetbuttonText}>Reset</Text>
        </TouchableOpacity>

    </View>

);
}

export default Game


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tittle:
  {
    fontSize:30,
    fontWeight:'bold',
    marginBottom:20
  },
  resetbutton:{
    backgroundColor:'#000',
    padding:10,
    borderRadius:5,
    marginTop:20,
  },
  resetbuttonText:{
     color:'#fff',
     fontSize:20,
     fontWeight:'bold'
  },

});
