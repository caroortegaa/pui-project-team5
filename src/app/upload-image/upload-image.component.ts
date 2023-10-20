import { Component } from '@angular/core';
import { Article } from '../article';
import * as _ from 'lodash';
import { ImageServiceService } from '../image-service.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})

export class UploadImageComponent {
  article: Article;
  imageError: any;
  isImageSaved: boolean;
  cardImageBase64: string; 
  
  constructor(private imageService: ImageServiceService) {}

  fileChangeEvent(fileInput: any) {
    this.imageError = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
      // Size Filter Bytes
      const MAX_SIZE = 20971520;
      const ALLOWED_TYPES = ['image/png', 'image/jpeg'];

      if (fileInput.target.files[0].size > MAX_SIZE) {
        this.imageError =
          'Maximum size allowed is ' + MAX_SIZE / 1000 + 'Mb';
        return false;
      }
      if (!_.includes(ALLOWED_TYPES, fileInput.target.files[0].type)) {
        this.imageError = 'Only Images are allowed ( JPG | PNG )';
        return false;
      }
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
        const imgBase64Path = e.target.result;
        this.cardImageBase64 = imgBase64Path;
        this.isImageSaved = true;

        this.article.image_media_type = fileInput.target.files[0].type;
        const head = this.article.image_media_type.length + 13;
        this.article.image_data = e.target.result.substring(head, e.target.result.length);

        this.imageService.setImageData(
          e.target.result.substring(head, e.target.result.length),
          fileInput.target.files[0].type
        );

      };
        
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
    return true;
  }
}
