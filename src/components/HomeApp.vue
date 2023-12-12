<template>
    <!-- Sora -->
    <div class="container">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1" ></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2" ></li>
  </ol>
  <div class="carousel-inner" role="listbox">
    <div class="carousel-item active">
      <img class="d-block w-100 img-fluid" src="~@/assets/pic-1.jpg" data-src="holder.js/900x400?theme=social" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="~@/assets/pic-2.jpg" data-src="holder.js/900x400?theme=social" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="~@/assets/pic-3.jpg" data-src="holder.js/900x400?theme=social" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
<div class="mt-5">
  <h1>Our Product</h1>
</div>
<div class="container mt-4">
  <div class="row">
    <div class="col-4">
      <div class="card">
  <img class="card-img-top rounded-lg" src="~@/assets/product-1.jpg" alt="Card image cap" height="500px">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">
      Some quick example text to build on the card title
      and make up the bulk of the card's content.
    </p>
    <a href="#!" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div class="col-4">
      <div class="card">
  <img class="card-img-top rounded-lg" src="~@/assets/product-2.jpg" alt="Card image cap" height="500px">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">
      Some quick example text to build on the card title
      and make up the bulk of the card's content.
    </p>
    <a href="#!" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

    </div>
    <div class="col-4">
      <div class="card">
  <img class="card-img-top rounded-lg" src="~@/assets/product-3.jpg" alt="Card image cap" height="500px">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">
      Some quick example text to build on the card title
      and make up the bulk of the card's content.
    </p>
    <a href="#!" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'HomeApp'
}
</script>

<style>

</style>