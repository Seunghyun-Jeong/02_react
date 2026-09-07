// components/AccountCard.jsx
import StatusBadge from "./StatusBadge";
import { formatWon, maskAccountNo } from "../utils/format";

function AccountCard({ accountNo, accountType, balance, status }) {
  return (
    <div className="card">
      <div className="row">
        <span className="muted">{accountType}</span>
        <StatusBadge status={status} />
      </div>
      <p className="muted">{maskAccountNo(accountNo)}</p>
      <strong className="balance">{formatWon(balance)}</strong>
    </div>
  );
}

export default AccountCard;