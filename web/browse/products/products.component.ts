import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'products',
  template: `
    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
      <div class="fluid-container">
        <div class="row">
          <div class="col">
            <div class="card">
              <img class="card-img-top" data-src="holder.js/300x200" src="..." alt="Card image cap" rel="product-img">
              <div class="card-body">
                <a href="#" data-toggle="modal" data-target="#exampleModalCenter"><h5 class="card-title" rel="product-title">Card
                  title</h5></a>
                <h6 class="card-subtitle" rel="product-price"><p class="text-right">Retail price <s>$100.00</s></p></h6>
                <h6 class="card-subtitle" rel="product-discount"><p class="text-right">Discount price $80.00</p></h6>
                <p class="card-text" rel="product-description">Some quick example text to build on the card title and make up the bulk
                  of the card's content.</p>
                <a href="#" class="btn btn-primary" rel="product-addtocart">Add to cart <i class="fa fa-cart-plus"
                                                                                           aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img class="card-img-top" data-src="holder.js/300x200" src="..." alt="Card image cap" rel="product-img">
              <div class="card-body">
                <a href="#" data-toggle="modal" data-target="#exampleModalCenter"><h5 class="card-title" rel="product-title">Card
                  title</h5></a>
                <h6 class="card-subtitle" rel="product-price"><p class="text-right">Retail price <s>$100.00</s></p></h6>
                <h6 class="card-subtitle" rel="product-discount"><p class="text-right">Discount price $80.00</p></h6>
                <p class="card-text" rel="product-description">Some quick example text to build on the card title and make up the bulk
                  of the card's content.</p>
                <a href="#" class="btn btn-primary" rel="product-addtocart">Add to cart <i class="fa fa-cart-plus"
                                                                                           aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>  `,
  styles: [`
    head, body, .app-content {
      height: 100vh;
      width: 100vw;
    }
  `]

})

export class ProductsComponent {
}
