import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DialogRef} from "@angular/cdk/dialog";
import {MatDialog} from "@angular/material/dialog";
import {FunnyDialogComponent} from "./funny-dialog/funny-dialog.component";

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss']
})
export class IntroPageComponent implements OnInit {
  @ViewChild('video') video!: ElementRef;

  @ViewChild('dieSound') dieSound!: ElementRef;

  @ViewChild('mainSound') mainSound!: ElementRef;

  isVideoEnded = false;

  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {
    const dialogRef = this.dialog.open(FunnyDialogComponent, {restoreFocus: false});

    dialogRef.afterClosed().subscribe(() => {
      this.startMovie();
    });
  }

  startMovie(): void {
    this.video.nativeElement.muted = true;
    this.video.nativeElement.play();
    this.mainSound.nativeElement.play();


    setTimeout(() => {
      this.dieSound.nativeElement.playsinline = true;
      this.dieSound.nativeElement.play();
    }, 5500)
    setTimeout(() => {
      this.isVideoEnded = true;
    }, 7000)
  }

  closeTab(){
    window.location.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }


}
