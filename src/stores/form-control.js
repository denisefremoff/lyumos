import { defineStore } from "pinia";
export const FormControl = defineStore("form-control", {
  state: () => ({
    activForm: false,
    pageNumber: 1,
    internetShop: Boolean,
    landingPage: Boolean,
    application: Boolean,
    UXprototyping: Boolean,
    service: Boolean,
    UIUXdesign: Boolean,
    identity: Boolean,
    graphicDesign: Boolean,
    designSupport: Boolean,
    naming: Boolean,
    illustration: Boolean,
    description: "",
    arrServises: [],
    email: "",
    phoneNumber: "",
    company: "",
    name: "",
    workFormat: "",
    totalbudget: "",
  }),
  getters: {
    getFormState() {
      return this.activForm;
    },
    getPageNumber() {
      return this.pageNumber;
    },
    getArrServises() {
      return this.arrServises;
    },
  },
  actions: {
    changActivForm() {
      this.activForm = !this.activForm;
    },
    changePageForvard() {
      this.pageNumber += 1;
    },
    changePageBack() {
      this.pageNumber -= 1;
    },
    getInfo() {
      const userInfo = {
        servises: this.arrServises,
        info: {
          name: this.name,
          company: this.company,
          phone: this.phoneNumber,
          email: this.email,
        },
      };
      const obj = JSON.stringify(userInfo);
      console.log(JSON.parse(obj));
    },
  },
});
