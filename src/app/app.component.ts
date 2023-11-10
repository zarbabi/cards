import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterOutlet, CardComponent],
})
export class AppComponent {
  posts = [
    { title: 'pic1', imgeUrl: 'assets/images/pic1.jpeg', username: 'pic1', content: 'this is pic1' },
    { title: 'pic2', imgeUrl: 'assets/images/pic2.jpeg', username: 'pic2', content: 'this is pic2' },
    { title: 'pic3', imgeUrl: 'assets/images/pic3.jpeg', username: 'pic3', content: 'this is pic3' },
  ];

 getPosts(){
   return this.posts;
 }
}
