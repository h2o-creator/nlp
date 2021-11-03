import validateData from './validateData'

export default function handleSubmit(event) {
    event.preventDefault()
    const text = document.getElementById('text').value
    if (!validateData(text)) return alert('Invalid input text!')
    console.log(text)
}