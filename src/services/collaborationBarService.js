import api from './api';

export const getCollaborations = async () => {
  try {
    const response = await api.get(`/partners`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Events verileri alınırken hata oluştu:', error);
    throw error;
  }
};

export default getCollaborations;
