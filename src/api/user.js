import axios from '../axios'
import { useRequest } from "../axios/utils";

export const getUserInfo = () => useRequest(axios.getData('/user/getUserInfo'));
