<template>
  <!-- Joshua -->
    <div class="container" id="head">
      <h1>Hi, how can we help?</h1>
      <p>Have a question/problem? Please write here, and we will reply back soonest.</p>
    </div>
    <div class = 'container'>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name"><h4>Name:</h4></label>
          <input v-model="formData.name" type="text" class="form-control" id="name" required />
        </div>
        <div class="form-group">
          <label for="email"><h4>Email:</h4></label>
          <input v-model="formData.email" type="email" class="form-control"  id="email" required />
        </div>
        <div class="form-group">
          <label for="message"><h4>Message:</h4></label>
          <textarea v-model="formData.message" class="form-control" id="message" required></textarea>
        </div>

        <button type="submit" class="btn btn-outline-primary">Submit</button>
      </form>
  
      <div v-if="formSubmitted" class="alert alert-info" role="alert">
        <h1>Your Contact information has been recorded</h1><br>
        <h2>We will contact you shortly, Have a nice day!</h2>
      </div>
    </div>
 
  </template>
  
  <script>
  export default {
    name: 'ContactUs',
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: '',
        },
        formSubmitted: false,
      };
    },
    methods: {
      submitForm() {
        console.log('Form submitted:', this.formData);
        this.formSubmitted = true;
        this.formData = {
          name: '',
          email: '',
          message: '',
        };
      },
    },
  };
  </script>
  
  
<style scoped>
#head {
  margin-top: 50px;
  background-color: #F8F8F8;
}
.container{
  background-color: #F8F8F8;
  padding: 20px;
  margin-top: 20px;
  max-width: 664px;
  text-align: start;

}
</style>
  