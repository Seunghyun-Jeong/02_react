// components/AccountCard.jsx
import StatusBadge from "./StatusBadge";
import { formatWon, maskAccountNo, formatWonMasked } from "../utils/format";

function AccountCard({ accountNo, accountType, balance, status, showFullNo, showAmount }) {
  return (
    <div className="card">
      {/* console.log('❤️', showAmount) */}
      
      <div className="row">
        <span className="muted">{accountType}</span>
        <StatusBadge status={status} />
      </div>
      <p className="muted">{showFullNo ? accountNo : maskAccountNo(accountNo)}</p>
      <strong className="balance">{ formatWonMasked(balance, showAmount) }</strong>

      {/* Account Card 안에 버튼을 누르면 1만원 입금 추가*/}
      <button className="btn" onClick={ (balance) => { balance + 10000 }}>1만원 입금</button>
    </div>
  );
}

export default AccountCard;