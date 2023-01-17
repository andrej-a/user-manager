import { Link } from 'react-router-dom';

import { Wrapper } from '../../components/styles/Wrapper';
import { AuthorizationForm } from './Form/AuthorizationForm';

export const Authorization = () => {
  return (
    <>
      <Wrapper>
        <AuthorizationForm />
        <Link to={'../signUp'}>To registration</Link>
      </Wrapper>
    </>
  );
};
