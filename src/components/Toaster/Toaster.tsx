
import type { ReactNode } from 'react';
import { Slide } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

export default function Toaster(): ReactNode {
  return (
     <ToastContainer
            position="bottom-left"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Slide}
          />
  );
}