import { useState, useEffect } from 'react';

function ExchangeRate() {
  const [rate, setRate] = useState(null); // null은 나중에 바꿔끼울 자리의 값없음 의미
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    // fetch는 data를 API를 호출해서 가져오는 JS의 비동기 함수
    fetch("https://open.er-api.com/v6/latest/USD")
      .then((res) => {
        if (!res.ok) throw new Error("응답 오류 " + res.status);
        return res.json();
      })
      .then((data) => setRate(data.rates.KRW))
      .catch((e) => setError(e.message)) // 예외(에러의 경우 처리 동작)
      .finally(() => setLoading(false)); // 성공하든 실패하든 이거는 하고 끝내세요
  }, []);

  if (loading) return <p className="muted">환율을 불러오는 중...</p>;
  if (error) return <p className="muted">환율을 못 불러왔습니다</p>;
  return <p>1달러 = {Math.round(rate).toLocaleString("ko-KR")}원</p>;
}

export default ExchangeRate;