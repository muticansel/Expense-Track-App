import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2021, 6, 1),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2024, 2, 12),
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
    date: new Date(2024, 5, 12),
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

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD_EXPENSE":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id }, ...state];
    case "UPDATE_EXPENSE":
      const relatedExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const releatedExpense = state[relatedExpenseIndex];
      const updatedItem = { ...releatedExpense, ...action.payload.expenseData };
      const updatedExpenses = [...state];
      updatedExpenses[relatedExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE_EXPENSE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD_EXPENSE", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "ADD_EXPENSE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "ADD_EXPENSE", payload: { id, expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense,
    updateExpense,
    deleteExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
