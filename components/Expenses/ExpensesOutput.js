import { View, StyleSheet } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

export const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "New Desk (Glass)",
    amount: 500,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e6",
    title: "Macbook Pro",
    amount: 1000,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e7",
    title: "Adidas Shoes",
    amount: 110,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e8",
    title: "Nike T-Shirt",
    amount: 15,
    date: new Date(2021, 5, 12),
  },

  {
    id: "e9",
    title: "Macbook Pro M1",
    amount: 990,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e10",
    title: "Apple Watch",
    amount: 110,
    date: new Date(2021, 5, 12),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={expensesPeriod} expenses={DUMMY_EXPENSES} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
