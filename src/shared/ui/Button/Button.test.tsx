import { render, screen } from '@testing-library/react'
import Button, { ThemeButton } from 'shared/ui/Button/Button'

describe('Button', () => {
    test('show in the document', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })

    test('have class', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>)
        expect(screen.getByText('TEST')).toHaveClass('clear')
        screen.debug()
    })
})
