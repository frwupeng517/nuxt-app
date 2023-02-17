import { http } from '@/utils/http';

export const getRoomList = (params) => {
  return http.get('https://dog.ceo/api/breed/hound/afghan/images', params);
};
