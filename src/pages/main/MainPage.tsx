import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { Wrapper } from '../../components/styles/Wrapper';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 130 },
  { field: 'name', headerName: 'Name', width: 160 },
  { field: 'mail', headerName: 'E-mail', width: 190 },
  {
    field: 'reg_date',
    headerName: 'Registration Date',
    type: 'string',
    width: 160,
  },
  {
    field: 'log_date',
    headerName: 'Last login date',
    width: 160,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 160,
  },
];

export const MainPage = () => {
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);
  const { users } = useAppSelector((state) => state.users);
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(selectionModel);
  }, [selectionModel]);
  return (
    <Wrapper>
      <div style={{ height: 400, width: 1000 }}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          onSelectionModelChange={(newSelectionModel) => {
            setSelectionModel(newSelectionModel);
          }}
          selectionModel={selectionModel}
          checkboxSelection
        />
      </div>
    </Wrapper>
  );
};
