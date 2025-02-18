import api from './api';

export const getSupportedProjects = async () => {
  try {
    const response = await api.get(`/supported-projects`);
    console.log(response);
    return response.data.projects;
  } catch (error) {
    console.error('Events verileri alınırken hata oluştu:', error);
    throw error;
  }
};
