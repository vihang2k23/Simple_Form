<template>
  <div class="container">
    <div class="title">Login</div>
    <div class="content">
      <form @submit.prevent="validateBeforeSubmit">
        <div class="user-details">
          <!-- <div class="input-box" style="margin-left: 150px;">
            <span class="details">Username</span>
            <input type="text" placeholder="Enter your username" required />
          </div> -->
          <div class="input-box" style="margin-left: 150px">
            <span class="details">Username</span>

            <input
              name="Username"
              v-model.lazy="logindata.username"
              v-validate="'required'"
              :class="{ input: true, 'is-danger': errors.has('Username') }"
              type="text"
              placeholder="Enter Your Username"
            />
            <span v-show="errors.has('Username')" class="help is-danger">{{
              errors.first("Username")
            }}</span>
          </div>

          <div class="input-box" style="margin-left: 150px">
            <span class="details">Password</span>
            <input
              name="password"
              type="password"
              v-validate="'required|min:6'"
              placeholder="Enter your password"
              v-model.lazy="logindata.password"
            />
            <span v-show="errors.has('password')" class="help is-danger">{{
              errors.first("password")
            }}</span>
          </div>
        </div>

        <div class="button" style="width: 300px; margin-left: 150px">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import WelcomeVue from "./Welcome.vue";
import { router } from "../main";
export default {
  components: {
    WelcomeVue,
  },
  data() {
    return {
      logindata: { username: "", password: "" },
    };
  },
  methods: {
    validateBeforeSubmit() {
      console.log(this.$route);
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
          let signup_data = JSON.parse(localStorage.getItem("users"));
          // console.log(signup_data);

          const check_data = signup_data.filter(
            (e) =>
              e.username == this.logindata.username &&
              e.password == this.logindata.password
          );
          if (check_data && check_data.length !== 0) {
            // console.log("Succesfullyy login......");
            this.alert("Login Sucessfully");
            router.push({ path: "/welcome" });
          } else {
            // console.log("Not match login and password");
            this.alert("Username and Password does not match");
            (this.logindata.username = ""), (this.logindata.password = "");
          }

          return;
        }

        this.alert("Correct them errors!");
      });
    },
    alert(msg) {
      this.$swal(msg);
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
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
.title {
  align-content: center;
}
</style>
