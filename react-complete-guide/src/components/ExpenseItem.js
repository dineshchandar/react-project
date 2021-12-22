import "./Expense.css"
function ExpenseItem(props){

    const expenseItemName = props.expenseItemName
    const expenseDate = props.expenseDate
    const expenseMonth = props.expenseDate.toLocaleString('en-US',{month:'long'})
    const expenseYear = props.expenseDate.getFullYear()
    const expenseDay = props.expenseDate.toLocaleString('en-US',{day:'2-digit'})
    const expenseAmount = props.expenseAmount

    return(
        <div className="expense">
            <div className="expense__date">
                <div>{expenseMonth}</div>
                <div>{expenseDay}</div>
                <div>{expenseYear}</div>
            </div>
            <div className="expense__name">{expenseItemName}</div>
            <div className="expense__amount">{expenseAmount}</div>
        </div>
    )
}

export default ExpenseItem;