import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/home/HomePage';

import NotFound from './components/common/notFound/NotFound';

// themContainer Toastify
import ToastContainerNotify from './components/common/toast/ToastContainerNotify';

const roles = {
   admin: "ADMIN",
   doctor: "DOCTOR",
   user: "USER",
}

const App = () => {
   return (
      <>
         <ToastContainerNotify />
         <Routes>
            {/* public routes */}
            <Route path="/" element={<HomePage />} />

            {/* not found */}
            <Route path="*" element={<NotFound />} />

         </Routes>
      </>
   );
};

export default App;