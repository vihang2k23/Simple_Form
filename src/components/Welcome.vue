<template>
  <div class="container">
    <h1>Welcome Zignuts</h1>
    <form>
      <div class="button">
        <button style="color: white">
          <router-link
            to="login"
            style="color: white; text-decoration: none"
            exact
            >Logout</router-link
          >
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "welcome",
};
</script>
<style>
form .button {
  height: 45px;
  margin: 35px 0;
}

form .button button {
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

form .button button:hover {
  /* transform: scale(0.99); */
  background: linear-gradient(-135deg, #71b7e6, #9b59b6);
}
</style>