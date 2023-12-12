<template>
  <!-- William -->
  <div class="container" id="head">
    <h1>Welcome!</h1>
    <h3>Login to continue</h3>
  </div> 
    <div class="container">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="">Email</label>
          <input v-model="formData.email" type="email"  class="form-control" id="email" required>
        </div>
        <div class="form-group">
          <label for="">Password</label>
          <input v-model="formData.address" type="text" class="form-control" id="password" required>
        </div>
        <button type="submit" class="btn btn-info">LOGIN</button>
      </form>
      <div v-if="orderSubmitted">
        <h2>User login details Submitted</h2>
            <p><b>Email : </b>{{ formData.email }}</p>
            <p><b>Password : </b>{{ formData.password }}</p>      
      </div>
  </div>

</template>

<script>
export default {
  name: 'LoginApp',
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
      orderSubmitted: false,
    };
  },
  methods: {
    submitForm() {
      this.orderSubmitted = true;
    },
    resetForm() {
      this.formData = {
        email: '',
        password: '',
      };
      this.orderSubmitted = false;
    },

  },
};
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  font-size: 15px;
  margin-bottom: 10px;
}

.container{
  background-color: #F8F8F8;
  padding: 20px;
  margin-top: 20px;
  max-width: 664px;
  text-align: start;

}
#head {
  margin-top: 50px;
  background-color: #F8F8F8;
  text-align: center;
}
</style>
