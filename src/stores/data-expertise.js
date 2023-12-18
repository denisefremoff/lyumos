import { defineStore } from "pinia";
export const DataExpertise = defineStore("data-expertise", {
  state: () => ({
    cart1: {
      id: 1,
      page: 1,
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

    // expertiseData: [
    //   {
    //     id: 1,
    //     header: "Стратегия",
    //     body: [
    //       {
    //         id: 1,
    //         header: "DSS (Decision Support System)",
    //         body: "Математические модели и статистические методы",
    //         isShow: true,
    //       },
    //       {
    //         id: 2,
    //         header: "EIS (Executive Information System)",
    //         isShow: false,
    //       },
    //       {
    //         id: 3,
    //         header: "FIM (Financial Information Management)",
    //         isShow: false,
    //       },
    //       {
    //         id: 4,
    //         header: "CRM (Customer Relationship Management)",
    //         isShow: false,
    //       },
    //     ],
    //     switchers: [
    //       {
    //         id: 1,
    //         body: "DSS",
    //       },
    //       {
    //         id: 2,
    //         body: "EIS",
    //       },
    //       {
    //         id: 3,
    //         body: "FIM",
    //       },
    //       {
    //         id: 4,
    //         body: "CRM",
    //       },
    //     ],
    //   },
    //   {
    //     id: 2,
    //     header: "Производство",
    //     body: [
    //       {
    //         id: 1,
    //         header: "SCM (Supply Chain Management)",
    //         body: "Поставки и логистика",
    //       },
    //       //   {
    //       //     id: 2,
    //       //     header: "2",
    //       //   },
    //       //   {
    //       //     id: 3,
    //       //     header: "3",
    //       //   },
    //       //   {
    //       //     id: 4,
    //       //     header: "4",
    //       //   },
    //     ],
    //     switchers: [
    //       {
    //         id: 1,
    //         body: "SCM",
    //       },
    //       {
    //         id: 2,
    //         body: "WMS",
    //       },
    //       {
    //         id: 3,
    //         body: "ERP",
    //       },
    //       {
    //         id: 4,
    //         body: "MES",
    //       },
    //     ],
    //   },
    //   {
    //     id: 3,
    //     header: "Персонал",
    //     body: [
    //       {
    //         id: 1,
    //         header: "HRM (Human Resource Management)",
    //         body: "Управление персоналом",
    //       },
    //         {
    //           id: 2,
    //           header: "2",
    //         },
    //         {
    //           id: 3,
    //           header: "3",
    //         },
    //         {
    //           id: 4,
    //           header: "4",
    //         },
    //         {
    //           id: 5,
    //           header: "4",
    //         },
    //     ],
    //     switchers: [
    //       {
    //         id: 1,
    //         body: "HRM",
    //       },
    //       {
    //         id: 2,
    //         body: "LMS",
    //       },
    //       {
    //         id: 3,
    //         body: "PM",
    //       },
    //       {
    //         id: 4,
    //         body: "BPM",
    //       },
    //       {
    //         id: 5,
    //         body: "OAS",
    //       },
    //     ],
    //   },
    //   {
    //     id: 4,
    //     header: "Информация",
    //     body: [
    //       {
    //         id: 1,
    //         header: "ECM (Enterprise Content Management)",
    //         body: "Прием и обработка документов",
    //       },
    //         {
    //           id: 2,
    //           header: "2",
    //         },
    //         {
    //           id: 3,
    //           header: "3",
    //         },
    //         {
    //           id: 4,
    //           header: "4",
    //         },
    //     ],
    //     switchers: [
    //       {
    //         id: 1,
    //         body: "ECM",
    //       },
    //       {
    //         id: 2,
    //         body: "EDI",
    //       },
    //     ],
    //   },
    // ],
  }),
  getters: {
    page() {
      return this.cart1.page;
    },
  },
  actions: {
    change(n) {
      this.cart1.page = n;
    },
  },
});
