import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-inventory',
  templateUrl: './update-inventory.component.html',
  styleUrls: ['./update-inventory.component.css']
})
export class UpdateInventoryComponent implements OnInit {
  inventoryForm :any;
  id: any;
  updateinventoryForm: FormGroup;

  constructor(public angularFirestore: AngularFirestore, private route: ActivatedRoute, public formBuilder: FormBuilder) {
    this.updateinventoryForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
      purchase_price: new FormControl('', Validators.required),
      sell_price: new FormControl('', Validators.required)
    });
    this.inventoryForm = JSON.parse(localStorage.getItem('Inventory'))
    console.log(this.inventoryForm);


  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.id = params.get('id')
    });
  }

  update() {
    this.angularFirestore.firestore.collection("inventories").doc(this.id).update(this.updateinventoryForm.value)
      .then(() => {
        console.log("updated inventory");
      })
      .catch((error) => {
        console.error("Error writing inventory: ", error);
      });
  }
}
