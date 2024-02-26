<script setup>
import TheSpots from "@/components/TheSpots.vue";
import { useHead } from "@unhead/vue";
import { onMounted } from "vue";

import { DataContact } from "@/stores/data-contacts.js";
import { DataTitleDesc } from "@/stores/data-titleDesc.js";

const datContact = DataContact();
const titleDesc = DataTitleDesc();

onMounted(() => {
  datContact.getContacts();
  titleDesc.getContactTitleDesc();
});

// useHead({
//   title: () => titleDesc.contactTitleDesc.title,
//   meta: [
//     {
//       name: "description",
//       content: () => titleDesc.contactTitleDesc.description,
//     },
//   ],
// });
useHead({
  title: () => titleDesc.titleDesc.title,
  meta: [
    {
      name: "description",
      content: () => titleDesc.titleDesc.description,
    },
  ],
});
</script>
<template>
  <main>
    <TheSpots />
    <div class="wrapper">
      <div class="content contacts">
        <h1 class="title_contacts">Контакты</h1>
        <h3>Карта</h3>
        <div
          v-for="contentContact in datContact.contentContacts"
          :key="contentContact.id"
          class="map"
        >
          <iframe
            :src="contentContact.attributes.iframe"
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
              <li
                v-for="socialNetwork in datContact.socialNetworks"
                :key="socialNetwork.id"
              >
                <a :href="socialNetwork.attributes.href" target="_blank">{{
                  socialNetwork.attributes.a
                }}</a>
              </li>
            </ul>
          </div>
          <div class="messengers">
            <h4>Мессенджеры</h4>
            <ul>
              <li
                v-for="messenger in datContact.messengers"
                :key="messenger.id"
              >
                <a :href="messenger.attributes.href" target="_blank">{{
                  messenger.attributes.a
                }}</a>
              </li>
            </ul>
          </div>
          <div class="phone_number">
            <h4>Номер</h4>
            <a
              v-for="phoneNumber in datContact.phoneNumbers"
              :key="phoneNumber.id"
              :href="phoneNumber.attributes.href"
              target="_blank"
              >{{ phoneNumber.attributes.a }}</a
            >
          </div>
          <div class="email">
            <h4>Почта</h4>
            <a
              v-for="email in datContact.emails"
              :key="email.id"
              :href="email.attributes.href"
              >{{ email.attributes.a }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
