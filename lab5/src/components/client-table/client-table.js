import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MaterialTable from 'material-table';

const ClientTable = ({ clients }) => {
  const [state, setState] = useState({
    columns: [
      { title: 'Полное имя', field: 'fullName' },
      { title: 'Возраст', field: 'age' },
      { title: 'Город', field: 'city' },
      { title: 'Номер телефона', field: 'phoneNumber' },
    ],
    data: clients,
  });

  return (
    <MaterialTable
      title="Clients"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) => new Promise((resolve) => {
          setTimeout(() => {
            resolve();
            setState((prevState) => {
              const data = [...prevState.data];
              data.push(newData);
              return { ...prevState, data };
            });
          }, 600);
        }),
        onRowUpdate: (newData, oldData) => new Promise((resolve) => {
          setTimeout(() => {
            resolve();
            if (oldData) {
              setState((prevState) => {
                const data = [...prevState.data];
                data[data.indexOf(oldData)] = newData;
                return { ...prevState, data };
              });
            }
          }, 600);
        }),
        onRowDelete: (oldData) => new Promise((resolve) => {
          setTimeout(() => {
            resolve();
            setState((prevState) => {
              const data = [...prevState.data];
              data.splice(data.indexOf(oldData), 1);
              return { ...prevState, data };
            });
          }, 600);
        }),
      }}
    />
  );
};

export default React.memo(ClientTable);
