import { defineStore } from "pinia";
export const FormControl = defineStore("form-control", {
  state: () => ({
    activForm: false,
    pageNumber: 1,
    description: "",
    arrServises: [],
    email: "",
    phoneNumber: "",
    company: "",
    name: "",
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
        servises: this.arrServises,
        description: this.description,
        user: {
          name: this.name,
          phoneNumber: this.phoneNumber,
          email: this.email,
          company: this.company,
        },
      };
      this.arrServises = [];
      this.description = "";
      this.name = "";
      this.phoneNumber = "";
      this.company = "";
      this.email = "";
      let tmp = JSON.stringify(userInfo);
      console.log(JSON.parse(tmp));
    },
    passInformation() {
      let reEmail = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%_]).{8,24}$/;
      let rePhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
      this.email === "" ||
      reEmail.test(this.email) ||
      this.phoneNumber === "" ||
      rePhone.test(this.phoneNumber) ||
      this.company === "" ||
      this.name === ""
        ? this.checkWrong()
        : this.getInfo();
    },
    changePageForvard() {
      this.getArrServises.length === 0 || this.description === ""
        ? this.checkWrong()
        : (this.pageNumber += 1);
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
  },
});

// /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%_]).{8,24}$/
// /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
