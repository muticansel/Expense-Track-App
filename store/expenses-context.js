import { createContext } from "react";
import { DUMMY_EXPENSES } from "../components/Expenses/ExpensesOutput";

const ExpensesContext = createContext({
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
