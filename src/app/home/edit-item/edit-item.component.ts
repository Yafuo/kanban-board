import {Component, Input, OnInit} from '@angular/core';
import {Item, ITEMS} from '../../mock-item';
import {BsDatepickerConfig, BsModalRef} from 'ngx-bootstrap';
import {SBL} from '../../mock-sbl';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html'
})
export class EditItemComponent implements OnInit {

  @Input() item: Item;
  @Input() option: number;
  items = ITEMS;
  sbl = SBL;
  priorityArr = {
    low: 3,
    normal: 2,
    high: 1,
    urgent: 0
  };
  bsConfig: Partial<BsDatepickerConfig>;
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.bsConfig = Object.assign({}, { containerClass: 'theme-blue' });
  }

  save(sprintId: string, userId: string, priority: string, status: string, title: string, note: string, content: string, startTime: string) {
    this.item = JSON.parse(JSON.stringify({
      itemId: this.item.itemId,
      sprintId: sprintId ? parseInt(sprintId, 10) : this.item.sprintId,
      userId: userId ? userId : this.item.userId,
      priority: this.item.priority,
      status: this.item.status,
      title: title ? title : this.item.title,
      content: content ? content : this.item.content,
      note: note ? note : this.item.note,
      startTime: startTime ? new Date(startTime) : this.item.startTime,
      endTime: Date.now()
    }));
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].itemId === this.item.itemId) {
        this.items[i] = JSON.parse(JSON.stringify(this.item));
        break;
      }
    }
    for (let i = 0; i < this.items.length - 1; i++) {
      for (let j = i + 1; j < this.items.length; j++) {
        if (this.items[i].sprintId === this.items[j].sprintId && this.priorityArr[this.items[i].priority] > this.priorityArr[this.items[j].priority]) {
          const temp = this.items[i];
          this.items[i] = this.items[j];
          this.items[j] = temp;
        }
      }
    }
    this.linkData(this.sbl, this.items, 'items', 'sprintId');
    this.bsModalRef.hide();
  }

  linkData(emptyGlasses: any, fullGlasses: any, water: string, ruleElement: string) {
    emptyGlasses.forEach(eGlass => {
      eGlass.items = [];
      fullGlasses.forEach(fGlass => {
        if (eGlass[ruleElement] === fGlass[ruleElement]) {
          eGlass[water].push(fGlass);
        }
      });
    });
  }

}
