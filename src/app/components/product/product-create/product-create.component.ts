import { Product } from './../../products/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product ={
    name:'',
    price:0,
  }

  constructor(private productService :ProductService,private router:Router) { }

  ngOnInit(): void {

  }

  createProduct():void { 

    this.productService.create(this.product).subscribe(() =>{
      this.productService.showMessage('Operação Executada com Sucesso, Produto Criado !!!');
      this.router.navigate(['/products'])
    })
  

  }

  cancel(): void{

    this.router.navigate(['/products'])
    
  }



}
