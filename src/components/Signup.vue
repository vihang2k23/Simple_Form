<template>
  <div class="container">
    <div class="title">Registration</div>
    <div class="content">
      <form @submit.prevent="validateBeforeSubmit">
        <div class="user-details">
          <div class="input-box">
            <span class="details">Full Name</span>
            <input
              name="Fullname"
              v-model.lazy="response.fullname"
              v-validate="'required'"
              :class="{ input: true, 'is-danger': errors.has('Fullname') }"
              type="text"
              placeholder="Enter Your FullName"
              
            />
            <span v-show="errors.has('Fullname')" class="help is-danger">{{
              errors.first("Fullname")
            }}</span>
          </div>
          <div class="input-box">
            <span class="details">Username</span>

            <input
              name="Username"
              v-model.lazy="response.username"
              v-validate="'required'"
              :class="{ input: true, 'is-danger': errors.has('Username') }"
              type="text"
              placeholder="Enter Your Username"
             
            />
            <span v-show="errors.has('Username')" class="help is-danger">{{
              errors.first("Username")
            }}</span>
          </div>
          <div class="input-box">
            <span class="details">Email</span>
            <input
              name="email"
              v-model="response.email"
              v-validate="'required|email'"
              :class="{ input: true, 'is-danger': errors.has('email') }"
              type="text"
              placeholder="Enter Your E-mail"
           
            />
            <span v-show="errors.has('email')" class="help is-danger">{{
              errors.first("email")
            }}</span>
          </div>

          <div class="input-box">
            <span class="details">Phone Number</span>
            <!-- <input type="text" placeholder="Enter your number" v-model.lazy="phone_number" > -->
            <input
              name="phone"
              v-model.lazy="response.phone_number"
              v-validate="'required|numeric'"
              :class="{ input: true, 'is-danger': errors.has('phone') }"
              type="text"
              placeholder="Enter your Phone-number"
             
            />
            <!-- <i v-show="errors.has('phone')" class="fa fa-warning"></i> -->
            <span v-show="errors.has('phone')" class="help is-danger">{{
              errors.first("phone")
            }}</span>
          </div>
          <div class="input-box">
            <span class="details">Password</span>
            <input
              name="password"
              type="password"
              v-validate="'required|min:6'"
              placeholder="Enter your password"
              v-model.lazy="response.password"
              
            />
            <span v-show="errors.has('password')" class="help is-danger">{{
              errors.first("password")
            }}</span>
          </div>
          <!-- <div class="input-box">
            <span class="details">Confirm Password</span>
            <input
            
              name="confirm_password"
              type="password"
              v-validate="'required|min:6'"
              placeholder="Confirm your password"
              v-model.lazy="response.confirm_password"
              data-vv-as="password"
            />
            <span
              v-show="errors.has('confirm_password')"
              class="help is-danger"
              >{{ errors.first("confirm_password") }}</span
            >
          </div> -->
          <div class="input-box">
            <span class="details">Choose a city:</span>

            <select
              name="city"
              id="cars"
              v-model="response.city"
              v-validate="'required'"
              
            >
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Gandhinagar">Gandhinagar</option>
              <option value="Surat">Surat</option>
              <option value="Mumbai">Mumbai</option>
            </select>

            <div>
              <span class="help is-danger" v-show="errors.has('city')">{{
                errors.first("city")
              }}</span>
            </div>
          </div>
        </div>

        <div class="check-details">
          <span for="cars">Hobbies : </span>
          <input
            type="checkbox"
            id="vehicle1"
            v-validate="'required'"
            name="hobby"
            value="Cricket"
            v-model="response.hobbies"
          />
          <span for="vehicle1"> Cricket</span><br />
          <input
            type="checkbox"
            id="vehicle2"
            v-validate="'required'"
            name="hobby"
            value="Chess"
            v-model="response.hobbies"
          />
          <span for="vehicle2">Chess</span><br />
          <input
            type="checkbox"
            id="vehicle3"
            v-validate="'required'"
            name="hobby"
            value="Football"
            v-model="response.hobbies"
          />
          <span for="vehicle3"> Football</span><br />
        </div>
        <div>
          <span class="help is-danger" v-show="errors.has('hobby')">{{
            errors.first("hobby")
          }}</span>
        </div>
        <div class="gender-details">
          <legend :class="{ error: errors.has('gender') }"></legend>
          <!-- <input type="radio" name="gender" value="Male" id="dot-1" v-validate='required' v-model="gender"> -->
          <input
            name="gender"
            id="dot-1"
            v-validate="'required|included:1,2'"
            value="1"
            type="radio"
            v-model.lazy="response.gender"
          />
          <input
            name="gender"
            id="dot-2"
            v-validate="'required|included:1,2'"
            value="2"
            type="radio"
            v-model.lazy="response.gender"
          />
          <input
            name="gender"
            id="dot-3"
            v-validate="'required|included:1,2,3'"
            value="3"
            type="radio"
            v-model.lazy="response.gender"
          />

          <!-- <input type="radio" name="gender" id="dot-2" value="Female" v-validate='required' v-model="gender">

          <input type="radio" name="gender" id="dot-3" value="null" v-validate='required' v-model="gender"> -->
          <span class="gender-title">Gender</span>
          <div class="category">
            <label for="dot-1">
              <span class="dot one"></span>
              <span class="gender">Male</span>
            </label>
            <label for="dot-2">
              <span class="dot two"></span>
              <span class="gender">Female</span>
            </label>
            <label for="dot-3">
              <span class="dot three"></span>
              <span class="gender">Prefer not to say</span>
            </label>
          </div>
          <div class="help is-danger" v-show="errors.has('gender')">
            {{ errors.first("gender") }}
          </div>
        </div>
        <div class="button">
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
    <div></div>
  </div>
