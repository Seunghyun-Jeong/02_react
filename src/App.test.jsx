import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

// 리팩터링 중 "동작이 안 바뀌었다"를 증명해 주는 안전망 테스트입니다.
describe('App 안전망 테스트', () => {
  it('"1만원 입금" 버튼을 누르면 총 자산이 10,000원 늘어난다', async () => {
    const user = userEvent.setup()
    render(<App />)

    // 처음 총 자산: 1,523,000 + 1,200,000 + 397,000 = 3,120,000
    expect(screen.getByText('3,120,000원')).toBeInTheDocument()

    // 첫 번째 계좌의 입금 버튼을 누른다
    await user.click(screen.getAllByRole('button', { name: '1만원 입금' })[0])

    expect(screen.getByText('3,130,000원')).toBeInTheDocument()
  })

  it('"1만원 입금" 을 누르면 최근 거래에 입금 내역이 한 건 추가된다', async () => {
    const user = userEvent.setup()
    render(<App />)

    // 입금 전에는 "입금 버튼" 이라는 상대방이 없다
    expect(screen.queryByText('입금 버튼')).not.toBeInTheDocument()

    await user.click(screen.getAllByRole('button', { name: '1만원 입금' })[0])

    expect(screen.getByText('입금 버튼')).toBeInTheDocument()
  })

  it('금액 토글 버튼을 누르면 총 자산까지 함께 가려진다', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(screen.getByText('3,120,000원')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: '금액 숨기기' }))

    // 총 자산도 가려져야 한다
    expect(screen.queryByText('3,120,000원')).not.toBeInTheDocument()
    expect(screen.getAllByText('••••••원').length).toBeGreaterThan(0)
  })

  it('계좌번호 토글 버튼을 누르면 전체 계좌번호가 보인다', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(screen.getByText('1002-345-6****1')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: '계좌번호 보기' }))

    expect(screen.getByText('1002-345-678901')).toBeInTheDocument()
  })
})
