import api from './api';

export const getTimeflows = async () => {
  try {
    const response = await api.get('/timeflows');
    const formattedData = response.data.data.map((item) => ({
      heading: item.title,
      content: item.description,
      time: item.date,
    }));
    return formattedData;
  } catch (error) {
    console.error('Timeflow verileri alınırken hata oluştu:', error);
    throw error;
  }
};
