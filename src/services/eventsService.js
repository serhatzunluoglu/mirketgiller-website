import api from './api';

export const getEvents = async () => {
  try {
    const response = await api.get(`/events/little`);
    return response.data.events;
  } catch (error) {
    console.error('Events verileri alınırken hata oluştu:', error);
    throw error;
  }
};
