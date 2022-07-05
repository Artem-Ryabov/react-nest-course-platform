import axios, { AxiosPromise } from 'axios';
import { HTTPMethods } from '../constants/httpMethods';
import useAsync from './useAsync';

const useFetch = <T>(
  url: string,
  method: HTTPMethods,
  body: any = null,
  dependencies = [],
  withAuth = true
) => {
  return useAsync<T>(() => {
    let token;
    if (withAuth) {
      token = document.cookie.split(';')[0]?.replace('token=', '');
      console.log(token);
    }
    return axios({
      method,
      url,
      headers: {
        Authorization: withAuth ? `Barear ${token}` : '',
      },
      data: body,
    }) as AxiosPromise<T>;
  }, dependencies);
};

export default useFetch;
