import { Table, TableHeader, TableBody } from "./TransactionHistory.styled";

import Transaction from "./Transaction";

import type { transactionType } from "../../types/types";
export default function TransactionHistory({
  items,
}: {
  items: transactionType[];
}) {
  return (
    <Table>
      <TableHeader>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHeader>

      <TableBody>
        {items.map((item) => (
          <Transaction
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </TableBody>
    </Table>
  );
}
