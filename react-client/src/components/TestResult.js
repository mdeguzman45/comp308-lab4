import React from 'react'
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import SettingsBackupRestoreOutlinedIcon from '@mui/icons-material/SettingsBackupRestoreOutlined';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { textAlign } from '@mui/system';

export default function TestResult() {
  const navigate = useNavigate();
  const location = useLocation();
  const result = location.state;

  console.log('test result -> ', result);
  return (
    <Container maxWidth="sm">
      <Box
				sx={{
					marginTop: 4,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start'
				}}
			>
        <Typography component="h1" variant="h5" sx={{ mb: 2}}>
					Test Result
        </Typography>

        {
          result.error ?
          <Typography component="h1" variant="h6" sx={{ mb: 3, flexDirection: 'flex-start' }}>
					  Test Fail: {result.error.message}
          </Typography>
          :
          <div>
            <Typography component="h1" variant="h6" sx={{ textAlign: 'left' }}>
					    The values for species will be:
            </Typography>
            <List>
              <ListItem key="setosa">setosa: 1,0,0</ListItem>
              <ListItem key="virginica">virginica: 0,1,0</ListItem>
              <ListItem key="versicolor">versicolor: 0,0,1</ListItem>
            </List>
            <Typography component="h1" variant="h6" sx={{ textAlign: 'left' }}>
					    Prediction Response:
            </Typography>
            <TableContainer component={Paper} sx={{ mb: 3}}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Col 1</TableCell>
                    <TableCell>Col 2</TableCell>
                    <TableCell>Col 3</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    {
                      result.data[0].map((value, index) => (
                        <TableCell key={index}>{value}</TableCell>
                      ))
                    }
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        }

        <div style={{display: 'flex', justifyContent:'flex-start', width:'100%'}}>
						<Button
							type="button"
							color="primary"
							variant="contained"
							endIcon={<SettingsBackupRestoreOutlinedIcon />}
              onClick={() => navigate('/')}
						> Run Another Test </Button>
					</div>
      </Box>
    </Container>
  )
}
