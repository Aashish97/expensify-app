import moment from "moment";

export default [
  {
    id: "1",
    description: "Gum",
    amount: 130,
    createdAt: 0,
    note: "",
  },
  {
    id: "2",
    description: "Rent",
    amount: 15000,
    createdAt: moment(0).subtract(4, "days").valueOf(),
    note: "",
  },
  {
    id: "3",
    description: "Other",
    amount: 2000,
    createdAt: moment(0).add(4, "days").valueOf(),
    note: "",
  },
];
