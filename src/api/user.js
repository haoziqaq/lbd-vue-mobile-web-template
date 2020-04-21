import axios from '../axios'

export const getUserInfo = () => axios.getData('/user/getUserInfo');
