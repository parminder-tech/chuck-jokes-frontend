<template>
  <div>
    <!-- BANNER START -->
    <div class="banner_area">
      <img
        src="@/assets/images/top-banner.png"
        alt="..."
        class="img-setting banner_img"
      />
      <div class="upper_banner">
        <div class="container">
          <div class="row">
            <div class="col-vc">
              <div class="text-center">
                <h1>The Joke Bible</h1>
                <h3>Daily Laughs for you and yours</h3>
                <form method="POST" action="#">
                  <div class="search_form">
                    <div class="input_group">
                      <input
                        type="text"
                        class="input_field"
                        placeholder="How can we make you laugh today?"
                      />
                      <button type="submit" class="input_icon">
                        <i class="far fa-search"></i>
                      </button>
                    </div>
                    <div class="search_dropdown">
                      <ul>
                        <li>
                          <a href="javascript:;">
                            <img
                              src="@/assets/images/flash-green.png"
                              alt="..."
                              class="mr-10"
                            />
                            <span>Social Jokes: The Crazy Teacher</span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <img
                              src="@/assets/images/flash-yellow.png"
                              alt="..."
                              class="mr-10"
                            />
                            <span>Job Jokes: First day of class </span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <img
                              src="@/assets/images/flash-yellow.png"
                              alt="..."
                              class="mr-10"
                            />
                            <span>Job Jokes: Sleepy Professor</span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <img
                              src="@/assets/images/flash-orange.png"
                              alt="..."
                              class="mr-10"
                            />
                            <span>Dad Jokes: Can you spell that?</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- BANNER END -->

    <!-- MAIN SECTION START -->
    <div class="bg_grey">
      <div class="container">
        <div class="home_tags">
          <ul class="row no-gutters m-0 p-0">
            <li class="col-vc" v-for="category in categories" :key="category">
              <a href="#">{{ category }} JOKES </a>
            </li>
            <li class="col-vc outlined_btn">
              <a href="#">View All <i class="far fa-long-arrow-down"></i></a>
            </li>
          </ul>
          <hr />
        </div>

        <div class="home_selected_tags">
          <ul class="row no-gutters m-0 p-0">
            <li class="col-vc green_tag">
              <a href="#">Social Jokes</a>
            </li>
          </ul>
        </div>

        <div class="joke_list row no-gutters">
          <div v-for="joke in paginatedData" :key="joke.id" class="col-vc">
            <div class="joke_item">
              <h4 class="joke_title" v-if="joke.categories.length > 0">
                <img
                  src="@/assets/images/flash-yellow.png"
                  alt="..."
                  class="mr-5"
                />
                {{ joke.categories.toString() }} Jokes
              </h4>
              <h4 class="joke_title" v-else>
                <img
                  src="@/assets/images/flash-yellow.png"
                  alt="..."
                  class="mr-5"
                />
                Uncategorized
              </h4>
              <div class="joke_content">
                <p>
                  {{ joke.value }}
                </p>
              </div>
              <div class="joke_btn">
                <a @click="viewJokeStats(joke.id)"
                  >See Stats <i class="far fa-long-arrow-right"></i
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div class="view_more_btn">
          <a @click="updateRow()"
            >View More <i class="far fa-long-arrow-down"></i
          ></a>
        </div>
      </div>
    </div>
    <!-- MAIN SECTION END -->
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      paginatedData: [],
      data: [],
      categories: [],
    };
  },
  methods: {
    getAllJokes() {
      this.$store.getters.client
        .get("/jokes/search?query=all")
        .then((response) => {
          this.data = response.data.result;
          // push first 12 values to the array
          for (var i = 0; i < 12; i++) {
            this.paginatedData.push(this.data[i]);
          }
        });
    },
    getCategories() {
      console.log("category");
      this.$store.getters.client.get("jokes/categories").then((response) => {
        this.categories = response.data;
        console.log("this.categories", this.categories);
      });
    },
    updateRow() {
      // plus fixed 12 to update the pagination length
      var calculateLength = this.paginatedData.length + 12;
      // update in the array
      for (var i = this.paginatedData.length; i < calculateLength; i++) {
        this.paginatedData.push(this.data[i]);
      }
    },
    viewJokeStats(event) {
      this.$router.push({ name: "ViewJokes", params: { id: event } });
    },
  },
  mounted() {
    this.getAllJokes();
    this.getCategories();
  },
};
</script>

<style scoped>
a,
a label {
  cursor: pointer;
}
</style>
