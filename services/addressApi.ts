import axios from 'axios';
import type { RegisterAddressRequest } from '@/lib/types';

//임시 엑세스토큰
const accessToken =
'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0MzIxQGdtYWlsLmNvbSIsInByb3ZpZGVyVHlwZSI6IkRFRkFVTFQiLCJ1c2VyVHlwZSI6Ik1lbWJlciIsImV4cCI6MTcwMDAxMzY3OX0.gMSC1684e1XvOekor8wtZv6v-KPDpSjv__m_Dm2L32Q'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const addressApi = {
  // 멤버 주소 등록
  async register(data: RegisterAddressRequest) {
    try {
      const response = await api.post('/address/register', data, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  // 멤버 주소 조회
  async view() {
    try {
      const response = await api.get('/address/view', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  // 멤버 주소 삭제
  async delete(memberAddressId: number) {
    try {
      const response = await api.delete(`/address/${memberAddressId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  // '요기' 위치 설정
  async change(memberAddressId: number) {
    try {
      const response = await api.patch(`/address/here/${memberAddressId}`, {}, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

};