</template>
<script>
import Login from './Login.vue';
import {router} from "../main"
export default {
  name: "Signup",

  components: {
     Login
  },

  data() {
    return {
      response: {
        fullname: "",
        username: "",
        email: "",
        phone_number: "",
        password: "",
        signauth: false,
        city: "",
        hobbies: [],
        gender: ""
      },
      users:[]
    };

  },
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          // this.response.signauth =true
          // eslint-disable-next-line
          this.alert("Signup Sucessfully")
          if(localStorage.users){
            let lsUser = localStorage.users;
            this.users = JSON.parse(lsUser)
          }
          this.users.push(this.response)
          localStorage.setItem("users",JSON.stringify(this.users))
          // this.emptyData();
  
          router.push({path:"/login",component:Login})

          
        }
     
        // this.alert('Correct them errors!');
      });
    },
    emptyData(){
      this.response.username = "",
      this.response.fullname ="",
      this.response.phone_number="",
      this.response.email="",
      this.response.password="",
      this.response.confirm_password="",
      this.response.city="",
      this.response.gender='',
      this.response.hobbies=""
    },
     alert(msg){
          this.$swal(msg)
         }
  }
};
</script>

<style scoped>
.content form .user-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0 12px 0;
}

form .user-details .input-box {
  margin-bottom: 15px;
  width: calc(50% - 20px);
}

form .input-box span.details {
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
}

.user-details .input-box input {
  height: 45px;
  width: 100%;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  padding-left: 15px;
  border: 1px solid #ccc;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
}

.user-details .input-box input:focus,
.user-details .input-box input:valid {
  border-color: #9b59b6;
}

.user-details .input-box select {
  height: 45px;
  width: 100%;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  padding-left: 15px;
  border: 1px solid #ccc;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
}

form .gender-details .gender-title {
  font-size: 20px;
  font-weight: 500;
}

form .category {
  display: flex;
  width: 80%;
  margin: 14px 0;
  justify-content: space-between;
}

form .category label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

form .category label .dot {
  height: 18px;
  width: 18px;
  border-radius: 50%;
  margin-right: 10px;
  background: #d9d9d9;
  border: 5px solid transparent;
  transition: all 0.3s ease;
}

#dot-1:checked ~ .category label .one,
#dot-2:checked ~ .category label .two,
#dot-3:checked ~ .category label .three {
  background: #9b59b6;
  border-color: #d9d9d9;
}

form input[type="radio"] {
  display: none;
}

form .button {
  height: 45px;
  margin: 35px 0;
}

form .button input {
  height: 100%;
  width: 100%;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
}

form .button input:hover {
  /* transform: scale(0.99); */
  background: linear-gradient(-135deg, #71b7e6, #9b59b6);
}

.check-details {
  display: flex;
  gap: 15px;
}
</style>
