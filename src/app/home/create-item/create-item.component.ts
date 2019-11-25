import { Component, OnInit } from '@angular/core';
import {Item, ITEMS} from '../../mock-item';
import {BsDatepickerConfig, BsModalRef} from 'ngx-bootstrap';
import {SBL} from '../../mock-sbl';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html'
})
export class CreateItemComponent implements OnInit {

  items = ITEMS;
  sbl = SBL;
  // newItem: Item = {
  //   itemId: '',
  //   sprintId: 0,
  //   userId: '',
  //   priority: '',
  //   status: '',
  //   title: '',
  //   content: '',
  //   note: '',
  //   startTime: new Date(),
  //   endTime: Date.now()
  // };
  latestItemId: number;
  selectedPriority = 'low';
  selectedStatus = 'New';
  bsInlineValue = new Date();
  bsConfig: Partial<BsDatepickerConfig>;
  priorityArr = {
    'low': 3,
    'normal': 2,
    'high': 1,
    'urgent': 0
  };
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.bsConfig = Object.assign({}, { containerClass: 'theme-blue' });
  }

  save(sprintId: string, userId: string, title: string, content: string, startTime: string) {
    this.latestItemId = parseInt(this.items[this.items.length - 1].itemId, 10) + 1;
    const priority = this.selectedPriority;
    const status = this.selectedStatus;
    const newItem = JSON.parse(JSON.stringify( {
      itemId: this.latestItemId.toString(),
      sprintId: parseInt(sprintId, 10),
      userId: userId,
      priority: priority,
      status: status,
      title: title,
      content: content,
      note: '',
      startTime: new Date(startTime),
      endTime: Date.now()
    }));
    let flag = false;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].sprintId === parseInt(sprintId, 10)) {
        this.items.splice(i, 0, newItem);
        flag = true;
        break;
      }
    }
    if (!flag) {
      this.items.push(JSON.parse(JSON.stringify(newItem)));
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
