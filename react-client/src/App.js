import React, { useState } from 'react'
import './App.css';
import api from './api';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TestForm from './components/TestForm';
import { Routes, Route } from 'react-router-dom'
import TestResult from './components/TestResult';
import { useNavigate } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const theme = createTheme();

function App() {
  const navigate = useNavigate();
  const [openLoading, setOpenLoading] = React.useState(false);

  const runTest = (runOptions) => {
    // show loading
    setOpenLoading(true);

    const runRequest = {
      sepalLength: Number(runOptions.sepalLength),
      sepalWidth: Number(runOptions.sepalWidth),
      petalLength: Number(runOptions.petalLength),
      petalWidth: Number(runOptions.petalWidth),
      epoch: Number(runOptions.epoch),
      learningRate: Number(runOptions.learningRate)
    };

    console.log('runRequest -> ', runRequest);
    api.runTest(runRequest)
    .then((result) => {
      console.log('create result -> ', result);
      setOpenLoading(false);
      navigate('/test-result', {state: {data: result.data}});
    })
    .catch((error) => {
      console.log('error running test:', error)
      setOpenLoading(false);
      navigate('/test-result', {state: {error: error}});
    });
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<TestForm runTest={runTest} />} />
          <Route path="/test-result" element={<TestResult />} />
        </Routes>

        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </ThemeProvider>
    </div>
  )
}

export default App;
