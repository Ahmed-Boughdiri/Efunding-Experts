interface DataSetProps {
  label: String;
  data: Number[];
  backgroundColor: String;
  type?: String;
  borderColor?: String;
}

interface StatisticProps {
  labels: String[];
  datasets: DataSetProps[];
}

export const statisticsData: StatisticProps = {
  labels: [
    "Jan",
    "FEB",
    "MARS",
    "APR",
    "MAY",
    "JUN",
    "JUI",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ],
  datasets: [
    {
      label: "Clients",
      data: [15, 18, 12, 10, 18, 20, 22, 17, 16, 18, 14, 10],
      backgroundColor: "rgba(0,0,0,0.4)",
    },
    {
      label: "Refferals",
      type: "line",
      data: [70, 60, 40, 70, 80, 100, 110, 60, 70, 70, 80, 90],
      backgroundColor: "rgba(0,123,255,0.4)",
      borderColor: "#007bff",
    },
  ],
};

export const commisionsData: StatisticProps = {
  labels: [
    "Jan",
    "FEB",
    "MARS",
    "APR",
    "MAY",
    "JUN",
    "JUI",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ],
  datasets: [
    {
      label: "Refferals",
      type: "line",
      data: [70, 60, 40, 70, 80, 100, 110, 60, 70, 70, 80, 90],
      backgroundColor: "rgba(0,123,255,0.4)",
      borderColor: "#007bff",
    },
  ],
};

export interface RecentActivitiesProps {
  name: String;
  pocessor: String;
  notes: String;
  image: String;
  date: Date;
}

export const recentActivities: RecentActivitiesProps[] = [
  {
    name: "Ray Cathey",
    pocessor: "Pocessor",
    notes: "Additional docs uploaded to lenders and we are processing",
    image: "chat",
    date: new Date(Date.parse("2020/10/9")),
  },
  {
    name: "Shane Finlay",
    pocessor: "Pocessor",
    notes: "Thanks I have followed up set for end of the week",
    image: "chat",
    date: new Date(Date.parse("2020/10/10")),
  },
  {
    name: "Ricardo Nivaro",
    pocessor: "Pocessor",
    notes:
      "Ricardo mentioned he does not wish to move forward :( closing this one for now, he did mention once he has 2020 field he will come back to us for options.",
    image: "chat",
    date: new Date(Date.parse("2020/10/9")),
  },
];

export interface RecentClients {
  name: String;
  status: String;
}

export const recentClients: RecentClients[] = [
  {
    name: "Marcia Jones",
    status: "waiting",
  },
  {
    name: "Brain Hurling",
    status: "not qualified",
  },
];
