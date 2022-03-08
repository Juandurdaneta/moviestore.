import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieDetailsPageRoutingModule } from './movie-details-routing.module';

import { MovieDetailsPage } from './movie-details.page';
import { MovieThumbnailComponentModule } from 'src/app/components/movie-thumbnail/movie-thumbnail.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieDetailsPageRoutingModule,
    MovieThumbnailComponentModule
  ],
  declarations: [MovieDetailsPage]
})
export class MovieDetailsPageModule {}
