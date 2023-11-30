import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public gameState =[3,3,3,3,3,3,3,3,3];
  public winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    ];

    public gameOver = false;
    public chance= 0;
    public draw = false;
    public winner = 3;


  constructor() { }

  //ChangeGameState

  changeGameState(position: number){

    // check gameOver
    if(this.gameOver){
      alert("Game is already over");
      return;
    }

    // check for position occupied

    if(this.gameState[position] !=3){
      alert("Position is already occupied");
      return;
    }

    //if position is blank
this.gameState[position]=this.chance;

    //check for winner
    if(this.checkWinner()){
      this.gameOver=true;
      this.winner = this.chance;
      return;
    }

    

    //check for draw

    if(this.checkDraw()){
      this.gameOver=true;
      this.draw=true;
      return;
    }

    //if no winner and draw
    this.chance=this.chance == 1 ? 0 : 1;
  }
  //checks for winner
  checkWinner(){

    for(let i=0;i<this.winningPositions.length;i++)
    {
      let winningSubarray = this.winningPositions[i];

      if((this.gameState[winningSubarray[0]]==this.gameState[winningSubarray[1]]&&
        this.gameState[winningSubarray[1]]==this.gameState[winningSubarray[2]])
        && this.gameState[winningSubarray[0]] !== 3
        )
        {
           return true;
        }
    }

    return false;

  }

  //check draw

  checkDraw(){
    for(let i = 0;i<this.gameState.length;i++){
      if(this.gameState[i]==3){
        return false;
      }

    }
    return true;
  }




  //restart game

  restartGame(){
     this.gameState =[3,3,3,3,3,3,3,3,3];
    this.gameOver = false;
    this.chance= 0;
    this.draw = false;
    this.winner = 3;


  }
}
