import {Component, OnInit, Renderer2} from '@angular/core';
import {Item, ITEMS} from '../mock-item';
import {SBL} from '../mock-sbl';
import {AccountService} from '../service/account-service';
import {Account} from '../mock-account';
import {CreateItemComponent} from './create-item/create-item.component';
import {BsModalRef, BsModalService, ModalOptions} from 'ngx-bootstrap';
import {EditItemComponent} from './edit-item/edit-item.component';
import {faChevronLeft, faChevronRight, faHome} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faHome = faHome;
  dialogConfig: ModalOptions = {};
  dialogRef: BsModalRef;
  account: Account;
  // items = JSON.parse(JSON.stringify(ITEMS));
  items = ITEMS;
  sbl = SBL;
  sprintId = 1;
  constructor(private render: Renderer2, private accountService: AccountService, private modalService: BsModalService) { }

  ngOnInit() {
    this.render.setStyle(document.body, 'background-color', '#ecf0f1');
    // console.log(this.items[0]['title']);
    this.accountService.currentMessage.subscribe(message => this.account = message);
    this.linkData(this.sbl, this.items, 'items', 'sprintId');
  }

  previous() {
    this.sprintId = this.sprintId > 1 ? this.sprintId - 1 : 1;
  }

  next() {
    this.sprintId = this.sprintId < this.sprintLength(this.sprintId) ? this.sprintId + 1 : this.sprintLength(this.sprintId);
  }

  createItem() {
    this.dialogConfig.initialState = {
      // items: this.items,
      // sbl: this.sbl,
    };
    this.dialogRef = this.modalService.show(CreateItemComponent, this.dialogConfig);
  }

  edit(item: Item, option: number) {
    this.dialogConfig.initialState = {
      item: JSON.parse(JSON.stringify(item)),
      option: option
    };
    this.dialogRef = this.modalService.show(EditItemComponent, this.dialogConfig);
  }

  deleteItem(item: Item) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].itemId === item.itemId) {
        this.items.splice(i, 1);
        break;
      }
    }
    this.linkData(this.sbl, this.items, 'items', 'sprintId');
  }

  sprintQuantity(sprintNo): number {
    let previousId = 1;
    let quantity = 1;
    this.items.forEach(item => {
      if (item.sprintId !== previousId) {
        quantity++;
        previousId = item.sprintId;
      }
    });
    return quantity;
  }
  sprintLength(sprintId): number {
    return this.sbl[sprintId - 1].items.length;
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
