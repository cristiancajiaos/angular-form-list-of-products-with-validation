import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  products: string[];

  productForm: FormGroup;

  product: FormControl;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.product = new FormControl('', [Validators.required]);

    this.productForm = this.formBuilder.group({
      product: this.product
    });

    this.products = [];
  }

  submit(): void {
    this.products.push(this.productForm.value.product);
    this.productForm.reset();
  }

  deleteProduct(i: number): void {
    this.products.splice(i, 1);
  }
}
