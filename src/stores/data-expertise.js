import { defineStore } from "pinia";
//import axios from "axios";
export const DataExpertise = defineStore("data-expertise", {
  state: () => ({
    cart1: {
      id: 1,
      header: "Стратегия",
      body: [
        {
          id: 1,
          header: "DSS (Decision Support System)",
          body: "Математические модели и статистические методы",
        },
        {
          id: 2,
          header: "EIS (Executive Information System)",
          body: "Мониторинг ключевых показателей",
        },
        {
          id: 3,
          header: "FIM (Financial Information Management)",
          body: "Бюджетирование и финансовый учет",
        },
        {
          id: 4,
          header: "CRM (Customer Relationship Management)",
          body: "Маркетинг и продажи",
        },
      ],
      switchers: [
        {
          id: 1,
          body: "DSS",
        },
        {
          id: 2,
          body: "EIS",
        },
        {
          id: 3,
          body: "FIM",
        },
        {
          id: 4,
          body: "CRM",
        },
      ],
    },
    pageCart1: 0,
    cart2: {
      id: 2,
      header: "Производство",
      body: [
        {
          id: 1,
          header: "SCM (Supply Chain Management)",
          body: "Поставки и логистика",
        },
        {
          id: 2,
          header: "WMS (Warehouse Management System)",
          body: "Управление складом",
        },
        {
          id: 3,
          header: "ERP (Enterprise Resource Planning)",
          body: "Планирование ресурсов предприятия",
        },
        {
          id: 4,
          header: "MES (Manufacturing Execution System)",
          body: "Контроль производственных операций на предприятии",
        },
      ],
      switchers: [
        {
          id: 1,
          body: "SCM",
        },
        {
          id: 2,
          body: "WMS",
        },
        {
          id: 3,
          body: "ERP",
        },
        {
          id: 4,
          body: "MES",
        },
      ],
    },
    pageCart2: 0,
    cart3: {
      id: 3,
      header: "Персонал",
      body: [
        {
          id: 1,
          header: "HRM (Human Resource Management)",
          body: "Управление персоналом",
        },
        {
          id: 2,
          header: "LMS (Learning Management System)",
          body: "Управление обучением",
        },
        {
          id: 3,
          header: "PM (Project Management System)",
          body: "Проектная деятельность",
        },
        {
          id: 4,
          header: "BPM (Business Process Management)",
          body: "Управление бизнес-процессами",
        },
        {
          id: 5,
          header: "OAS (Office Automation System)",
          body: "Автоматизация офиса",
        },
      ],
      switchers: [
        {
          id: 1,
          body: "HRM",
        },
        {
          id: 2,
          body: "LMS",
        },
        {
          id: 3,
          body: "PM",
        },
        {
          id: 4,
          body: "BPM",
        },
        {
          id: 5,
          body: "OAS",
        },
      ],
    },
    pageCart3: 0,
    cart4: {
      id: 4,
      header: "Информация",
      body: [
        {
          id: 1,
          header: "ECM (Enterprise Content Management)",
          body: "Прием и обработка документов",
        },
        {
          id: 2,
          header: "EDI (Electronic Data Interchange)",
          body: "Обмен данными ЭДО",
        },
        {
          id: 3,
          header: "3",
        },
        {
          id: 4,
          header: "4",
        },
      ],
      switchers: [
        {
          id: 1,
          body: "ECM",
        },
        {
          id: 2,
          body: "EDI",
        },
      ],
    },
    pageCart4: 0,
  }),
  getters: {
    getCart1() {
      return this.cart1.body[this.pageCart1];
    },
    getCart2() {
      return this.cart2.body[this.pageCart2];
    },
    getCart3() {
      return this.cart3.body[this.pageCart3];
    },
    getCart4() {
      return this.cart4.body[this.pageCart4];
    },
  },
  actions: {
    changeCart1(i) {
      this.pageCart1 = i;
    },
    changeCart2(k) {
      this.pageCart2 = k;
    },
    changeCart3(j) {
      this.pageCart3 = j;
    },
    changeCart4(l) {
      this.pageCart4 = l;
    },
  },
});
