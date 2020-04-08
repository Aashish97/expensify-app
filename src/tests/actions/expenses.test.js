import {
  addExpense,
  removeExpense,
  editExpense,
} from "./../../actions/expenses";

test("Should setup remove expense action object", () => {
  const action = removeExpense({ id: "345232ab" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "345232ab",
  });
});

test("Should setup edit expense action object", () => {
  const action = editExpense("345232ab", { note: "New note added" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "345232ab",
    updates: {
      note: "New note added",
    },
  });
});

test("Should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "Rent",
    amount: 1000,
    createdAt: 1000,
    note: "Last month rent",
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test("Should setup add expense action object with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
    },
  });
});
