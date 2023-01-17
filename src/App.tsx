import { Route, Routes } from 'react-router-dom';

import GlobalStyles from './global';
import { Authorization } from './pages/authorization/AuthorizationPage';
import { Registration } from './pages/registration/RegistrationPage';
function App() {
  return (
    <>
      <GlobalStyles />

      <Routes>
        <Route path="signUp" element={<Registration />} />
        <Route path="signIn" element={<Authorization />} />
      </Routes>
    </>
  );
}

export default App;
