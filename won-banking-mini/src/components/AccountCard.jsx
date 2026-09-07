// components/AccountCard.jsx
import StatusBadge from "./StatusBadge";
import { formatWon, maskAccountNo } from "../utils/format";

function AccountCard({ accountNo, accountType, balance, status, showFullNo }) {
  return (
    <div className="card">
      <div className="row">
        <span className="muted">{accountType}</span>
        <StatusBadge status={status} />
      </div>
      <p className="muted">{showFullNo ? accountNo : maskAccountNo(accountNo)}</p>
      <strong className="balance">{formatWon(balance)}</strong>
    </div>
  );
}

export default AccountCard;