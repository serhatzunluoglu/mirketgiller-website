function eventTypeBgColor(eventType) {
  switch (eventType) {
    case 'ideathon':
      return 'bg-[#ff6347]';
    case 'meetup':
      return 'bg-[#007bff]';
    case 'hackathon':
      return 'bg-[#28a745]';
    case 'Webinar':
      return 'bg-[#6f42c1]';
    default:
      return 'bg-[#d37c26]';
  }
}
export default eventTypeBgColor;
