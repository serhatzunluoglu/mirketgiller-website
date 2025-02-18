function eventTypeBgColor(eventType) {
  switch (eventType) {
    case 'ideathon':
      return 'bg-[#ff6347]';
    case 'meetup':
      return 'bg-[#007bff]';
    case 'hackathon':
      return 'bg-[#28a745]';
    case 'webinar':
      return 'bg-[#00AC47]';
    case 'conference':
      return 'bg-[#3500ff]';
    case 'workshop':
      return 'bg-[#2bb2e7]';
    case 'bootcamp':
      return 'bg-[#e52828]';
    default:
      return 'bg-[#d37c26]';
  }
}
export default eventTypeBgColor;
