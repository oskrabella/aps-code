import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
  title = 'Album List';
  albumItems: any;

  albumURL: any;
  albumTitle: any;
  albumID: any;
  albumRealID: any;

  modalReference: NgbModalRef;

  constructor(
    private http: HttpClient,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.http.get<JSON>('https://jsonplaceholder.typicode.com/photos')
      .subscribe(Response => {

        if (Response) {
          this.albumItems = Response;
        }
      });
  }

  openFlyin(content: any, albumItem: any) {
    document.body.classList.add('modal-open');
    this.modalReference = this.modalService.open(content, { windowClass: 'modal-holder'});

    this.albumURL = albumItem.url;
    this.albumTitle = albumItem.title;
    this.albumID = albumItem.albumId;
    this.albumRealID = albumItem.id;
  }

}
