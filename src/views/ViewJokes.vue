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
        <div class="back_btn">
          <a href="#">
            <img src="@/assets/images/back.png" alt="..." />
          </a>
        </div>

        <div class="view_joke_section">
          <div class="row">
            <div class="col-vc left_area">
              <div class="view_joke_area">
                <div class="joke_meta">
                  <div class="joke_catg">
                    <a href="#" class="green_tag">Social Jokes</a>
                  </div>
                  <div class="joke_tag">
                    <a href="#" class="trending">Trending</a>
                  </div>
                </div>
                <div class="view_joke_title">
                  <h2>
                    <span>The Granny Joke</span>
                  </h2>
                  <h6>NO #1</h6>
                </div>
                <div class="view_joke_content">
                  <p>
                    An old grandma brings a bus driver a bag of peanuts every
                    day.
                  </p>
                  <p>
                    First the bus driver enjoyed the peanuts but after a week of
                    eating them he asked: "Please granny, don't bring me peanuts
                    anymore. Have them yourself.".
                  </p>
                  <p>
                    The granny answers: "You know, I don't have teeth anymore. I
                    just prefer to suck the chocolate around them."
                  </p>
                </div>
              </div>
              <div class="joke_actions">
                <div class="left_action">
                  <ul>
                    <li class="like_btn">
                      <a href="#">
                        <img src="@/assets/images/like.png" alt="..." />
                      </a>
                      <span>326</span>
                    </li>
                    <li class="dislike_btn">
                      <a href="#">
                        <img src="@/assets/images/dislike.png" alt="..." />
                      </a>
                      <span>75</span>
                    </li>
                  </ul>
                </div>
                <div class="right_actions">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="far fa-angle-left mr-5"></i>
                        Prev. Joke
                      </a>
                    </li>
                    <li>
                      <a href="#" class="next_btn">
                        Next Joke
                        <i class="far fa-angle-right ml-5"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-vc right_area">
              <div class="top_jokes">
                <h5>THE TOP 10 JOKES THIS WEEK</h5>
                <ul>
                  <li>
                    <a href="#">Smoking Joke</a>
                  </li>
                  <li>
                    <a href="#">My Boss Joke</a>
                  </li>
                  <li>
                    <a href="#">Dirty Millionaire Joke</a>
                  </li>
                  <li>
                    <a href="#">The annoying neighbour</a>
                  </li>
                  <li>
                    <a href="#">Knock Knock</a>
                  </li>
                  <li>
                    <a href="#">Why Tyson lisps</a>
                  </li>
                  <li>
                    <a href="#">The drunk Police officer</a>
                  </li>
                  <li>
                    <a href="#">My hip dad (Dad joke)</a>
                  </li>
                  <li>
                    <a href="#">What not to say in an elevator</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- MAIN SECTION END -->
  </div>
</template>
