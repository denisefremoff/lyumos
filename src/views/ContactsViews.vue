<script setup>
// import TheHeader from '@/components/TheHeader.vue';
// import TheFooter from '@/components/TheFooter.vue';
import TheSpots from "@/components/TheSpots.vue";
</script>

<template>
  <!-- <TheHeader /> -->
  <main>
    <TheSpots />
    <div class="wrapper">
      <div class="content contacts">
        <h1 class="title_contacts">Контакты</h1>
        <h3>Карта</h3>
        <div class="map">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A3bab022f05fe60f2e72c32d18155c71a3bd3ac31d8f6b3277fb4430915c8aa20&amp;source=constructor"
            width="100%"
            height="720"
            frameborder="0"
          >
          </iframe>
        </div>
        <div class="contact_us">
          <div class="social_network">
            <h4>Социальные сети</h4>
            <ul>
              <li><a href="#" target="_blank">ВКонтакте</a></li>
              <li><a href="#" target="_blank">TenChat</a></li>
            </ul>
          </div>
          <div class="messengers">
            <h4>Мессенджеры</h4>
            <ul>
              <li><a href="#" target="_blank">WhatsApp</a></li>
              <li><a href="#" target="_blank">Telegram</a></li>
            </ul>
          </div>
          <div class="phone_number">
            <h4>Номер</h4>
            <a href="tel:+79123456789" target="_blank">+7 (912) 345-67-89</a>
          </div>
          <div class="email">
            <h4>Почта</h4>
            <a href="mailto:it@lumos.ru">it@lumos.ru</a>
          </div>
        </div>
      </div>
    </div>
  </main>
  <!-- <TheFooter /> -->
</template>
