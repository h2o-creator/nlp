import validateData from './src/client/js/validateData'

test('returns true if the input is defined and false if null or empty', () => {
    expect(validateData('name')).toBe(true)
    expect(validateData('')).toBe(false)
    expect(validateData(undefined)).toBe(false)
    expect(validateData(null)).toBe(false)
})