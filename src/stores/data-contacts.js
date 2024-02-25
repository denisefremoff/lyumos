import { defineStore } from "pinia";
import axios from "axios";
export const DataContact = defineStore("data-contact", {
  state: () => ({
    contentContacts: [],
    socialNetworks: [],
    messengers: [],
    phoneNumbers: [],
    emails: [],
  }),
  actions: {
    async getContacts() {
      try {
        const responseContacts = await axios({
          url: "https://strapi.lymos.ru/api/contacts-contents",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });

        this.contentContacts = responseContacts.data.data;
        const responSocialNetworks = await axios({
          url: "https://strapi.lymos.ru/api/social-networks",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });

        this.socialNetworks = responSocialNetworks.data.data;
        const responMessengers = await axios({
          url: "https://strapi.lymos.ru/api/messengers",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });

        this.messengers = responMessengers.data.data;
        const responPhoneNumbers = await axios({
          url: "https://strapi.lymos.ru/api/phone-numbers",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });

        this.phoneNumbers = responPhoneNumbers.data.data;
        const responEmails = await axios({
          url: "https://strapi.lymos.ru/api/contact-emails",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });

        this.emails = responEmails.data.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
