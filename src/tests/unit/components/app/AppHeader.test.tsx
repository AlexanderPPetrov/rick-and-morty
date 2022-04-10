import { render } from '@testing-library/react'
import AppHeader from '@components/app/AppHeader'

describe('Renders App Header', () => {
  it('Checks whether the AppHeader.tsx component renders properly', () => {
    const { getByTestId } = render(<AppHeader />)
    const header = getByTestId('app-header')
    expect(header).toBeInTheDocument()
    const headerMenuButton = getByTestId('app-header-menu-button')
    expect(headerMenuButton).toBeInTheDocument()
    const headerLogo = getByTestId('app-header-logo')
    expect(headerLogo).toBeInTheDocument()
  })
})
