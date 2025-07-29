import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AddSupplierForm from './AddSupplierForm';
import SupplierGrid from './SupplierGrid';
import { Container } from '@mui/material';

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <AddSupplierForm />
        <SupplierGrid />
      </Container>
    </Provider>
  );
}

export default App;
