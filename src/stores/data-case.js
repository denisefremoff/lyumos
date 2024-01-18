import { defineStore } from 'pinia';
import img_1 from '@/assets/img/premium-pipe.webp';

export const DataCase = defineStore('data-case', {
    state: () => ({
        devCases: [
            {
                id: 1,
                h4: 'Система автоматизации для Premium Pipe',
                li: ['Производство', 'Логистика и доставка', 'Управление складом'],
                h6: 'Автоматизированная система учета данных и генерации документов для производства металических изделий',
                p: 'Для увеличения производительности и структуризации их деятельности мы разрабатываем для них систему автоматизации бизнес-процессов.',
                url: 'premium-pipe',
                img: img_1
            }
            // {
            //     id: 2,
            //     h4: 'Kucher Desk',
            //     li: ['Сервис'],
            //     h6: 'Коллаборативная платформа для генерации идей и проведения мозговых штурмов с командами',
            //     p: 'Описание того что на изображении',
            //     url: '#',
            //     img: img
            // }
        ]
    })
})