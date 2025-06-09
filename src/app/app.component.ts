import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Form';
  name: string = "";
  subject: string = "";
  testScore1: number | null = null;
  testScore2: number | null = null;
  finalMessage = "";

  showMessage(){
     const total = (this.testScore1 || 0) + (this.testScore2 || 0);
     this.finalMessage = `Hello ${this.name}! Your Score in ${this.subject} is ${total}`;
  }

}
