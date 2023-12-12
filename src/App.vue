<template>
  <nav class="navbar navbar-expand-lg bg-light m-3  d-inline-block">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img class="mr-3" src="./assets/logo.png" width="100px"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><router-link to = '/'>Home</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to = '/product'>Product</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to = '/contact'>Contact Us</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to = '/login'>Login</router-link></a>
        </li>
        </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

  <router-view></router-view>
  
  <div id="footer">
  <footer>Done by team 2 - Joshua, Razman, Sora and William.</footer>
  </div>
</template>

<script>


export default {
  name: 'App',
  
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#footer {
  background-color: #F8F8F8;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  padding-top: 20px;
}
</style>
