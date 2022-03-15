import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { SwiperModule } from 'swiper/angular';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { MovieThumbnailComponentModule } from '../components/movie-thumbnail/movie-thumbnail.module';
import { HeaderComponentModule } from '../components/header/header.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    SwiperModule,
    MovieThumbnailComponentModule,
    HeaderComponentModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
