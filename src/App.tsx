import { Route, Routes } from 'react-router-dom';

import GlobalStyles from './global';
import { Registration } from './pages/registration/RegistrationPage';
function App() {
  return (
    <>
      <GlobalStyles />

      <Routes>
        <Route path="signUp" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
