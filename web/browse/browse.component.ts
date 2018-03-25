import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'browse',
  template: `
    <div>
      <header></header>
      <div class="row">
        <sidenav></sidenav>
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
        </main>
      </div>
      <footer-bar></footer-bar>
      <!-- Modal -->
      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
           aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="card">
                <img class="card-img-top" data-src="holder.js/300x200" src="..." alt="Card image cap" rel="product-img">
                <div class="card-body">
                  <h5 class="card-title" rel="product-title">Card title</h5>
                  <h6 class="card-subtitle" rel="product-price"><p class="text-right">Retail price <s>$100.00</s></p></h6>
                  <h6 class="card-subtitle" rel="product-discount"><p class="text-right">Discount price $80.00</p></h6>
                  <p class="card-text" rel="product-description">Some quick example text to build on the card title and make up the bulk
                    of the card's content.</p>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    head, body, .app-content {
      height: 100vh;
      width: 100vw;
    }
  `]
})

export class BrowseComponent {
}
