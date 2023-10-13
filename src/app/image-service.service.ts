import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {
  private imageData: string;
  private mediaType: string;

  constructor() {}
  setImageData(imageData: string, mediaType: string) {
    this.imageData = imageData;
    this.mediaType = mediaType;
  }

  getImageData(): { imageData: string, mediaType: string } {
    return { imageData: this.imageData, mediaType: this.mediaType };
  }
}
