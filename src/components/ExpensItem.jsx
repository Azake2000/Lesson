
 import './ExpensItem.css'
export function ExpenseItem(props){
          const ExpenseTitle = props.title
          const ExpenseAmount  = props.amount
          
        return (
        <div className='expense-item'>
         <expenseDate date={props.date}/>
          <h2 className='expense-item__description'>{ExpenseTitle}</h2>
          <div className='expense-item__price'>${ExpenseAmount}</div>
        </div>
        
       );
};

export default ExpenseItem;