function truncateString(inputString, maxWords) {
  const words = inputString.split(' ');
  if (words.length > maxWords) {
    const truncatedWords = words.slice(0, maxWords);
    return truncatedWords.join(' ') + ' [...]';
  } else {
    return inputString;
  }
}

export default truncateString;
