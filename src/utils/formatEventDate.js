function formatEventDate(eventPublishedAt) {
  const eventDate = new Date(eventPublishedAt);
  const options = {
    day: 'numeric',
    month: 'long',
    weekday: 'long',
    year: 'numeric',
  };
  const formattedDate = eventDate.toLocaleDateString('tr-TR', options);
  const [weekday, dayNumber, month, day] = formattedDate.split(' ');

  return `${day} • ${weekday} ${dayNumber} ${month}`;
}

export default formatEventDate;
