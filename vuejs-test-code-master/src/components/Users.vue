<template>
  <div class="main">
    <div class="main-title">{{ msg }}</div>
    <div class="user-count">
      <div class="count">{{ count }}</div>
      Users
    </div>
    <div class="wrapper">
      <b-card-group columns>
        <b-card v-for="user in users" :key="user.name">
          <div class="body-card">
            <div class="title">Name</div>
            <div class="name">{{ user.name }}</div>
            <b-row>
              <b-col>
                <div class="title">Email</div>
                <div class="email">{{ user.email }}</div>
              </b-col>
              <b-col>
                <div class="title">Phone</div>
                <div class="phone">{{ user.phone }}</div>
              </b-col>
              <b-col>
                <div class="title">Website</div>
                <div class="website">{{ user.website }}</div>
              </b-col>
            </b-row>
          </div>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";
// import { INCREMENT } from "../mutation-types";

export default {
  name: "Users",
  props: {
    msg: String,
  },
  computed: {   
    ...mapState(['list']),
    users() {
      return this.$store.getters.getData;
    },
    count() {
      return this.$store.getters.getCountData;
    },
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.setData(response.data);
        console.log(response.data)
      })
      .catch((error) => (
        this.loading = false,
        console.log(error)
      ));
  },
  methods: {
    ...mapActions(['setData']),
    setData(data) {
      this.$store.dispatch("setData", data);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  background-color: #f5f7fa;
  padding: 10px;
}
.count {
  color: #83dd8b;
  font-weight: 800;
  margin-right: 10px;
}
.user-count {
  border-bottom: 1px solid #e1e1e7;
  color: #646464;
  display: flex;
}

.title {
  color: #646464;
  font-size: 70%;
}

.name {
  font-weight: bold;
}

.phone {
  font-weight: bold;
}

.email {
  font-weight: bold;
}

.website {
  font-weight: bold;
  color: #83dd8b;
}

</style>
