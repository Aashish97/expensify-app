import moment from "moment";
import selectExpenses from "./../../selectors/expenses";

const expenses = [
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

test("Should filter by text value", () => {
  const filters = {
    text: "e",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1]]);
});

test("Should filter by startDate value", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);
});

test("Should filter by endDate value", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0).add(2, 'days'),
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]]);
});

test("Should filter by sort by date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test("Should filter by sort by amount", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});
