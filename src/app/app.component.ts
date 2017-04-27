import { Component, EventEmitter, OnInit } from '@angular/core';
import { MemesService } from './memes.service';
import { Meme } from './meme';
import { Collection } from './collection';
import { Observable } from 'rxjs/Observable';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CreateComponent } from './modals/create/create.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  available: Meme[];
  collection: Collection[];
  loaded: boolean;
  deleting: boolean;
  creating: boolean;
  error: string;
  onCreate: EventEmitter<Collection> = new EventEmitter();

  constructor(private ms: MemesService, private _modal: NgbModal) { }

  ngOnInit() {
    Observable.forkJoin(
      this.ms.available(),
      this.ms.collection()
    ).subscribe(
      v => {
        this.available = v[0];
        this.collection = v[1];
        this.loaded = true;
      });

    this.onCreate.subscribe(
      c => {
        this.collection.push(c);
      }
    );
  }


  public createModal(m: Meme) {
    const modalRef = this._modal.open(CreateComponent);
    modalRef.componentInstance.meme = m;
    modalRef.componentInstance.event = this.onCreate;
  }

  public delete(c: Collection) {
    this.ms.delete(c.id).subscribe(() => {
      const index = this.collection.findIndex(col => c.id === col.id);
      this.collection.splice(index, 1);
    });
  }
}
