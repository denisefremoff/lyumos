<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <footer
    class="footer"
    :class="{
      'active-footer-light': leftAbsoluteActive,
      'active-footer-dark': rightAbsoluteActive,
    }"
  >
    <div class="wrapper">
      <div
        @mouseenter="hoverLeftAbsolute"
        @mouseleave="noHover"
        class="footer__left-absolute"
        :class="{
          'left-absolute-active': leftAbsoluteActive,
          'left-absolute-inactive': leftAbsoluteInactive,
        }"
      >
        <p class="footer__switcher-left">
          Зона активного поля <span>навигации</span>
        </p>
      </div>

      <div
        @mouseenter="hoverRightAbsolute"
        @mouseleave="noHover"
        class="footer__right-absolute"
        :class="{
          'right-absolute-active': rightAbsoluteActive,
          'right-absolute-inactive': rightAbsoluteInactive,
        }"
      >
        <p class="footer__switcher-right">
          Зона активного поля <span>контактов</span>
        </p>
      </div>

      <span
        v-show="!rightAbsoluteActive && !leftAbsoluteActive"
        class="footer__divider"
      ></span>

      <div
        class="footer__left-side"
        :class="{
          'active-left-side': leftAbsoluteActive,
          'inactive-left-side': rightAbsoluteActive,
        }"
      >
        <nav @mouseenter="hoverLeftAbsolute" @mouseleave="noHover">
          <ul>
            <li>
              <RouterLink to="/portfolio">Портфолио</RouterLink>
            </li>
            <li>
              <RouterLink to="/contacts">Контакты</RouterLink>
            </li>
            <li>
              <RouterLink to="/services">Услуги</RouterLink>
            </li>
          </ul>
        </nav>
        <p class="footer__rights">
          IT-компания lumos.ru, 2024 © Все права защищены
        </p>
      </div>

      <div
        @mouseenter="hoverRightAbsolute"
        @mouseleave="noHover"
        class="footer__right-side"
        :class="{
          'active-right-side': rightAbsoluteActive,
          'inactive-right-side': leftAbsoluteActive,
        }"
      >
        <div class="footer__contacts">
          <a href="tel:+79969241648" class="footer__phone"
            >+7 (996) 924-16-48</a
          >
          <a href="mailto:protechnologii22@yandex.ru" class="footer__mail">Наша почта</a>
        </div>
        <div class="footer__links">
          <a href="#" target="_blank">ВКонтакте</a>
          <a href="#" target="_blank">WhatsApp</a>
          <a href="#" target="_blank">Telegram</a>
          <a href="#" target="_blank">TenChat</a>
        </div>
      </div>
    </div>

    <div class="footer_tel_rights">
      <a href="tel:+79969241648">+7 (996) 924-16-48</a>
      <p>IT-компания lumos.ru, 2024 © Все права защищены</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      leftAbsoluteActive: false,
      leftAbsoluteInactive: false,
      rightAbsoluteActive: false,
      rightAbsoluteInactive: false,
      window: {
        width: 0,
      },
    };
  },
  methods: {
    hoverLeftAbsolute() {
      this.window.width > 1023
        ? ((this.leftAbsoluteActive = true),
          (this.rightAbsoluteInactive = true))
        : "";
    },
    hoverRightAbsolute() {
      this.window.width > 1023
        ? ((this.rightAbsoluteActive = true),
          (this.leftAbsoluteInactive = true))
        : "";
    },
    noHover() {
      this.leftAbsoluteActive = false;
      this.leftAbsoluteInactive = false;
      this.rightAbsoluteActive = false;
      this.rightAbsoluteInactive = false;
    },
    handleResize() {
      this.window.width = window.innerWidth;
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
};
</script>

<style scoped>
.footer__left-side li a {
  text-decoration: none;
  color: #1e1e1e;
  transition: 0.3s;
}

.footer__left-side li a:hover {
  opacity: 0.7;
}
</style>
