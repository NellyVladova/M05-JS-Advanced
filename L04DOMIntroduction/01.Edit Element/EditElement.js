function editElement(text, match, replacer) {
    const matcher = new RegExp(match, 'g');
    const result = text.textContent.replace(matcher, replacer);
    text.textContent = result;
}