import { a as avatar10 } from './avatar-10-DjVkpQI6.mjs';
import { a as avatar2 } from './avatar-2-BDMEXCZB.mjs';
import { a as avatar3 } from './avatar-3-DffBtZtQ.mjs';
import { a as avatar4 } from './avatar-4-VVt-Y7Qo.mjs';

const applicationReceivedChartseries = [
  {
    name: "Total Application",
    type: "area",
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
  },
  {
    name: "Hired Candidates",
    type: "line",
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
  }
];
const applicationReceivedChartOptions = {
  chart: {
    height: 315,
    type: "line",
    stacked: false,
    toolbar: {
      show: false
    }
  },
  stroke: {
    width: [2, 2],
    curve: "smooth"
  },
  plotOptions: {
    bar: {
      columnWidth: "50%"
    }
  },
  fill: {
    opacity: [0.03, 1],
    gradient: {
      inverseColors: false,
      shade: "light",
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100]
    }
  },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  colors: ["#2b7fff", "#00c951"],
  markers: {
    size: 0
  },
  grid: {
    padding: {
      top: -15,
      right: 0
    }
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function(y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " points";
        }
        return y;
      }
    }
  }
};
const totalEmployeeseries = [10];
const totalEmployeeOptions = {
  chart: {
    height: 110,
    type: "radialBar",
    parentHeightOffset: 0,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "50%"
      },
      track: {
        margin: 2
      },
      dataLabels: {
        show: false
      }
    }
  },
  grid: {
    padding: {
      top: -15,
      bottom: -15
    }
  },
  stroke: {
    lineCap: "round"
  },
  labels: ["Total Employee"],
  colors: ["#2b7fff"]
};
const totalApplicationseries = [60];
const totalApplicationOptions = {
  chart: {
    height: 110,
    type: "radialBar",
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "50%"
      },
      track: {
        margin: 2
      },
      dataLabels: {
        show: false
      }
    }
  },
  grid: {
    padding: {
      top: -15,
      bottom: -15
    }
  },
  stroke: {
    lineCap: "round"
  },
  labels: ["Total Employee"],
  colors: ["#bc2bffff"]
};
const hiredCandidatesseries = [25];
const hiredCandidatesOptions = {
  chart: {
    height: 110,
    type: "radialBar",
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "50%"
      },
      track: {
        margin: 2
      },
      dataLabels: {
        show: false
      }
    }
  },
  grid: {
    padding: {
      top: -15,
      bottom: -15
    }
  },
  stroke: {
    lineCap: "round"
  },
  labels: ["Total Employee"],
  colors: ["#00c951"]
};
const rejectedCandidatesseries = [75];
const rejectedCandidatesOptions = {
  chart: {
    height: 110,
    type: "radialBar",
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "50%"
      },
      track: {
        margin: 2
      },
      dataLabels: {
        show: false
      }
    }
  },
  grid: {
    padding: {
      top: -15,
      bottom: -15
    }
  },
  stroke: {
    lineCap: "round"
  },
  labels: ["Total Employee"],
  colors: ["#ff6900"]
};
const totalProjectChartseries = [
  {
    name: "New",
    data: [44, 55, 41, 67, 22, 43, 14, 55, 41]
  },
  {
    name: "Pending",
    data: [13, 23, 20, 8, 13, 27, 8, 20, 8]
  },
  {
    name: "Completed",
    data: [11, 17, 15, 15, 21, 14, 24, 11, 17]
  },
  {
    name: "Rejected",
    data: [21, 7, 25, 13, 22, 8, 13, 7, 25]
  }
];
const totalProjectChartOptions = {
  chart: {
    type: "bar",
    height: 353,
    stacked: true,
    zoom: {
      enabled: true
    },
    toolbar: {
      show: false
    },
    parentHeightOffset: 0
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 2,
      columnWidth: "25%"
    }
  },
  grid: {
    padding: {
      top: -15,
      bottom: 5,
      right: 0
    }
  },
  xaxis: {
    categories: ["01", "02", "03", "04", "05", "06", "07", "08", "09"]
  },
  dataLabels: {
    enabled: false
  },
  colors: ["#2b7fff", "#facc15", "#4ade80", "#f87171"],
  legend: {
    position: "bottom"
  },
  fill: {
    opacity: 1
  }
};
const employees = [
  {
    id: "TW-1001",
    name: "Kristen Redden",
    email: "kredden@tailwick.com",
    designation: "Designer",
    performance: "Good",
    textcolor: "text-green-700",
    status: "Active",
    statusColor: "bg-success/10 text-success border border-success/30",
    avatar: avatar10
  },
  {
    id: "TW-1002",
    name: "Howard George",
    email: "george@tailwick.com",
    designation: "ASP.Net Developer",
    performance: "Low",
    textcolor: "text-danger",
    status: "Active",
    statusColor: "bg-success/10 text-success border border-success/30",
    avatar: avatar2
  },
  {
    id: "TW-1003",
    name: "Laura Dawson",
    email: "laura@tailwick.com",
    designation: "React Developer",
    performance: "Good",
    textcolor: "text-green-700",
    status: "Active",
    statusColor: "bg-success/10 text-success border border-success/30",
    avatar: avatar3
  },
  {
    id: "TW-1004",
    name: "Joseph Morgan",
    email: "morgan@tailwick.com",
    designation: "Angular Developer",
    performance: "Good",
    textcolor: "text-green-700",
    status: "Disabled",
    statusColor: "text-default-600 border border-default-200 rounded",
    avatar: avatar4
  },
  {
    id: "TW-1005",
    name: "Jeremy Rose",
    email: "rose@tailwick.com",
    designation: "UI / UX Designer",
    performance: "Low",
    textcolor: "text-danger",
    status: "Disabled",
    statusColor: "text-default-600 border border-default-200 rounded",
    avatar: avatar4
  }
];

export { applicationReceivedChartOptions, applicationReceivedChartseries, employees, hiredCandidatesOptions, hiredCandidatesseries, rejectedCandidatesOptions, rejectedCandidatesseries, totalApplicationOptions, totalApplicationseries, totalEmployeeOptions, totalEmployeeseries, totalProjectChartOptions, totalProjectChartseries };
//# sourceMappingURL=data-DSw_rQcB.mjs.map
