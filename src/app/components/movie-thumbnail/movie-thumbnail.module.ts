import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { MovieThumbnailComponent } from './movie-thumbnail.component';

@NgModule({
    imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
    declarations: [MovieThumbnailComponent],
    exports: [MovieThumbnailComponent]
})

export class MovieThumbnailComponentModule{}