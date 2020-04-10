import React from "react";
import { shallow } from "enzyme";
import {ExpensesSummary} from "./../../components/ExpensesSummary";

test("should correctly render ExpensesSummary with 1 expense", () => {
  const wrapper = shallow(
    <ExpensesSummary expensesCount={1} expensesTotal={500} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should correctly render ExpensesSummary with 1 expense", () => {
    const wrapper = shallow(
        <ExpensesSummary expensesCount={15} expensesTotal={503452310} />
      );
      expect(wrapper).toMatchSnapshot();
});
