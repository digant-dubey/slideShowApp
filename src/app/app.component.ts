import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'slideShowApp';
  height = '325px'
  autoPlayToggle = true;
  imageSources = [
    { url: 'assets/images/download1.jpg', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/images/download2.jpg', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/images/download3.jpg', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/images/download4.jpg', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/images/download5.jpg', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/images/download6.jpg', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/images/download7.jpg', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/images/download8.jpg', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/images/download9.jpg', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/images/download10.jpg', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/images/download11.jpg', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/images/download12.jpg', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/images/download13.jpg', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/images/download14.jpg', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/images/download15.jpg', backgroundSize: 'contain', backgroundPosition: 'center' }
  ];

  togglePlay(){
    this.autoPlayToggle = !this.autoPlayToggle;
  }
}
