import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rhea-kukreti';
  websiteImage: string = '';
  websiteTitle: string = '';
  websiteUrl: string = '';
  websiteContent: string = '';
  // modalContent: string = '';

  constructor() {
    document.body.className = "bg-pattern";
  }

  onTabHover(tab: string): void {
    const tabElement = document.querySelector(`#list-${tab}-tab`) as HTMLElement;
    const contentElement = document.querySelector(`#${tab}`) as HTMLElement;

    if (tabElement && contentElement) {
      // Remove "active" class from all tabs and contents
      document.querySelectorAll('.list-group-item').forEach((link) => link.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach((pane) => pane.classList.remove('show', 'active'));

      // Add "active" class to hovered tab and corresponding content
      tabElement.classList.add('active');
      contentElement.classList.add('show', 'active');
    }
  }

  openPopup(data: { image: string; title: string; url: string; content: string;}): void {
    this.websiteImage = data.image;
    this.websiteTitle = data.title;
    this.websiteUrl = data.url;
    this.websiteContent = data.content;

    const modalElement = document.getElementById('contentModal') as HTMLElement;
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  ngOnDestroy(){
    document.body.className="";
  }
}
