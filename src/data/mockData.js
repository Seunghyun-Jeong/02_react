

// 최근 거래 내역 (계좌 1번의 거래만 예시로 담았습니다)
export const transactions = [
  {
    txId: 1,
    accountId: 1,
    txType: "출금",
    amount: 12000,
    balanceAfter: 1511000,
    category: "식비",
    memo: "점심",
    counterparty: "김밥천국",
    txDatetime: "2026-09-02T12:31:00",
  },
  {
    txId: 2,
    accountId: 1,
    txType: "입금",
    amount: 2400000,
    balanceAfter: 3911000,
    category: "급여",
    memo: "9월 급여",
    counterparty: "우리회사",
    txDatetime: "2026-09-01T09:00:00",
  },
  {
    txId: 3,
    accountId: 1,
    txType: "출금",
    amount: 45000,
    balanceAfter: 3866000,
    category: "쇼핑",
    memo: "운동화",
    counterparty: "무신사",
    txDatetime: "2026-08-31T20:14:00",
  },
]
