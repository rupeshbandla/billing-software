import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {
  inventoryForm: any;

  constructor(private formBuilder: FormBuilder, private router: Router, public angularFirestore: AngularFirestore, public angularFireStorage: AngularFireStorage,) {
    this.inventoryForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
      purchase_price: new FormControl('', Validators.required),
      sell_price: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  addInventory() {
    this.angularFirestore.firestore.collection("inventories").add(this.inventoryForm.value)
      .then(() => {
        console.log("inventory added");
      })
      .catch((error) => {
        console.error("Error writing inventory: ", error);
      });
  }

}
