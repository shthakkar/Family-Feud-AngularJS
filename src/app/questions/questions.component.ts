import { Component, OnInit } from '@angular/core';
import {Question} from '../question';
import {ALLQS} from '../mock-questions'

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions = ALLQS;
  curr: number = 0;
  sum:number = 0;
  team1 = 'Girls';
  team2 = 'Boys';
  strike = ''
   team1Score : number =0;
  team2Score: number = 0;
selectedAns: [string,number,boolean];

onSelect(myAns: [string,number,boolean]): void {
  this.selectedAns = myAns;
   if(myAns[2]==true)
  this.sum = this.sum - myAns[1];
  else
   this.sum = this.sum + myAns[1];
  myAns[2]=!myAns[2];
 
}

increment(): void {
  this.curr = this.curr + 1 ;
  this.sum = 0;
  this.strike = '';
}

decrement(): void {
  this.curr = this.curr -1  ;
  this.sum = 0;
  this. strike = '';
}

team1Won(): void {
  this.team1Score = this.sum + this.team1Score ;
}

team2Won(): void {
   this.team2Score = this.sum + this.team2Score ;
}

strikeClick(): void
{
  this.strike = this.strike + 'X';
}
  constructor() { }

  ngOnInit() {
  }

}