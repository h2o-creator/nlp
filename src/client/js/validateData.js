export default function validateData(text) {
    if (text === '' || text === null || !text || text.length < 1) return false
    return true
}

module.exports = validateData;