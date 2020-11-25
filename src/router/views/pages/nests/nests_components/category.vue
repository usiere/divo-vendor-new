<template>

<div class="container">
<!-- Modal to edit the Category -->
<b-modal id="edit-item" title="Edit Store" hide-footer>
  <!-- changed the form content  -->
<b-form v-on:submit="update">
  <b-form-group id="input-group-2" label="Name" label-for="input-2">
        <b-form-input
          id="input-2"
          placeholder="Enter name"
          :value="e_name"
          value-field="item"
        ></b-form-input>
      </b-form-group>

  <b-form-group id="input-group-2" label="Field" label-for="input-2">
        <b-form-input
          id="input-2"
          placeholder="Enter name"
           :value="e_field"

        ></b-form-input>
      </b-form-group>

        <b-form-group id="input-group-2" label="Description" label-for="input-2">
        <b-form-input
          id="input-2"
          placeholder="Enter name"
          :value="e_desc"
        ></b-form-input>
      </b-form-group>

        <b-form-group id="input-group-2" label="Address" label-for="input-2">
        <b-form-input
          id="input-2"
          placeholder="Enter name"
          :value="e_address"
        ></b-form-input>
      </b-form-group>

        <b-form-group id="input-group-2" label="Phone Number" label-for="input-2">
        <b-form-input
          id="input-2"
          placeholder="Enter name"
          :value="e_phone"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Save changes</b-button>
      <b-button @click="delCat()" variant="danger">Delete</b-button>
    </b-form>


  </b-modal>

 <b-modal id="modal-1" title="BootstrapVue">
    <b-form-input  value="usiere.divo.ng/marys-shoes"> </b-form-input>
    <input type="text" id="myText" value="new likn">
  </b-modal>

 


<section class="cards" v-if="allCats && allCats.length >0">
  <div v-for="(cat, index) in allCats" v-bind:key="cat._id">
     <div class="btns_grid">  <button class="btn_edit" v-b-modal.edit-item @click="get_cat_data(cat._id), setId(cat._id)"><vue-fontawesome  class="btn_cat" icon="pencil" size="1" color="black"></vue-fontawesome></button><button class="btn_edit" v-b-modal.modal-1><vue-fontawesome class="btn_cat" icon="share" size="1" color="black"></vue-fontawesome></button></div>
<div class="card card--1" v-b-modal.modal-1 >
  <div class="card__info-hover">
      <div class="card__clock-info">
        <i class="fas fa-box"></i>
          ..
      </div>
    
  </div>
  
  <!-- <div class="card__img"></div> -->
  <a href="#" class="card_link">
     <div class="card__img--hover"></div>
   </a>
  <router-link :to="{ name: 'items', params: {cat_picked: cat.name,  id: cat._id } }" class="card__info">
    <h3 class="card__title"><vue-fontawesome icon="shopping-basket" size="3" color="lightgray"></vue-fontawesome> {{cat.name}}  </h3> 
    </router-link>
      
  </div>
  


  </div>
  </section>

  <b-modal id="delete_modal" centered hide-footer>
    <template v-slot:modal-title>
Delete Category  
    </template>
    <div class="d-block text-center">
      <h3>Are you sure you want to remove </h3>
        <b-button class="mt-3" block @click="$bvModal.hide('delete_modal'), delCat()">test</b-button>
    </div>
    <b-button class="mt-3" block @click="$bvModal.hide('delete_modal'), delCat()">test</b-button>
    <b-button class="mt-3" block @click="$bvModal.hide('delete_modal'), Cat()">Yes</b-button>  <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">No</b-button>
  </b-modal>

  <b-modal id="del_modal" centered hide-footer>
    <template v-slot:modal-title>
Delete Category  
    </template>
    <div class="d-block text-center">
      <h3>Are you sure you want to remove </h3>
    </div>
    <b-button class="mt-3" block @click="$bvModal.hide('del_modal'), delCat()">test</b-button>
    <b-button class="mt-3" block @click="$bvModal.hide('delete_modal'), Cat()">Yes</b-button>  <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">No</b-button>
  </b-modal>
</div>
</template>

<style scoped>
.container{

}

/* Card styling */
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700');
@import url('https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i');

*{
  box-sizing: border-box;
}

body, html {
   font-family: 'Roboto Slab', serif;
    margin: 0;
  width: 100%;
height: 100%;
    padding: 0;
}

body {
  background-color: #D2DBDD;
  display: flex;
  display: -webkit-flex;
  -webkit-justify-content: center;
  -webkit-align-items: center;
  justify-content: center;
  align-items: center;
}

.cards {
    width: 100%;
    display: grid;
    grid-template-columns: 40% 40%;
    justify-content: center;
    -webkit-justify-content: center;
    max-width: 820px;
}



.card__like {
    width: 18px;
}

.card__clock {
    width: 15px;
  vertical-align: middle;
    fill: #AD7D52;
}
.card__time {
    font-size: 12px;
    color: #AD7D52;
    vertical-align: middle;
    margin-left: 5px;
}

.card__clock-info {
    float: right;
}

.card__img {
  visibility: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 235px;
  border-top-left-radius: 12px;
border-top-right-radius: 12px;
  
}


.card__img_sub {
  visibility: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 150px;
  border-top-left-radius: 12px;
border-top-right-radius: 12px;
  
}

.card__info-hover {
    position: absolute;
    padding: 16px;
  width: 100%;
  opacity: 0;
  top: 0;
}

