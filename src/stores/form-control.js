import { defineStore } from "pinia";
export const FormControl = defineStore("form-control", {
  state: () => ({
    activForm: false,
    pageNumber: 1,
    // internetShop: Boolean,
    // landingPage: Boolean,
    // application: Boolean,
    // UXprototyping: Boolean,
    // service: Boolean,
    // UIUXdesign: Boolean,
    // identity: Boolean,
    // graphicDesign: Boolean,
    // designSupport: Boolean,
    // naming: Boolean,
    // illustration: Boolean,
    description: "",
    arrServises: [],
    email: "",
    phoneNumber: "",
    company: "",
    name: "",
    workFormat: "",
    totalbudget: "",
    wrong: false,
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
    getWrong() {
      return this.wrong;
    },
  },
  actions: {
    changActivForm() {
      this.activForm = !this.activForm;
    },
    getInfo() {
      const userInfo = {
        formatInfo: {
          budget: this.totalbudget,
          format: this.workFormat,
        },
        servises: this.arrServises,
        info: this.personInfo,
      };
    },

    // this.getArrServises.length < 1 ||
    // this.description === "" ||
    // this.workFormat === "" ||
    // this.totalbudget === "" ||
    // Object.value(this.personInfo).length === 0

    passInformation() {
      const personInfo = {
        name: this.name,
        company: this.company,
        phone: this.phoneNumber,
        email: this.email,
      };
      Object.keys(personInfo).map(function (key) {
        console.log(personInfo[key].values);
      });
      // this.getArrServises.length < 1 ||
      // this.description === "" ||
      // this.workFormat === "" ||
      // this.totalbudget === "" ||
      // Object.value(this.personInfo).length === 0
      //   ? this.checkWrong()
      //   : this.getInfo();
    },
    changePageForvard() {
      this.pageNumber += 1;
    },
    changePageBack() {
      this.pageNumber -= 1;
    },
    checkWrong() {
      this.wrong = true;
      setTimeout(() => {
        this.wrong = false;
      }, 2000);
    },
    // check() {
    //   return (virif =
    //     this.getArrServises.length < 1 ||
    //     this.description === "" ||
    //     this.workFormat === "" ||
    //     this.totalbudget === "" ||
    //     Object.value(this.personInfo).length === 0
    //       ? () => this.checkWrong()
    //       : () => true);
    // },
  },
});
