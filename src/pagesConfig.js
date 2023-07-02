import {
  Dvr,
  Apartment,
  MedicalServices,
  School,
  Assessment,
  Home,
} from "@mui/icons-material";
import { nanoid } from "nanoid";

const pages = [
  {
    id: "home",
    title: "Головна",
    menuTitle: "Головна",
    type: "noCollapse",
    icon: <Home />,

    children: [
      {
        id: "all",
        title: "Головна",
        menuTitle: "Головна",
        type: "item",
        url: "home/all",
        target: true,

        chartsGroups: [
          {
            title: "Оцінка виконання завдань по структурних підрозділах",
            charts: [
              {
                id: "b",
                size: "sl",
                location: { x: 0, y: 0 },
                title: "Цифровізація",
                chartConfig: {
                  options: {
                    chart: {
                      id: "bar-chart",
                    },
                    plotOptions: {
                      bar: {
                        horizontal: true,
                      },
                    },

                    xaxis: {
                      categories: ["Виконано", "План на 01.01.2024"],
                    },
                  },
                  series: [
                    {
                      data: [80, 100],
                    },
                  ],
                  type: "bar",
                  aditionalSetings: {
                    singleInfo: null,
                    filterSelects: [],
                  },
                },
              },
              {
                id: "с",
                size: "sl",
                location: { x: 6, y: 0 },
                title: "Інфраструктура",
                chartConfig: {
                  options: {
                    chart: {
                      id: "bar-chart",
                    },
                    plotOptions: {
                      bar: {
                        horizontal: true,
                      },
                    },

                    xaxis: {
                      categories: ["Виконано", "План на 01.01.2024"],
                    },
                  },
                  series: [
                    {
                      data: [72, 100],
                    },
                  ],
                  type: "bar",
                  aditionalSetings: {
                    singleInfo: null,
                    filterSelects: [],
                  },
                },
              },
              {
                id: "o",
                size: "sl",
                location: { x: 0, y: 2 },
                title: "Охорона здоров'я",
                chartConfig: {
                  options: {
                    chart: {
                      id: "bar-chart",
                    },
                    plotOptions: {
                      bar: {
                        horizontal: true,
                      },
                    },

                    xaxis: {
                      categories: ["Виконано", "План на 01.01.2024"],
                    },
                  },
                  series: [
                    {
                      data: [66, 100],
                    },
                  ],
                  type: "bar",
                  aditionalSetings: {
                    singleInfo: null,
                    filterSelects: [],
                  },
                },
              },
              {
                id: "s",
                size: "sl",
                location: { x: 6, y: 2 },
                title: "Освіта",
                chartConfig: {
                  options: {
                    chart: {
                      id: "bar-chart",
                    },
                    plotOptions: {
                      bar: {
                        horizontal: true,
                      },
                    },

                    xaxis: {
                      categories: ["Виконано", "План на 01.01.2024"],
                    },
                  },
                  series: [
                    {
                      data: [74, 100],
                    },
                  ],
                  type: "bar",
                  aditionalSetings: {
                    singleInfo: null,
                    filterSelects: [],
                  },
                },
              },
              {
                id: "t",
                size: "sl",
                location: { x: 0, y: 4 },
                title: "Економіка",
                chartConfig: {
                  options: {
                    chart: {
                      id: "bar-chart",
                    },
                    plotOptions: {
                      bar: {
                        horizontal: true,
                      },
                    },

                    xaxis: {
                      categories: ["Виконано", "План на 01.01.2024"],
                    },
                  },
                  series: [
                    {
                      data: [79, 100],
                    },
                  ],
                  type: "bar",
                  aditionalSetings: {
                    singleInfo: null,
                    filterSelects: [],
                  },
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "digitalization",
    title: "Цифровізація",
    menuTitle: "Цифровізація",
    type: "collapse",
    icon: <Dvr />,

    children: [
      {
        id: "cnap",
        title: "ЦНАП",
        menuTitle: "ЦНАП",
        type: "item",
        url: "/digitalization/cnap",
        target: true,
        children: [
          {
            id: "net",
            title: "Мережа",
            menuTitle: "Мережа",
            type: "item",
            url: "cnap/net",
            target: true,
            chartsGroups: [
              {
                title: "Стан утворення мережі центрів",
                charts: [
                  {
                    id: "a",
                    size: "m",
                    title: "Усі центри",
                    location: { x: 0, y: 0 },
                    chartConfig: {
                      options: {
                        chart: {
                          id: "donut-chart",
                        },

                        dataLabels: {
                          enabled: true,
                          formatter: function (
                            value,
                            { seriesIndex, dataPointIndex, w }
                          ) {
                            return w.config.series[seriesIndex];
                          },
                        },
                        plotOptions: {
                          pie: {
                            donut: {
                              size: "50%",
                            },
                          },
                        },
                        legend: {
                          labels: {
                            colors: "#fff",
                          },
                          position: "top",
                        },
                        labels: ["ЦНАП", "ТП", "ВРМ", "Дія Центр"],
                      },
                      data: {
                        Всі: {
                          Всі: [64, 2, 44, 2],
                        },
                        Берігівський: {
                          Всі: [10, 0, 2, 0],
                          Великобийганська: [1, 0, 0, 0],
                          Вилоцька: [1, 0, 0, 0],
                          Виноградівська: [1, 0, 0, 0],
                          Батівська: [1, 0, 0, 0],
                          Пийтерфолівська: [1, 0, 0, 0],
                          Королівська: [1, 0, 0, 0],
                          Великоберезька: [1, 0, 0, 0],
                          Камянська: [1, 0, 2, 0],
                          Берегівська: [1, 0, 0, 0],
                          Косоньска: [1, 0, 0, 0],
                        },
                        Мукачівський: {
                          Всі: [13, 0, 19, 1],
                          Іваовецька: [1, 0, 0, 0],
                          Полянська: [1, 0, 5, 0],
                          Мукачівська: [1, 0, 14, 1],
                          Верхньокоропецька: [1, 0, 0, 0],
                          Неліпинська: [1, 0, 0, 0],
                          Великолучівська: [1, 0, 0, 0],
                          Горондівська: [1, 0, 0, 0],
                          Жденіївська: [1, 0, 0, 0],
                          Кольчинська: [1, 0, 0, 0],
                          Нижньоворітська: [1, 0, 0, 0],
                          Свалявська: [1, 0, 0, 0],
                          Чинадіївська: [1, 0, 0, 0],
                          Воловецька: [1, 0, 0, 0],
                        },
                        Рахівський: {
                          Всі: [4, 1, 5, 0],
                          Великобичківська: [1, 1, 5, 0],
                          Рахівська: [1, 0, 0, 0],
                          Ясінянська: [1, 0, 0, 0],
                          Богданська: [1, 0, 0, 0],
                        },
                        Тячівський: {
                          Всі: [10, 0, 4, 0],
                          "Усть-Чорнянська": [1, 0, 0, 0],
                          Углянська: [1, 0, 0, 0],
                          Вільховецька: [1, 0, 0, 0],
                          Нересницька: [1, 0, 0, 0],
                          Бедевлянська: [1, 0, 0, 0],
                          Тячівська: [1, 0, 3, 0],
                          Солотвинська: [1, 0, 0, 0],
                          Буштинська: [1, 0, 0, 0],
                          Дубівська: [1, 0, 1, 0],
                          Тересвянська: [1, 0, 0, 0],
                        },
                        Ужгородський: {
                          Всі: [6, 0, 14, 1],
                          Оноківська: [1, 0, 1, 0],
                          Перечинська: [1, 0, 4, 0],
                          "Турє-Реметівська": [0, 0, 1, 0],
                          Чопська: [1, 0, 0, 0],
                          Середнянська: [1, 0, 0, 0],
                          Сюртівська: [1, 0, 0, 0],
                          "Дубриницько-Малоберезнянська": [1, 0, 0, 0],
                          Костринська: [1, 0, 0, 0],
                          Ставненьська: [1, 0, 0, 0],
                          Ужгородська: [1, 0, 0, 1],
                          Холмківська: [0, 0, 0, 0],
                          Баранинська: [1, 0, 0, 0],
                          Великоберезнянська: [1, 0, 0, 0],
                          Великодобронська: [1, 0, 0, 0],
                        },
                        Хустський: {
                          Всі: [11, 1, 9, 0],
                          Колочавська: [1, 0, 0, 0],
                          Драгівська: [1, 0, 0, 0],
                          Керецьківська: [0, 1, 2, 0],
                          Зарічанська: [1, 0, 0, 0],
                          Синевирська: [1, 0, 0, 0],
                          Горінчівська: [1, 0, 0, 0],
                          Міжгірська: [1, 0, 0, 0],
                          Іршавська: [1, 0, 0, 0],
                          Білківська: [1, 0, 4, 0],
                          Вишківська: [1, 0, 0, 0],
                          Пилипецька: [1, 0, 0, 0],
                          Хустська: [0, 0, 0, 0],
                          Довжанська: [1, 0, 3, 0],
                        },
                      },

                      type: "donut",
                      aditionalSetings: {
                        singleInfo: null,
                        filterSelects: [
                          {
                            id: nanoid(),
                            title: "Громади",
                            options: [
                              "Всі",
                              "Громада 1",
                              "Громада 2",
                              "Громада 3",
                            ],
                            subSelect: {
                              id: nanoid(),
                              title: "Райони",
                              options: ["Всі", "Район 1", "Район 2", "Район 3"],
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    id: "b",
                    size: "lh",
                    location: { x: 0, y: 0 },
                    chartConfig: {
                      options: {
                        chart: {
                          id: "bar-chart",
                        },
                        xaxis: {
                          categories: [
                            "Січень",
                            "Лютий",
                            "Березень",
                            "Квітень",
                            "Травень",
                            "Червень",
                          ],
                        },
                      },
                      series: [
                        {
                          name: "Продажі",
                          data: [
                            30, 40, 35, 10, 49, 60, 70, 80, 90, 100, 30, 40, 35,
                            10, 49, 60, 70, 80, 90, 100, 30, 40, 35, 10, 49, 60,
                            70, 80, 90, 100, 30, 40, 35, 10, 49, 60, 70, 80, 90,
                            100,
                          ],
                        },
                      ],
                      type: "bar",
                      aditionalSetings: {
                        singleInfo: {
                          title: "Цифровізація ",
                          value: "100%",
                        },
                        filterSelects: [
                          {
                            id: nanoid(),
                            title: "Громади",
                            options: [
                              "Всі",
                              "Громада 1",
                              "Громада 2",
                              "Громада 3",
                            ],
                          },
                          {
                            id: nanoid(),
                            title: "Райони",
                            options: ["Всі", "Район 1", "Район 2", "Район 3"],
                          },
                          {
                            id: nanoid(),
                            title: "Рік",
                            options: ["Всі", "2021", "2020", "2019"],
                          },
                        ],
                      },
                    },
                  },
                  {
                    id: "n",
                    size: "s",
                    location: { x: 0, y: 0 },
                    chartConfig: {
                      options: {
                        chart: {
                          id: "bar-chart",
                        },
                        xaxis: {
                          categories: [
                            "Січень",
                            "Лютий",
                            "Березень",
                            "Квітень",
                            "Травень",
                            "Червень",
                          ],
                        },
                      },
                      series: [
                        {
                          name: "Продажі",
                          data: [30, 40, 35, 10, 49, 60],
                        },
                      ],
                      type: "bar",
                      aditionalSetings: {
                        singleInfo: null,
                        filterSelects: [],
                      },
                    },
                  },
                  {
                    id: "s",
                    size: "s",
                    location: { x: 0, y: 0 },
                    chartConfig: {
                      options: {
                        chart: {
                          id: "bar-chart",
                        },
                        xaxis: {
                          categories: [
                            "Січень",
                            "Лютий",
                            "Березень",
                            "Квітень",
                            "Травень",
                            "Червень",
                          ],
                        },
                      },
                      series: [
                        {
                          name: "Продажі",
                          data: [30, 40, 35, 10, 49, 60],
                        },
                      ],
                      type: "bar",
                      aditionalSetings: null,
                    },
                  },
                ],
              },
            ],
          },
          {
            id: "inclusive",
            title: "Інклюзивність",
            menuTitle: "Інклюзивність",
            type: "item",
            url: "cnap/inclusive",
            target: true,
            chartsGroups: [
              {
                title: "Загальна",
                charts: [
                  {
                    id: "a",
                    size: "m",
                    location: { x: 0, y: 0 },
                    chartConfig: {
                      options: {
                        chart: {
                          id: "donut-chart",
                        },

                        dataLabels: {
                          enabled: true,
                          formatter: function (
                            value,
                            { seriesIndex, dataPointIndex, w }
                          ) {
                            return w.config.series[seriesIndex];
                          },
                        },
                        plotOptions: {
                          pie: {
                            donut: {
                              size: "50%",
                            },
                          },
                        },
                        legend: {
                          labels: {
                            colors: "#fff",
                          },
                          position: "top",
                        },
                        labels: ["ЦНАП", "ТП", "ВРМ", "Дія Центр"],
                      },
                      series: [64, 2, 44, 2],

                      type: "donut",
                      aditionalSetings: {
                        singleInfo: {
                          title: "Цифровізація ",
                          value: "100%",
                        },
                        filterSelects: [
                          {
                            id: nanoid(),
                            title: "Громади",
                            options: [
                              "Всі",
                              "Громада 1",
                              "Громада 2",
                              "Громада 3",
                            ],
                          },
                          {
                            id: nanoid(),
                            title: "Райони",
                            options: ["Всі", "Район 1", "Район 2", "Район 3"],
                          },
                          {
                            id: nanoid(),
                            title: "Рік",
                            options: ["Всі", "2021", "2020", "2019"],
                          },
                        ],
                      },
                    },
                  },
                  {
                    id: "b",
                    size: "lh",
                    location: { x: 0, y: 0 },
                    chartConfig: {
                      options: {
                        chart: {
                          id: "bar-chart",
                        },
                        xaxis: {
                          categories: [
                            "Січень",
                            "Лютий",
                            "Березень",
                            "Квітень",
                            "Травень",
                            "Червень",
                          ],
                        },
                      },
                      series: [
                        {
                          name: "Продажі",
                          data: [
                            30, 40, 35, 10, 49, 60, 70, 80, 90, 100, 30, 40, 35,
                            10, 49, 60, 70, 80, 90, 100, 30, 40, 35, 10, 49, 60,
                            70, 80, 90, 100, 30, 40, 35, 10, 49, 60, 70, 80, 90,
                            100,
                          ],
                        },
                      ],
                      type: "bar",
                      aditionalSetings: {
                        singleInfo: {
                          title: "Цифровізація ",
                          value: "100%",
                        },
                        filterSelects: [
                          {
                            id: nanoid(),
                            title: "Громади",
                            options: [
                              "Всі",
                              "Громада 1",
                              "Громада 2",
                              "Громада 3",
                            ],
                          },
                          {
                            id: nanoid(),
                            title: "Райони",
                            options: ["Всі", "Район 1", "Район 2", "Район 3"],
                          },
                          {
                            id: nanoid(),
                            title: "Рік",
                            options: ["Всі", "2021", "2020", "2019"],
                          },
                        ],
                      },
                    },
                  },
                  {
                    id: "n",
                    size: "s",
                    location: { x: 0, y: 0 },
                    chartConfig: {
                      options: {
                        chart: {
                          id: "bar-chart",
                        },
                        xaxis: {
                          categories: [
                            "Січень",
                            "Лютий",
                            "Березень",
                            "Квітень",
                            "Травень",
                            "Червень",
                          ],
                        },
                      },
                      series: [
                        {
                          name: "Продажі",
                          data: [30, 40, 35, 10, 49, 60],
                        },
                      ],
                      type: "bar",
                      aditionalSetings: {
                        singleInfo: null,
                        filterSelects: [],
                      },
                    },
                  },
                  {
                    id: "s",
                    size: "s",
                    location: { x: 0, y: 0 },
                    chartConfig: {
                      options: {
                        chart: {
                          id: "bar-chart",
                        },
                        xaxis: {
                          categories: [
                            "Січень",
                            "Лютий",
                            "Березень",
                            "Квітень",
                            "Травень",
                            "Червень",
                          ],
                        },
                      },
                      series: [
                        {
                          name: "Продажі",
                          data: [30, 40, 35, 10, 49, 60],
                        },
                      ],
                      type: "bar",
                      aditionalSetings: null,
                    },
                  },
                ],
              },
            ],
          },
          {
            id: "barrier-free",
            title: "Безбар'єрність",
            menuTitle: "Безбар'єрність",
            type: "item",
            url: "cnap/barrier-free",
            target: true,
          },
        ],
      },
    ],
  },
  {
    id: "infrastructure",
    title: "Інфраструктура",
    menuTitle: "Інфраструктура",
    type: "noCollapse",
    icon: <Apartment />,

    children: [
      {
        id: "all",
        title: "Інфраструктура - загальна",
        menuTitle: "Загальна",
        type: "item",
        url: "/infrastructure/all",
        target: true,
      },
    ],
  },
  {
    id: "healthcare",
    title: "Охорона здоров'я",
    menuTitle: "Охорона здоров'я",
    type: "noCollapse",
    icon: <MedicalServices />,

    children: [
      {
        id: "all",
        title: "Охорона здоров'я - загальна",
        menuTitle: "Загальна",
        type: "item",
        url: "/healthcare/all",
        target: true,
      },
    ],
  },
  {
    id: "education",
    title: "Освіта",
    menuTitle: "Освіта",
    type: "noCollapse",
    icon: <School />,

    children: [
      {
        id: "all",
        title: "Освіта- загальна",
        menuTitle: "Загальна",
        type: "item",
        url: "/education/all",
        target: true,
      },
    ],
  },
  {
    id: "economy",
    title: "Економіка",
    menuTitle: "Економіка",
    type: "noCollapse",
    icon: <Assessment />,

    children: [
      {
        id: "all",
        title: "Економіка - загальна",
        menuTitle: "Загальна",
        type: "item",
        url: "/economy/all",
        target: true,
      },
    ],
  },
];

export default pages;