.card__img--hover {
  transition: 0.2s all ease-out;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
  position: absolute;
    height: 235px;
  border-top-left-radius: 12px;
border-top-right-radius: 12px;
top: 0;
  
}
.card {
  margin-right: 25px;
  transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);
  background-color: #fff;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0,0.1);
  outline: hidden;
}
.card:hover {
  box-shadow: 0px 30px 18px -8px rgba(0, 0, 0,0.1);
    transform: scale(1.10, 1.10);
}

.card__info {
z-index: 2;
  background-color: #fff;
  border-bottom-left-radius: 12px;
border-bottom-right-radius: 12px;
   padding: 16px 24px 24px 24px;
}

.card__category {
    font-family: 'Raleway', sans-serif;
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 2px;
    font-weight: 500;
  color: #868686;
}

.card__title {
    margin-top: 5px;
    margin-bottom: 10px;
    font-family: 'Roboto Slab', serif;
}

.card__by {
    font-size: 12px;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
}

.card__author {
    font-weight: 600;
    text-decoration: none;
    color: #AD7D52;
}

.card:hover .card__img--hover {
    height: 100%;
    opacity: 0.3;
}

.card:hover .card__info {
    background-color: transparent;
    position: relative;
}

.card:hover .card__info-hover {
    opacity: 1;
}

.btn_cat{
  margin-left: 30px;
  margin-bottom: 8px;
  margin-top: 8px
}

.btns_grid{
  margin-left: 100px;
  width: 110px;
  background-color:white;
  border-top-left-radius: 20%;
   border-top-right-radius: 20%;
}

.btn_edit{
  background-color: white;
  border: #fff;
  width: 18px;
}
/* Responsive columns - one column layout (vertical) on small screens */
@media screen and (max-width: 600px) {
.cards {
 
    display: grid;
    grid-template-columns: 50% 50%;
 
}

.card{
  margin-right: 12px;
}

.card__img {
    height: 200px;

  
}
}

/* Css for the edit form */

.registration-form form{
    background-color: #fff;
    max-width: 600px;
    margin: auto;
    padding: 50px 70px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
}

.registration-form .form-icon{
	text-align: center;
    border-radius: 50%;
    color: green;
    margin: auto;
    margin-bottom: 50px;
    line-height: 100px;
}

.registration-form .item{
	border-radius: 20px;
    margin-bottom: 25px;
    padding: 10px 20px;
}

.registration-form .create-account{
    border-radius: 30px;
    padding: 10px 20px;
    font-size: 18px;
    font-weight: bold;
    background-color: #5791ff;
    border: none;
    color: white;
    margin-top: 20px;
}

.registration-form .social-media{
    max-width: 600px;
    background-color: #fff;
    margin: auto;
    padding: 35px 0;
    text-align: center;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    color: #9fadca;
    border-top: 1px solid #dee9ff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
}

.registration-form .social-icons{
    margin-top: 30px;
    margin-bottom: 16px;
}

.registration-form .social-icons a{
    font-size: 23px;
    margin: 0 3px;
    color: #5691ff;
    border: 1px solid;
    border-radius: 50%;
    width: 45px;
    display: inline-block;
    height: 45px;
    text-align: center;
    background-color: #fff;
    line-height: 45px;
}

.registration-form .social-icons a:hover{
    text-decoration: none;
    opacity: 0.6;
}


</style>


<script>
import { mounted } from 'vue2-dropzone'
import {mapGetters, mapActions} from 'vuex'
import axios from 'axios'

export default {
  name: "cats-comp",
 data() {
    return {
                 cats: [],
                 cat_id: null,
                 e_name: "name",
                 e_field: "field",
                 e_desc: "description",
                 e_address: "address",
                 e_phone: "phone",
                 Id: null
  }},


  async mounted(){

  this.fetchCats()

  console.log(this.allCats)

      const accessToken =  await this.$auth.getTokenSilently();
                
// getting necessities from the database              
            await axios({
                method: 'get',
                url:`/api/cat`,
                headers: {
                Authorization: `Bearer ${accessToken}`
                     },
              
}).then( res => {
     this.cats = res.data.cats;
      
          console.log(this.cats);
          	console.log(this.$auth.user.email);
})
	.catch( e => {
			console.log(e);
    }) ;
  },


  methods: {
  ...mapActions("cats",[
    'fetchCats', 'deleteCat', 'updateCat'
  ]),
// retrieve id of category
  getIdCat: async function(id) {
          this.cat_id = id
          console.log(this.cat_id)
                  
            },


  // Delete category from database
delCat:  async function(){
      this.deleteCat(this.Id)


} ,

get_cat_data(id){
  console.log('just checking')
  const cat = this.oneCat(id)
  console.log(cat)
  this.ej = cat.eneir

  this.e_name = cat.name,
  this.e_field = cat.field,
  this.e_desc = cat.desc

},

// setting the ID of the category
setId(id){
 this.Id = id 
 console.log('this is the ID' + this.Id)
},


    update(e) {
      this.e_name = 'usi man'
          e.preventDefault();
   const cat = {
         _id : this.Id,
        name : this.e_name,
        field: this.e_field,
        desc: this.e_desc,
        addy: this.e_address,
        phone: this.e_phone,
        user: this.user
        }

        console.log(cat)
    this.updateCat(cat)


    },




},
  

  computed: mapGetters("cats",['allCats', 'oneCat'])

}
</script>

