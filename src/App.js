
import './App.css';
import ExpenseItem from './components/ExpensItem';

function App() {
  const expense = [
    {
      id:'el1',
      title:'Toiler Paper',
      date:new Date(2023,4,12),
      amount:1.5

    },
    {
      id:'el2',
      title:'Car Insuranse',
      date:new Date(2023,2,20),
      amount:1.5

    },
    {
      id:'el3',
      title:'Expenses',
      date:new Date (2022,6,31),
      amount:1.5
    }
  ]
  return (
    <div className="App">
      <ExpenseItem 
      title={expense[0].title} 
      date={expense[0].date} 
      amount={expense[0].amount} 
      />
       <ExpenseItem 
      title={expense[1].title} 
      date={expense[1].date} 
      amount={expense[1].amount}
       />
       <ExpenseItem
       title={expense[2].title}
       date={expense[2].date}
       amount={expense[2].amount}
       />
    </div>
  );

}

export default App;
