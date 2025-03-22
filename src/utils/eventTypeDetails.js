function eventTypeDetails(eventType) {
  switch (eventType) {
    case 'ideathon':
      return { bgColor: 'bg-[#ff6347]', text: 'Ideathon' };
    case 'meetup':
      return { bgColor: 'bg-[#007bff]', text: 'Toplantı' };
    case 'hackathon':
      return { bgColor: 'bg-[#28a745]', text: 'Hackathon' };
    case 'webinar':
      return { bgColor: 'bg-[#00AC47]', text: 'Webinar' };
    case 'conference':
      return { bgColor: 'bg-[#3500ff]', text: 'Konferans' };
    case 'workshop':
      return { bgColor: 'bg-[#2bb2e7]', text: 'Atölye' };
    case 'bootcamp':
      return { bgColor: 'bg-[#e52828]', text: 'Bootcamp' };
    case 'seminar':
      return { bgColor: 'bg-[#f0ad4e]', text: 'Seminer' };
    case 'networking':
      return { bgColor: 'bg-[#5bc0de]', text: 'Networking' };
    case 'competition':
      return { bgColor: 'bg-[#d9534f]', text: 'Yarışma' };
    default:
      return { bgColor: 'bg-[#d37c26]', text: 'Etkinlik' };
  }
}

export default eventTypeDetails;
