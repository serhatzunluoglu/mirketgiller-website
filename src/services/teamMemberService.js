import api from './api';

export const getTeamMember = async (department) => {
  try {
    const response = await api.get(`/users-by-department/${department}`);
    console.log(response.data.users);
    return response.data.users;
  } catch (error) {
    console.error('Team Member verileri alınırken hata oluştu:', error);
    throw error;
  }
};
