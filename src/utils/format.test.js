import { describe, it, expect } from 'vitest'
import { formatWon, maskAccountNo, formatWonMasked } from './format'

describe('format 유틸', () => {
  it('formatWon: 숫자를 "1,523,000원" 형태로 바꾼다', () => {
    // Given: 1523000 이라는 숫자 데이터 (입력값)
    // When: formatWon 함수에 값을 넣고 실행
    // Then: 반환값이 천 단위 콤마가 포함된 '1,523,000원' 문자열인지 검증
    expect(formatWon(1523000)).toBe('1,523,000원')
  })

  it('maskAccountNo: 계좌번호 앞을 가리고 마지막 한 자리만 보여준다', () => {
    // Given: '1002-345-678901' 이라는 원본 계좌번호 문자열 (입력값)
    // When: maskAccountNo 함수에 입력값을 넣고 실행
    // Then: 반환값이 '1002-345-6****1' 와 일치하는지 검증
    expect(maskAccountNo('1002-345-678901')).toBe('1002-345-6****1')
  })

  it('formatWonMasked: hide 가 true 면 금액을 가린다', () => {
    // [첫 번째 검증]
    // Given: 금액 1000, 마스킹 여부 true
    // When: formatWonMasked 함수 실행
    // Then: 반환값이 '••••••원' 인지 검증
    expect(formatWonMasked(1000, true)).toBe('••••••원')

    // [두 번째 검증]
    // Given: 금액 1000, 마스킹 여부 false
    // When: formatWonMasked 함수 실행
    // Then: 반환값이 '1,000원' 인지 검증
    expect(formatWonMasked(1000, false)).toBe('1,000원')
  })

  // 이상한 값을 넣어봐야 진짜 검증입니다.
  // 아래 두 가지는 현재 구현이 가진 한계를 "기록해 두는" 테스트입니다.
  it('경계값: 0원과 음수도 정상적으로 처리한다', () => {
    expect(formatWon(0)).toBe('0원')
    expect(formatWon(-1523000)).toBe('-1,523,000원')
  })

  it('경계값: 짧은 계좌번호는 마스킹이 원본을 통째로 지운다 (알려진 한계)', () => {
    // '123' 처럼 5자리보다 짧으면 slice(0, -5) 가 빈 문자열이 되어
    // 계좌번호가 통째로 사라집니다. 지금 데이터에는 없지만 서버 연동 시 만날 수 있습니다.
    expect(maskAccountNo('123')).toBe('****3')
    expect(maskAccountNo('')).toBe('****')
  })
})
