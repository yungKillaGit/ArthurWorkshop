import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import MaterialTable from 'material-table';
import {
  TableContainer, TableCell, Table, TableBody, TableRow, TableHead, Paper,
} from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const RequestTable = ({ requests }) => {
  const formattedRequests = [];
  requests.forEach((request) => {
    if (request.services.length === 1) {
      formattedRequests.push({
        clientId: request.client.id,
        serviceId: request.services[0].id,
        client: request.client,
        service: request.services[0],
      });
    } else if (request.services.length > 1) {
      request.services.forEach((service) => {
        formattedRequests.push({
          clientId: request.client.id,
          serviceId: service.id,
          client: request.client,
          service,
        });
      });
    }
  });
  const [state, setState] = useState({
    columns: [
      { title: 'ID клиента', field: 'clientId' },
      { title: 'ID услуги', field: 'serviceId' },
    ],
    data: formattedRequests,
  });

  return (
    <MaterialTable
      title="Requests"
      columns={state.columns}
      data={state.data}
      detailPanel={((rowData) => (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>Полное имя</StyledTableCell>
                <StyledTableCell align="right">Возраст</StyledTableCell>
                <StyledTableCell align="right">Город</StyledTableCell>
                <StyledTableCell align="right">Номер телефона</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">{rowData.client.fullName}</StyledTableCell>
                <StyledTableCell align="right">{rowData.client.age}</StyledTableCell>
                <StyledTableCell align="right">{rowData.client.city}</StyledTableCell>
                <StyledTableCell align="right">{rowData.client.phoneNumber}</StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
          <Table className="mt-1">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>Название</StyledTableCell>
                <StyledTableCell align="right">Цена</StyledTableCell>
                <StyledTableCell align="right">Описание</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">{rowData.service.name}</StyledTableCell>
                <StyledTableCell align="right">{rowData.service.price}</StyledTableCell>
                <StyledTableCell align="right">{rowData.service.description}</StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      ))}
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

export default React.memo(RequestTable);
