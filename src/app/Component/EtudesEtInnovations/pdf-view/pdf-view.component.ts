import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-pdf-view',
  templateUrl: './pdf-view.component.html',
  styleUrls: ['./pdf-view.component.scss']
})
export class PdfViewComponent implements OnInit {
  src: any ;
  constructor(
    public dialogRef: MatDialogRef<PdfViewComponent> ,
    private sanitizer: DomSanitizer ,
  ) {
    this.sanitizer = sanitizer ;
  }
  getPdf(programme: any ){
    const byteArray = new Uint8Array(atob(programme).split('').map(char => char.charCodeAt(0)));
    const blob = new Blob([byteArray], {type: 'application/pdf'});
    if (blob){
      const url = window.URL.createObjectURL(blob);
      if (url !== null){
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
      }
    }
    return null;
  }
  ngOnInit(): void {
    this.src = this.dialogRef.id ;
  }

}
