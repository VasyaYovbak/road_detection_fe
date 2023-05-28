import {Component} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

const apiUrl = 'http://127.0.0.1:5000'

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
  selectedImage: File | null = null;
  returnedImageUrl: string | null = null;

  selectedVideo: File | null = null
  returnedVideoUrl: string | null = null;

  requestType: 'video' | 'image' | null = null;

  loading  = false;


  constructor(private http: HttpClient) {
  }

  uploadImage() {
    if (!this.selectedImage) {
      console.log('No file selected.');
      return;
    }

    this.loading = true;

    const uploadData = new FormData();
    uploadData.append('image', this.selectedImage, this.selectedImage.name);

    this.http.post(apiUrl + '/api/upload-image', uploadData, {responseType: 'blob'})
      .subscribe({
        next: (response) => {
          this.createImageFromBlob(response);
          this.requestType = "image";
          console.log('Image uploaded successfully.', response);
          this.loading = false;
        },
        error: (error: HttpErrorResponse) => {
          console.error('Error uploading image.', error);
        }
      });
  }

  uploadVideo() {
    if (!this.selectedVideo) {
      console.log('No file selected.');
      return;
    }

    this.loading = true;

    const uploadData = new FormData();
    uploadData.append('video', this.selectedVideo, this.selectedVideo.name);

    this.http.post(apiUrl + '/api/upload-video', uploadData, {responseType: 'blob'})
      .subscribe((response: Blob) => {
        this.returnedVideoUrl = URL.createObjectURL(response);
        this.requestType = "video";
        this.loading = false;
      });
  }


  createImageFromBlob(image: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.returnedImageUrl = reader.result as string;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }
}
