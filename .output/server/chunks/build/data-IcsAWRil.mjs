import { a as img02, i as img06 } from './img-02-Cy5363DM.mjs';
import { i as img03 } from './img-03-Ccs588TG.mjs';
import { i as img04 } from './img-04-DeVAzRtv.mjs';
import { i as img05 } from './img-05-Dk9gumKl.mjs';

const products = [
  { image: img02, name: "Mesh Ergonomic Black Chair", rating: 5, sales: 798 },
  { image: img03, name: "Fastcolors Typography Men", rating: 5, sales: 695 },
  { image: img04, name: "Mesh Ergonomic Green Chair", rating: 5, sales: 985 },
  { image: img05, name: "Techel Black Bluetooth Soundbar", rating: 5, sales: 813 },
  { image: img06, name: "Bovet Fleurier AIFSQ029", rating: 5, sales: 915 },
  { image: img03, name: "Fastcolors Typography Men", rating: 5, sales: 785 }
];
const orders = [
  {
    id: 1,
    orderId: "#TWT5015100365",
    customerName: "Marie Prohaska",
    location: "Germany",
    orderDate: "08 Jun, 2023",
    paymentMethod: "Credit Card",
    quantity: 5,
    price: 146.99,
    totalAmount: 749.95,
    status: "Delivered",
    statusClass: "bg-success/10 text-success border border-success/30"
  },
  {
    id: 2,
    orderId: "#TWT5015100366",
    customerName: "Jaqueline Hammes",
    location: "France",
    orderDate: "11 July, 2023",
    paymentMethod: "Paypal",
    quantity: 2,
    price: 450,
    totalAmount: 900,
    status: "Shipping",
    statusClass: "bg-info/10 text-info border border-info/30"
  },
  {
    id: 3,
    orderId: "#TWT5015100367",
    customerName: "Marlene Hirthe",
    location: "Argentina",
    orderDate: "21 Aug, 2023",
    paymentMethod: "Visa Card",
    quantity: 3,
    price: 147.23,
    totalAmount: 294.46,
    status: "New",
    statusClass: "bg-secondary/10 text-secondary border border-secondary/30"
  },
  {
    id: 4,
    orderId: "#TWT5015100368",
    customerName: "Reagan Larson",
    location: "Belgium",
    orderDate: "28 Nov, 2023",
    paymentMethod: "American Express",
    quantity: 1,
    price: 579.12,
    totalAmount: 579.12,
    status: "Delivered",
    statusClass: "bg-success/10 text-success border border-success/30"
  },
  {
    id: 5,
    orderId: "#TWT5015100369",
    customerName: "Glennie Langosh",
    location: "Australia",
    orderDate: "11 Oct, 2023",
    paymentMethod: "American Express",
    quantity: 1,
    price: 349,
    totalAmount: 349,
    status: "Pending",
    statusClass: "bg-warning/10 text-warning border border-warning/30"
  },
  {
    id: 6,
    orderId: "#TWT5015100370",
    customerName: "Rickie Cremin",
    location: "United States",
    orderDate: "16 Feb, 2023",
    paymentMethod: "COD",
    quantity: 3,
    price: 89.49,
    totalAmount: 268.47,
    status: "Delivered",
    statusClass: "bg-success/10 text-success border border-success/30"
  },
  {
    id: 7,
    orderId: "#TWT5015100371",
    customerName: "Domenic Tromp",
    location: "Afghanistan",
    orderDate: "21 Jan, 2023",
    paymentMethod: "PayPal",
    quantity: 2,
    price: 739.79,
    totalAmount: 1479.58,
    status: "New",
    statusClass: "bg-secondary/10 text-secondary border border-secondary/30"
  }
];
const series = [
  {
    name: "Pending",
    data: [17, 16, 19, 22, 24, 29, 25, 20, 25, 31, 28, 35]
  },
  {
    name: "New Orders",
    data: [30, 24, 32, 27, 16, 22, 32, 21, 24, 20, 38, 28]
  }
];
const chartOptions = {
  chart: {
    type: "line",
    height: 275,
    toolbar: {
      show: false
    }
  },
  stroke: {
    curve: "smooth",
    width: 2
  },
  colors: ["#2b7fff", "#2b7fff"],
  dataLabels: {
    enabled: false
  },
  grid: {
    show: true,
    padding: {
      top: -20,
      right: 0
    }
  },
  markers: {
    hover: {
      sizeOffset: 4
    }
  }
};
const salesseries = [
  {
    name: "Total Sales",
    data: [44, 55, 41, 67, 22, 43, 21, 49, 20, 41, 67, 22]
  },
  {
    name: "Total Profit",
    data: [11, 17, 15, 15, 21, 14, 15, 13, 5, 15, 15, 21]
  }
];
const salesOptions = {
  chart: {
    type: "bar",
    height: 310,
    stacked: true,
    stackType: "100%",
    parentHeightOffset: 0,
    toolbar: {
      show: false
    }
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  },
  tooltip: {
    y: {
      formatter: function(val) {
        return "$" + val + "k";
      }
    }
  },
  grid: {
    show: true,
    padding: {
      top: -20,
      right: -10,
      bottom: -10
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "50%"
    }
  },
  colors: ["#2b7fff", "#2b7fff", "var(--color-teal-500)"],
  fill: {
    opacity: 1
  },
  legend: {
    position: "bottom"
  }
};
const initTrafficResourceseries = [44, 34, 22];
const initTrafficResources = {
  chart: {
    height: 222,
    type: "radialBar"
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        total: {
          show: true,
          label: "Total",
          formatter: function() {
            return "875";
          }
        }
      }
    }
  },
  grid: {
    show: true,
    padding: {
      top: -8,
      bottom: -15,
      left: 0,
      right: 0
    }
  },
  colors: ["#2b7fff", "#facc15", "#4ade80", "#f87171"],
  labels: ["Direct", "Referrals", "Search Engine"]
};
const salesThisMonthChartseries = [
  {
    type: "rangeArea",
    name: "Profit Range",
    data: [
      { x: "Mar", y: [900, 2900] },
      { x: "Apr", y: [1400, 2700] },
      { x: "May", y: [2600, 3900] },
      { x: "Jun", y: [500, 1700] },
      { x: "Jul", y: [1900, 2300] },
      { x: "Aug", y: [1e3, 1500] }
    ]
  },
  {
    type: "rangeArea",
    name: "Expense Range",
    data: [
      { x: "Mar", y: [3900, 4900] },
      { x: "Apr", y: [3400, 3900] },
      { x: "May", y: [5100, 5900] },
      { x: "Jun", y: [5400, 6700] },
      { x: "Jul", y: [4300, 4600] },
      { x: "Aug", y: [2100, 2900] }
    ]
  },
  {
    type: "line",
    name: "Profit Median",
    data: [
      { x: "Mar", y: 1900 },
      { x: "Apr", y: 2200 },
      { x: "May", y: 3e3 },
      { x: "Jun", y: 1e3 },
      { x: "Jul", y: 2100 },
      { x: "Aug", y: 1200 },
      { x: "Sep", y: 2250 },
      { x: "Oct", y: 2900 }
    ]
  },
  {
    type: "line",
    name: "Expense Median",
    data: [
      { x: "Mar", y: 4300 },
      { x: "Apr", y: 3700 },
      { x: "May", y: 5500 },
      { x: "Jun", y: 5900 },
      { x: "Jul", y: 4500 },
      { x: "Aug", y: 3500 },
      { x: "Sep", y: 2e3 },
      { x: "Oct", y: 1800 }
    ]
  }
];
const salesThisMonthChart = {
  chart: {
    height: 280,
    type: "rangeArea",
    animations: {
      speed: 500
    },
    toolbar: {
      show: false
    }
  },
  colors: ["#2b7fff", "#facc15", "#4ade80", "#f87171"],
  dataLabels: {
    enabled: false
  },
  fill: {
    opacity: [0.24, 0.24, 1, 1]
  },
  forecastDataPoints: {
    count: 2
  },
  yaxis: {
    show: false
  },
  stroke: {
    curve: "straight",
    width: [0, 0, 2, 2]
  },
  grid: {
    show: true,
    padding: {
      top: -8,
      left: 10,
      right: 0
    }
  },
  legend: {
    show: true,
    customLegendItems: ["Team B", "Team A"],
    inverseOrder: true
  },
  markers: {
    hover: {
      sizeOffset: 5
    }
  }
};
const audienceChartseries = [
  {
    name: "Male",
    data: [44, 55, 41, 67, 22, 43, 26]
  },
  {
    name: "Female",
    data: [13, 23, 20, 8, 13, 27, 41]
  }
];
const audienceChartOptions = {
  chart: {
    type: "bar",
    height: 340,
    stacked: true,
    toolbar: {
      show: false
    },
    zoom: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 6,
      columnWidth: "44%",
      dataLabels: {
        total: {
          enabled: true,
          style: {
            fontSize: "13px",
            fontWeight: 600
          }
        }
      }
    }
  },
  xaxis: {
    type: "datetime",
    categories: ["01/01/2023 GMT", "01/02/2023 GMT", "01/03/2023 GMT", "01/04/2023 GMT", "01/05/2023 GMT", "01/06/2023 GMT", "01/07/2023 GMT"]
  },
  colors: ["#f75211ff", "#2b7fff"],
  legend: {
    position: "top",
    horizontalAlign: "right"
  },
  fill: {
    opacity: 1
  }
};

export { audienceChartOptions, audienceChartseries, chartOptions, initTrafficResources, initTrafficResourceseries, orders, products, salesOptions, salesThisMonthChart, salesThisMonthChartseries, salesseries, series };
//# sourceMappingURL=data-IcsAWRil.mjs.map
