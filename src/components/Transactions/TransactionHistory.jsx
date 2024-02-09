import "./TransactionHistory.css";

export const TransactionHistory = ({ items }) => {
  return (
    <table className="table-box">
  <thead>
    <tr>
      <th className="table-header">Type</th>
      <th className="table-header">Amount</th>
      <th className="table-header">Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map((items) => (
          <tr key={items.id}>
            <td>{items.type}</td>
            <td>{items.amount}</td>
            <td>{items.currency}</td>
          </tr>
        ))}
  </tbody>
</table>
  )
}