import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  storiesSwiper: any;

  constructor() { }

  ngOnInit() {
    this.storiesSwiper = new Swiper('.swiper-container', {
      observer: true,
      slidesPerView: 'auto',
      freeMode: true,
      freeModeFluid : true,
      resizeReInit: true,
      preloadImages: false,
      watchSlidesVisibility: false,
      lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 10,
        elementClass: 'swiper-lazy',
        loadingClass: 'swiper-lazy-loading',
        loadedClass: 'swiper-lazy-loaded',
        preloaderClass: 'swiper-lazy-preloader',
      }
    });
  }

}
