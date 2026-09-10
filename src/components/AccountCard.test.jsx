import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import AccountCard from './AccountCard'
import { UserProvider } from '../contexts/UserContext.jsx'

// AccountCard 안에는 StatusBadge 가 들어 있고, 그것이 useUser().status 를 읽습니다.
// Provider 없이 그리면 null.status 에서 터지므로 반드시 감싸 줍니다.
function renderCard(props) {
  return render(
    <UserProvider user={{ name: '정승현', status: '정상' }}>
      <AccountCard
        accountNo="1002-345-678901"
        accountType="입출금"
        balance={1523000}
        showFullNo={false}
        hideAmount={false}
        onDeposit={vi.fn()}
        {...props}
      />
    </UserProvider>
  )
}

describe('AccountCard', () => {
  it('showFullNo 가 false 면 계좌번호가 마스킹되어 보인다', () => {
    renderCard({ showFullNo: false })
    expect(screen.getByText('1002-345-6****1')).toBeInTheDocument()
    // 가려진 게 맞다면 전체 계좌번호는 화면에 없어야 합니다.
    expect(screen.queryByText('1002-345-678901')).not.toBeInTheDocument()
  })

  it('showFullNo 가 true 면 계좌번호 전체가 보인다', () => {
    renderCard({ showFullNo: true })
    expect(screen.getByText('1002-345-678901')).toBeInTheDocument()
  })

  it('hideAmount 가 true 면 금액이 "••••••원" 으로 가려진다', () => {
    renderCard({ hideAmount: true })
    expect(screen.getByText('••••••원')).toBeInTheDocument()
    expect(screen.queryByText('1,523,000원')).not.toBeInTheDocument()
  })

  it('hideAmount 가 false 면 실제 금액이 그대로 보인다', () => {
    renderCard({ hideAmount: false })
    expect(screen.getByText('1,523,000원')).toBeInTheDocument()
  })
})
