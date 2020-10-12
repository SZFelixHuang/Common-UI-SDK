import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Dropzone from 'dropzone';

@Component({
  selector: 'cui-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.less']
})
export class FileComponent implements OnInit {
  @ViewChild('cuiFileContainer', { static: true })
  cuiFileContainer: ElementRef;

  @ViewChild('previewContainer', { static: true })
  previewContainer: ElementRef;

  @ViewChild('cuiFile', { static: true })
  cuiFile: ElementRef;

  @ViewChild('totalProgress', { static: true })
  totalProgress: ElementRef;

  @ViewChild('dropzoneItemTemplate', { static: true })
  dropzoneItemTemplate: ElementRef;

  cuiDropzone: Dropzone;

  constructor() {}

  ngOnInit() {
    this.cuiDropzone = new Dropzone(this.cuiFileContainer.nativeElement, {
      url: '/Users/felixhuang/Downloads',
      previewsContainer: this.previewContainer.nativeElement,
      previewTemplate: this.dropzoneItemTemplate.nativeElement.innerHTML,
      autoQueue: false,
      clickable: this.cuiFile.nativeElement
    });
    this.cuiDropzone.on('addedfile', file => {
      const statusElement = file.previewElement.querySelector(
        '[data-dz-status]'
      ) as HTMLDivElement;
      statusElement.innerText = 'ready';
      const uploadBtn = file.previewElement.querySelector('button.uploadBtn');
      const cancelBtn = file.previewElement.querySelector('button.cancelBtn');
      const removeBtn = file.previewElement.querySelector('button.removeBtn');
      $(uploadBtn).click(() => {
        this.cuiDropzone.enqueueFiles([file]);
      });

      $(cancelBtn).click(() => {
        this.cuiDropzone.cancelUpload(file);
      });
      $(removeBtn).click(() => {
        this.cuiDropzone.cancelUpload(file);
        this.cuiDropzone.removeFile(file);
      });
    });
    this.cuiDropzone.on('sending', file => {
      const statusElement = file.previewElement.querySelector(
        '[data-dz-status]'
      ) as HTMLDivElement;
      statusElement.innerText = 'uploading';
    });
    this.cuiDropzone.on('canceled', file => {
      const statusElement = file.previewElement.querySelector(
        '[data-dz-status]'
      ) as HTMLDivElement;
      statusElement.innerText = 'canceled';
    });
    this.cuiDropzone.on('success', file => {
      const statusElement = file.previewElement.querySelector(
        '[data-dz-status]'
      ) as HTMLDivElement;
      statusElement.innerText = 'uploaded';
    });
    this.cuiDropzone.on('error', file => {
      const statusElement = file.previewElement.querySelector(
        '[data-dz-status]'
      ) as HTMLDivElement;
      statusElement.innerText = 'Fail';
    });
    this.cuiDropzone.on('uploadprogress', (file, progress, bytesSent) => {
      const progressElement = file.previewElement.querySelector(
        '[data-dz-uploadprogress]'
      ) as HTMLDivElement;
      progressElement.style.width = progress + '%';
      progressElement.querySelector('.progress-text').textContent =
        progress + '%';
    });
    this.cuiDropzone.on('totaluploadprogress', progress => {
      this.totalProgress.nativeElement.style.width = progress + '%';
    });
  }

  uploadAllDocs(event) {
    this.cuiDropzone.enqueueFiles(
      this.cuiDropzone.getFilesWithStatus(Dropzone.ADDED)
    );
  }

  cancelAllDocs(event) {
    this.cuiDropzone.getUploadingFiles().forEach(file => {
      this.cuiDropzone.cancelUpload(file);
    });
  }

  removeAllDocs(event) {
    this.cuiDropzone.removeAllFiles(true);
  }
}
