import { Component } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rhea-kukreti';
  websiteImage: string = '';
  websiteTitle: string = '';
  websiteUrl: string = '';
  websiteCompany: string = '';
  websiteDuration: string = '';
  websiteContent: string = '';
  // modalContent: string = '';

  constructor() {
    document.body.className = "bg-pattern disable-hor-scroll";
    var root = document.getElementsByTagName( 'html' )[0];
    root.setAttribute('class', 'disable-hor-scroll');
  }

  onTabHover(tab: string): void {
    const tabElement = document.querySelector(`#list-${tab}-tab`) as HTMLElement;
    const contentElement = document.querySelector(`#${tab}`) as HTMLElement;
    const contentSticker = document.querySelector(`#${tab} .website-poster`) as HTMLElement;

    if (tabElement && contentElement && contentSticker) {
      // Remove "active" class from all tabs and contents
      document.querySelectorAll('.list-group-item').forEach((link) => link.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach((pane) => pane.classList.remove('show', 'active'));
      contentSticker.classList.remove('peel-sticker');

      // Add "active" class to hovered tab and corresponding content
      tabElement.classList.add('active');
      contentElement.classList.add('show', 'active');
    }
  }

  onTabClick(tab: string): void {
    const contentSticker = document.querySelector(`#${tab} .website-poster`) as HTMLElement;

    if (contentSticker) {
      // Add "peel-sticker" class to sticker of hovered tab
      contentSticker.classList.add('peel-sticker');
    }
  }

  openPopup(data: { image: string; title: string; url: string; company: string; duration: string; content: string;}): void {
    this.websiteImage = data.image;
    this.websiteTitle = data.title;
    this.websiteUrl = data.url;
    this.websiteCompany = data.company;
    this.websiteDuration = data.duration;
    this.websiteContent = data.content;

    const modalElement = document.getElementById('contentModal') as HTMLElement;
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  ngOnDestroy(){
    document.body.className="";
  }
}
