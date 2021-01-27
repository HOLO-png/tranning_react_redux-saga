import { toast } from 'react-toastify';

// eslint-disable-next-line import/prefer-default-export
export const toastError = (error) => {
   let message = null;
   if (typeof error === 'object' && error.message) {
      ({ message } = error);
   }
   if (message !== null && typeof message !== 'undefined' && message !== '') {
      toast.error(message);
   }
}; // show error out for user know

export const toastSuccess = (message) => {
   // take message from reducer Task(store) set condition and check message
   if (message !== null && typeof message !== 'undefined' && message !== '') {
      toast.success(message);
   } // because have message sent from reducer Task(store) then it will show out screen for user know
};
