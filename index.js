function stripHTML(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html')
  return doc.body.textContent || ''
}

const rawText =
  '<a href="#">Text <span>to</span> <img src="image.png"> get </a>'

stripHTML(rawText)
