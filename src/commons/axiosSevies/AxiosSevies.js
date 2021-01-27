import axios from 'axios';

class AxiosSevies {
   constructor() {
      const instance = axios.create();
      instance.interceptors.response.use(this.handleSuccess, this.handleError);
      this.instance = instance;
   }

   handleSuccess(response) {
      return response;
   }

   handleError(error) {
      return Promise.reject(error);
   }

   get(url) {
      return this.instance.get(url);
   }

   post(url, body) {
      return this.instance.post(url, body);
   }

   put(url, body) {
      // put also url and body to enter data into
      return this.instance.put(url, body);
   } // after create method put then you candlestick access axios.com to research about method put'
   delete(url) {
      return this.instance.delete(url);
   }
}
export default new AxiosSevies();
