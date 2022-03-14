import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent implements OnInit {
  @Input() albumURL: any;
  @Input() albumTitle: any;
  @Input() albumID: any;
  @Input() albumRealID: any;

  constructor( private modalService: NgbModal ) { }

  ngOnInit(): void {
  }


}
