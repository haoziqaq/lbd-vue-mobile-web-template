import { axios } from 'castle-haozijunqaq-utils'
import { APP } from '@/constant'
import resultCodeHandler from './resultCodeHandler'

axios.setBaseUrl(APP.BASE_URL)

axios.addHeader('dev', APP.SERVER_ENV)

axios.setResultCodeHandler(resultCodeHandler)

export default axios
