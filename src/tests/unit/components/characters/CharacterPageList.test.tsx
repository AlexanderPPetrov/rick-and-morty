import MatchMediaMock from 'jest-matchmedia-mock'

import { render } from '@testing-library/react'
import CharacterPageList from '@components/characters/CharacterPageList'
import { getMockPageResults } from '@utils/mockResults'
import { BrowserRouter } from 'react-router-dom'
let matchMedia: MatchMediaMock

describe('Renders Character Page List', () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock()
  })

  afterEach(() => {
    matchMedia.clear()
  })

  it('Checks whether the CharacterPageList.tsx renders properly CharacterListItem.tsx', () => {
    const charactersCount = 20
    const pages = getMockPageResults('characters', charactersCount)
    const { container, getByTestId } = render(
      <BrowserRouter>
        <CharacterPageList pages={[pages]} loading={false} />
      </BrowserRouter>,
    )
    const characterPageList = getByTestId('character-page-list')
    expect(characterPageList).toBeInTheDocument()
    expect(container.getElementsByClassName('character-list-item').length).toBe(charactersCount)
  })
})
