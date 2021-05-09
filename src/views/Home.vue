<script>
export default {
  name: "Home",

  mounted() {
    console.log("PARMINDER");
  },
};
</script>

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
            <li class="col-vc">
              <a href="#">Adult jokes</a>
            </li>
            <li class="col-vc">
              <a href="#">Dad jokes</a>
            </li>
            <li class="col-vc">
              <a href="#">Christmas Jokes</a>
            </li>
            <li class="col-vc">
              <a href="#">Job jokes</a>
            </li>
            <li class="col-vc">
              <a href="#">Birthday jokes</a>
            </li>
            <li class="col-vc">
              <a href="#">Social jokes</a>
            </li>
            <li class="col-vc">
              <a href="#">Puns</a>
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
          <div class="col-vc">
            <div class="joke_item">
              <h4 class="joke_title">
                <img
                  src="@/assets/images/flash-yellow.png"
                  alt="..."
                  class="mr-5"
                />
                Lawyer Joke
              </h4>
              <div class="joke_content">
                <p>
                  A lawyer dies and goes to Heaven. "There must be some
                  mistake," the lawyer argues. "I'm too young to die. I'm only
                  55." "Fifty-five?" says Saint Peter. "No, according to out
                  calculations, you're 82." "How'd you get that?" the lawyer
                  asks. Answers St. Peter, "We added up your time sheets."
                </p>
              </div>
              <div class="joke_btn">
                <a href="view_joke.html"
                  >See Stats <i class="far fa-long-arrow-right"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="col-vc">
            <div class="joke_item">
              <h4 class="joke_title">
                <img
                  src="@/assets/images/flash-yellow.png"
                  alt="..."
                  class="mr-5"
                />
                Doctor Joke
              </h4>
              <div class="joke_content">
                <p>
                  I’d never had surgery, and I was nervous. “This is a very
                  simple, noninvasive procedure,” the anesthesiologist reassured
                  me. I felt better, until … “Heck,” he continued, “you have a
                  better chance of dying from the anesthesia than the surgery
                  itself.”
                </p>
              </div>
              <div class="joke_btn">
                <a href="view_joke.html"
                  >See Stats <i class="far fa-long-arrow-right"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="col-vc">
            <div class="joke_item">
              <h4 class="joke_title">
                <img
                  src="@/assets/images/flash-yellow.png"
                  alt="..."
                  class="mr-5"
                />
                Business Joke
              </h4>
              <div class="joke_content">
                <p>
                  I went to my boss at work and said, "I need a raise. Three
                  other companies are after me." He said, "Really? Which other
                  companies are after you?" I said, "The electric company, the
                  gas company and the phone company.
                </p>
              </div>
              <div class="joke_btn">
                <a href="view_joke.html"
                  >See Stats <i class="far fa-long-arrow-right"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="col-vc">
            <div class="joke_item">
              <h4 class="joke_title">
                <img
                  src="@/assets/images/flash-yellow.png"
                  alt="..."
                  class="mr-5"
                />
                Police joke
              </h4>
              <div class="joke_content">
                <p>
                  An officer conducting speed enforcement stops a young man for
                  traveling in excess of 40 mph over the speed limit. The
                  officer approaches the driver and says, "Well, 40 over...I
                  been waiting for you to come along all day." Without pause,
                  the young man replies, "I got here as fast as I could!"
                </p>
              </div>
              <div class="joke_btn">
                <a href="view_joke.html"
                  >See Stats <i class="far fa-long-arrow-right"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="col-vc">
            <div class="joke_item">
              <h4 class="joke_title">
                <img
                  src="@/assets/images/flash-yellow.png"
                  alt="..."
                  class="mr-5"
                />
                Doctor joke
              </h4>
              <div class="joke_content">
                <p>
                  An officer observes a woman standing in the middle of the
                  street. He approaches her and asks, "Are you okay?" The woman
                  replies, "Yes, but how do I get to the hospital?" The officer
                  replies, "Just keep standing there."
                </p>
              </div>
              <div class="joke_btn">
                <a href="view_joke.html"
                  >See Stats <i class="far fa-long-arrow-right"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="col-vc">
            <div class="joke_item">
              <h4 class="joke_title">
                <img
                  src="@/assets/images/flash-yellow.png"
                  alt="..."
                  class="mr-5"
                />
                Boss joke
              </h4>
              <div class="joke_content">
                <p>
                  My boss asked me to put a joke on the first slide of the
                  presentation…apparently a picture of my pay slip wasn’t what
                  he was looking for.
                </p>
              </div>
              <div class="joke_btn">
                <a href="view_joke.html"
                  >See Stats <i class="far fa-long-arrow-right"></i
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div class="view_more_btn">
          <a href="#">View More <i class="far fa-long-arrow-down"></i></a>
        </div>
      </div>
    </div>
    <!-- MAIN SECTION END -->
  </div>
</template>
