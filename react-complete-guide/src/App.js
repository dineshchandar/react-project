import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {

  const expenseTitle = "Fuel"
  const expenseDate = new Date(2021,11,22)
  const expenseAmount = 2000

  return (
    <div className="App">
      <h1>Learning React</h1>
      <ExpenseItem expenseItemName={expenseTitle} expenseAmount={expenseAmount} expenseDate={expenseDate}/>
      <ExpenseItem expenseItemName={expenseTitle} expenseAmount={expenseAmount} expenseDate={expenseDate}/>
      <ExpenseItem expenseItemName={expenseTitle} expenseAmount={expenseAmount} expenseDate={expenseDate}/>
    </div>
  );
}

export default App;
