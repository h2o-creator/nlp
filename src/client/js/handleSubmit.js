import validateData from './validateData'

export default function handleSubmit(event) {
    event.preventDefault()
    const text = document.getElementById('text').value
    if (!validateData(text)) return alert('Invalid input text!')
    fetch('/sentiment', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ txt: text })
    })
    .then((response) => response.json())
    .then((data) => {
        const { agreement, confidence, irony, score_tag, sentence_list } = data
        const resultElement = document.getElementById('result')
        const docFrag = document.createDocumentFragment()

        const agreementElement = document.createElement('p')
        agreementElement.textContent = `AGREEMENT: ${agreement}`
        docFrag.appendChild(agreementElement)

        const confidenceElement = document.createElement('p')
        confidenceElement.textContent = `CONFIDENCE: ${confidence}`
        docFrag.appendChild(confidenceElement)

        const ironyElement = document.createElement('p')
        ironyElement.textContent = `IRONY: ${irony}`
        docFrag.appendChild(ironyElement)

        const scoreTagElement = document.createElement('p')
        scoreTagElement.textContent = `SCORE TAG: ${score_tag}`
        docFrag.appendChild(scoreTagElement)

        sentence_list.map((sentence) => {
            const sentenceElement = document.createElement('p')
            sentenceElement.textContent = `SENTENCE: ${sentence.text} CONFIDENCE: ${sentence.confidence} SCORE: ${sentence.score_tag} BOP: ${sentence.bop}`
            docFrag.appendChild(sentenceElement)
        })
    
        resultElement.appendChild(docFrag)
    })
}

module.exports = handleSubmit;