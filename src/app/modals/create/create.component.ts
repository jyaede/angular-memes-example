import { Component, EventEmitter, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Meme } from '../../meme';
import { MemesService } from '../../memes.service';
import { Collection } from '../../collection';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  @Input() meme: Meme;
  @Input() event: EventEmitter<Collection>;

  topText: string;
  bottomText: string;
  error: string;

  constructor(private ms: MemesService, public modal: NgbActiveModal) { }

  ngOnInit() {
  }

  create() {
    if (!this.topText && !this.bottomText) {
      return;
    }
    this.error = null;
    const data = {
      id: this.meme.id,
      text0: this.topText,
      text1: this.bottomText
    };
    this.ms.create(data).subscribe(
      item => {
        this.event.emit(item);
        this.modal.close();
      },
      resp => {
        this.error = resp.json().error;
      }
    );
  }

}
