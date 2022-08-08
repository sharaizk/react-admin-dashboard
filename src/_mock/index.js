export const profileMock = {
  name: "John Doe",
  profileImage:
    "https://img.freepik.com/free-vector/mysterious-mafia-man-wearing-hat_52683-34829.jpg?w=1060&t=st=1659853331~exp=1659853931~hmac=95918e179820eb42f3f0d29c0732b0ae7959e557f83d3e502c6bd80c79be7a1e",
  email: "Johndoe@mock.com",
  role: "Super Admin",
};

export const productEarnings = [
  {
    id: "pro-ern-01",
    stat: "80%",
    totalIncome: 8210,
    small: {
      isProfit: true,
      value: 3.96,
    },
    main: {
      isProfit: true,
      value: 20.9,
    },
  },

  {
    id: "pro-ern-02",
    stat: "79%",
    totalIncome: 5220,
    small: {
      isProfit: true,
      value: 9.64,
    },
    main: {
      isProfit: true,
      value: 11.76,
    },
  },
  {
    stat: "52%",
    totalIncome: 8192,
    small: {
      isProfit: true,
      value: 5.13,
    },
    main: {
      isProfit: true,
      value: 13.45,
    },
  },
];

export const monthlyStats = [
  {
    name: "Business Pro",
    data: [48000, 40000, 30000, 5000],
    color: "#895BF1",
  },
  {
    name: "Basic Product",
    data: [49000, 50000, 35000, 25000],
    color: "#FE6BBA",
  },
];

export const monthlyStatsOptions = {
  plotOptions: {
    chart: {
      foreColor: "red",
    },
    bar: {
      horizontal: false,
      columnWidth: "55%",
      borderRadius: 5,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 4,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
  },
  yaxis: {
    title: {
      text: "Thousands",
    },
  },
  fill: {
    opacity: 1,
    colors: ["#895BF1", "#FE6BBA"],
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
};

export const dataGraphStats = [
  {
    name: "Product Sales",
    data: [44, 55, 41, 67, 22, 43, 40, 38, 20, 35, 11, 22],
    color: '#0090FF',
  },
  {
    name: "Marketing Sales",
    data: [13, 23, 20, 8, 13, 27, 44, 55, 41, 67, 22, 33],
    color: '#D9E1E7',
  },
];

export const dataGraphOptions = {
  chart: {
    type: "bar",
    stacked: true,
  },
  plotOptions: {
    chart: {
      foreColor: "red",
    },
    bar: {
      horizontal: false,
      columnWidth: "55%",
      borderRadius: 5,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  yaxis: {
    title: {
      text: "Product Sale (1K $)",
    },
  },
  fill: {
    opacity: 1,
    colors: ["#895BF1", "#FE6BBA"],
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
};
