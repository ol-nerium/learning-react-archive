// import { transactionType } from "../../types/types";

import type { transactionType } from "../../types/types";

export default function Transaction(props: transactionType) {
  return (
    <tr key={props.id}>
      <td>{props.type}</td>
      <td>{props.amount}</td>
      <td>{props.currency}</td>
    </tr>
  );
}
