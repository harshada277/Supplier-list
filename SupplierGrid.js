import React from 'react';
import { useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { Paper, Typography } from '@mui/material';

const columns = [
  { field: 'name', headerName: 'Supplier Name', flex: 1 },
  { field: 'mobile', headerName: 'Mobile No.', flex: 1 },
  { field: 'license', headerName: 'License No.', flex: 1 },
  { field: 'gst', headerName: 'GST No.', flex: 1 },
  { field: 'type', headerName: 'Supplier Type', flex: 1 },
  { field: 'address', headerName: 'Address', flex: 1 },
];

export default function SupplierGrid() {
  const suppliers = useSelector((state) => state.suppliers.list);
  const rows = suppliers.map((s, i) => ({ id: i + 1, ...s }));

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>Supplier List</Typography>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />
      </div>
    </Paper>
  );
}
