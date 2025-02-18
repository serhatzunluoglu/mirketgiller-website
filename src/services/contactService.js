import api from './api';

const postContact = async (formData) => {
  try {
    const response = await api.post('/contacts', formData);
    return response.data.partners;
  } catch (error) {
    console.error('Form submission error:', error);
    throw error;
  }
};

export default postContact;
