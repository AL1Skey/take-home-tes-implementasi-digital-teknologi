<script lang="ts" setup>
const props = defineProps({
  cms: Object
})
import { onMounted } from 'vue';

// console.log("AAAAAAAAAAAA",props?.cms);
// onMounted(() => {
// });
</script>

<template>
       <header id="header" class="header">
        <div class="container-fluid">
          <div class="brand">
            <a href="#About" class="brand-name">Victory <span class="brand-name-s">Studio</span></a>
          </div>

          <button class="nav-toggle-btn a-nav-toggle">
            <span class="hamburger">
              <span class="top-bun"></span>
              <span class="meat"></span>
              <span class="bottom-bun"></span>
            </span>
          </button>

          <div class="navbar-m"></div>
          <div class="hide-menu a-nav-toggle"></div>

          <div class="menu">
            <div class="menu-lang">
              <span class="menu-lang-item" data-lang='id'>Indonesia.</span>
              <span class="menu-lang-item" data-lang="en">English.</span>
            </div>

            <div class="menu-main" id="accordion">
              <ul id="menuMain">
                <li data-menuanchor="About" class="active btn-menu"><a href="#About">About</a></li>
                <li data-menuanchor="Services" class="btn-menu"><a href="#Services">Services</a></li>
                <li data-menuanchor="Resume" class="btn-menu"><a href="#Resume">Resume</a></li>
                <li data-menuanchor="Portfolio" class="btn-menu"><a href="#Portfolio">Portfolio</a></li>
              </ul>
            </div>

            <div class="menu-footer">
              <div class="menu-footer-contacts">
                <div class="menu-footer-phone">
                  <a href="tel:0819-3045-6886" class="phone-link">0819-3045-6886</a>
                </div>
                <div class="menu-footer-mail">
                  <a href="mailto:hello@victorystudio.co.id" class="mail-link">hello@victorystudio.co.id</a>
                </div>
              </div>
              <div class="menu-footer-copyright">&copy; VictoryStudio. All Rights Reseverd</div>
            </div>
            <div class="menu-ornament"></div>
          </div>
        </div>
      </header>
</template>
