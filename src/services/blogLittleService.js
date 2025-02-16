import api from './api';

export const getBlogLittle = async () => {
  try {
    const response = await api.get(`/posts/little`);
    console.log(response.data.posts);
    return response.data.posts;
  } catch (error) {
    console.error('Blog Little verileri alınırken hata oluştu:', error);
    throw error;
  }
};
