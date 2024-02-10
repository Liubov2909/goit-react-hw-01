import style from  "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
  return (
    <table className={style.box}>
  <thead>
    <tr>
      <th className={style.header}>Type</th>
      <th className={style.header}>Amount</th>
      <th className={style.header}>Currency</th>
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