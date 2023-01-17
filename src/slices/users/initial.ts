import { TUsers } from '../../models/IUsers';
interface IUsersInitialState {
  users: TUsers;
}
export const initialState: IUsersInitialState = {
  users: [
    {
      id: '2323232323',
      name: 'Andrej',
      mail: 'amelyanovich.andrej@mail.ru',
      reg_date: '17.01.2023',
      log_date: '17.01.2023',
      status: 'Active',
    },
  ],
};
