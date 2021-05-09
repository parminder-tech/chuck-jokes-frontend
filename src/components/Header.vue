<template>
  <div class="top_header">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-vc left_area">
          <div class="top_logo">
            <a href="/">
              <img
                src="@/assets/images/logo.png"
                alt="..."
                class="img-setting"
              />
            </a>
          </div>
        </div>
        <div class="col-vc right_area">
          <nav>
            <ul>
              <li>
                <a href="#">SO FUNKTIONIERT’S</a>
              </li>
              <li>
                <a href="#">SONDERANGEBOTE</a>
              </li>
              <li class="dropdown_menu">
                <a href="#" class="dropdown_menu_item">
                  <i class="fas fa-user"></i>
                  <span>MEIN BEREICH</span>
                  <i class="fas fa-caret-down"></i>
                </a>
                <div class="dropdown_content">
                  <ul>
                    <li>
                      <a href="#">My published jokes</a>
                    </li>
                    <li>
                      <a href="#">My saved jokes</a>
                    </li>
                    <li>
                      <a href="#">Account Information</a>
                    </li>
                    <li class="active_drodpown_item">
                      <a href="#">Publish new joke</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
