import { useFetch } from '../hooks/useFetch';
import { fetchUsdKrw } from '../api/exchange'

function ExchangeRate() {
  const { data: rate, loading, error, reload } = useFetch(fetchUsdKrw); // 함수 안에서 불러서 사용하는 함수를 CallBack

  if (loading) return <p className="muted">환율을 불러오는 중...</p>;
  if (error) return <button className="btn" onClick={reload}>다시 시도</button>;
  return <p>1달러 = {Math.round(rate).toLocaleString("ko-KR")}원</p>;
}

export default ExchangeRate;