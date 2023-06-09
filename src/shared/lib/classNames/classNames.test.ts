import { classNames } from './classNames'

describe('classNames', () => {
    test('with class', () => {
        expect(classNames('someClass', {}, [])).toBe('someClass')
    })
    test('with additional class', () => {
        const expected = 'someClass classOne classTwo'
        expect(classNames('someClass', {}, ['classOne', 'classTwo'])).toBe(expected)
    })
    test('with mods', () => {
        const expected = 'someClass classOne classTwo hovered'
        expect(classNames('someClass', { hovered: true }, ['classOne', 'classTwo'])).toBe(expected)
    })
    test('with mods false', () => {
        const expected = 'someClass classOne classTwo hovered'
        expect(
            classNames('someClass', { hovered: true, scrollable: false }, ['classOne', 'classTwo'])
        ).toBe(expected)
    })
    test('with mods undefined', () => {
        const expected = 'someClass classOne classTwo hovered'
        expect(
            classNames('someClass', { hovered: true, scrollable: undefined }, [
                'classOne',
                'classTwo'
            ])
        ).toBe(expected)
    })
})
