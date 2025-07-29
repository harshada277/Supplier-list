import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSupplier } from './supplierSlice';
import { TextField, Button, Grid, MenuItem, Paper, Typography } from '@mui/material';

const supplierTypes = [
  'Manufacturer',
  'Distributor',
  'Wholesaler',
  'Retailer',
];

const initialForm = {
  name: '',
  mobile: '',
  license: '',
  gst: '',
  type: '',
  address: '',
};

export default function AddSupplierForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Required';
    if (!form.mobile) newErrors.mobile = 'Required';
    if (!form.license) newErrors.license = 'Required';
    if (!form.gst) newErrors.gst = 'Required';
    if (!form.type) newErrors.type = 'Required';
    if (!form.address) newErrors.address = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(addSupplier(form));
      setForm(initialForm);
      setErrors({});
    }
  };

  return (
    <Paper sx={{ p: 3, mb: 4 }}>
      <Typography variant="h6" gutterBottom>Add Supplier</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Supplier Name" name="name" value={form.name} onChange={handleChange} fullWidth required error={!!errors.name} helperText={errors.name} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Mobile No." name="mobile" value={form.mobile} onChange={handleChange} fullWidth required error={!!errors.mobile} helperText={errors.mobile} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="License No." name="license" value={form.license} onChange={handleChange} fullWidth required error={!!errors.license} helperText={errors.license} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="GST No." name="gst" value={form.gst} onChange={handleChange} fullWidth required error={!!errors.gst} helperText={errors.gst} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField select label="Supplier Type" name="type" value={form.type} onChange={handleChange} fullWidth required error={!!errors.type} helperText={errors.type}>
              {supplierTypes.map((type) => (
                <MenuItem key={type} value={type}>{type}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Address" name="address" value={form.address} onChange={handleChange} fullWidth required error={!!errors.address} helperText={errors.address} />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained">Add Supplier</Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}
