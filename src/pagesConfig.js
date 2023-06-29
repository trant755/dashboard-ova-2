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
    type: "collapse",
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
            title: "Загальна",
            charts: [
              {
                id: "b",
                size: "s",
                location: { x: 0, y: 0 },
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
        id: "all",
        title: "Цифровізація - загальна",
        menuTitle: "Загальна",
        type: "item",
        url: "/digitalization/all",
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
                        options: ["Всі", "Громада 1", "Громада 2", "Громада 3"],
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
                        30, 40, 35, 10, 49, 60, 70, 80, 90, 100, 30, 40, 35, 10,
                        49, 60, 70, 80, 90, 100, 30, 40, 35, 10, 49, 60, 70, 80,
                        90, 100, 30, 40, 35, 10, 49, 60, 70, 80, 90, 100,
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
                        options: ["Всі", "Громада 1", "Громада 2", "Громада 3"],
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
        target: true,
      },
      {
        id: "cnap",
        title: "ЦНАП",
        menuTitle: "ЦНАП",
        type: "item",
        url: "/digitalization/cnap",
        target: true,
        children: [
          {
            id: "inclusive",
            title: "Інклюзивність",
            menuTitle: "Інклюзивність",
            type: "item",
            url: "cnap/inclusive",
            target: true,
            charts: [
              {
                id: "a",
                size: "m",
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
                },
              },
            ],
          },
          {
            id: "economy",
            title: "Економіка",
            menuTitle: "Економіка",
            type: "item",
            url: "cnap/economy",
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
    type: "collapse",
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
    type: "collapse",
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
    type: "collapse",
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
    type: "collapse",
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
