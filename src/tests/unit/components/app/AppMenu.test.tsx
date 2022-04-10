import { render, waitFor } from '@testing-library/react'
import AppMenu from '@components/app/AppMenu'
import { BrowserRouter } from 'react-router-dom'

describe('Renders App Menu', () => {
  it('Checks whether the AppMenu.tsx component renders properly', async () => {
    const { getByTestId } = await waitFor(() =>
      render(
        <BrowserRouter>
          <AppMenu />
        </BrowserRouter>,
      ),
    )

    const menu = getByTestId('app-menu')
    expect(menu).toBeInTheDocument()
    const menuItemCharacters = getByTestId('app-menu-item-characters')
    expect(menuItemCharacters).toBeInTheDocument()
    const menuItemEpisodes = getByTestId('app-menu-item-episodes')
    expect(menuItemEpisodes).toBeInTheDocument()
    const menuItemLocations = getByTestId('app-menu-item-locations')
    expect(menuItemLocations).toBeInTheDocument()
  })
})
