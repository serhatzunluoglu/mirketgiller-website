function formatDate(inputDate) {
  const date = new Date(inputDate);

  return date.toLocaleDateString('tr-TR', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
}

export default formatDate;
