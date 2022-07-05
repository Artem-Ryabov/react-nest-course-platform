import axios, { AxiosPromise } from 'axios';
import { HTTPMethods } from '../constants/httpMethods';

const useHTTP = () => {
  const httprequest = <T>(url: string, method: HTTPMethods, body: any = null) => {
    return axios({
      method,
      url,
      data: body,
    }) as AxiosPromise<T>;
  };
  return httprequest;
};

export default useHTTP;
