<template >
  <!-- RazmanR -->
  <div>

    <b>
      What Products we have in Store
    </b>

  </div>
  <table class="table table-hover">

    <thead>
      <th>id</th>
      <th>Product Name</th>
      <th>Product picture</th>
      <th>Price</th>
      <th>Description</th>
      <th>Category</th>
      <th>Stock available</th>
    </thead>

    <tbody>
      <tr v-for="(product, id) in list" :key="id">
        <td>{{ product.id }}</td>
        <td>{{ product.title }}</td>

        <td> <img img :src="product.image"
            class="img-fluid" alt="Thumbnail image" /> 
        </td>
        <td>RM {{ product.price }}</td>
        <div>
          <td class="text-break">{{ product.description }}</td>
        </div>

        <td>{{ product.category }}</td>
        <td>{{ product.rating.count }}</td>

        <!-- "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",  -->

      </tr>
    </tbody>

  </table>
</template>

<script>
import axios from "axios";

export default {
  name: 'ProductApp',

  data() {
    return {
      // initial state
      list: [],
      productsList: [
        {
          "id": 3,
          "title": "Mens Cotton Jacket",
          "price": 55.99
        },
        {
          "id": 3,
          "title": "Mens Cotton Jacket",
          "price": 55.99
        }

      ]
    }
  },

  async mounted() {
    let result = await axios.get("https://fakestoreapi.com/products/");
    console.log(result.data);

    return this.list = result.data;

  }
}
</script>

 

<style scoped>
/* <!-- Add "scoped" attribute to limit CSS to this component only --> */
h3 {
  margin: 40px 0 0;
}

table {
  display: d-block;
}

ul {
  list-style-type: none;
  padding: 0;
}

thead {
  background-color: grey;
}

a {
  color: #42b983;
}
</style>

 
