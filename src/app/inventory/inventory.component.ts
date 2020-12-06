import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  inventory_data = [];
  constructor(public angularFirestore: AngularFirestore, public router: Router) { }

  ngOnInit(): void {
    this.angularFirestore.firestore.collection('inventories').get().then(docs => {
      docs.forEach(doc => {
        this.inventory_data.push(doc)
        console.log(this.inventory_data);
      })
    })
  }

  edit(doc){
    console.log(doc);
    localStorage.setItem('Inventory',JSON.stringify(doc.data()))
    this.router.navigate(['/update-inventory',doc.id])
  }

}
