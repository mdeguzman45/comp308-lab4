import React, { useState } from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export default function TestForm({runTest}) {
  const [sepalLength, setSepalLength] = useState(0);
  const [sepalWidth, setSepalWidth] = useState(0);
  const [petalLength, setPetalLength] = useState(0);
  const [petalWidth, setPetalWidth] = useState(0);
  const [epoch, setEpoch] = useState(100);
  const [learningRate, setLearningRate] = useState(.06);

  const [sepalLengthError, setSepalLengthError] = useState({error: false, errorMsg: ""});
  const [sepalWidthError, setSepalWidthError] = useState({error: false, errorMsg: ""});
  const [petalLengthError, setPetalLengthError] = useState({error: false, errorMsg: ""});
  const [petalWidthError, setPetalWidthError] = useState({error: false, errorMsg: ""});
  const [epochError, setEpochError] = useState({error: false, errorMsg: ""});
  const [learningRateError, setLearningRateError] = useState({error: false, errorMsg: ""});

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;

		resetErrors();
    if (!sepalLength || sepalLength <= 0) {
			setSepalLengthError({error: true, errorMsg: "Please enter a valid Sepal Length."});
			isValid = false;
		}

    if (!sepalWidth || sepalWidth <= 0) {
			setSepalWidthError({error: true, errorMsg: "Please enter a valid Sepal Width."});
			isValid = false;
		}

    if (!petalLength || petalLength <= 0) {
			setPetalLengthError({error: true, errorMsg: "Please enter a valid Petal Length."});
			isValid = false;
		}

    if (!petalWidth || petalWidth <= 0) {
			setPetalWidthError({error: true, errorMsg: "Please enter a valid Petal Width."});
			isValid = false;
		}

    if (!epoch || epoch <= 0) {
			setEpochError({error: true, errorMsg: "Please enter a valid epoch."});
			isValid = false;
		}

    if (!learningRate || learningRate <= 0) {
			setLearningRateError({error: true, errorMsg: "Please enter a valid Learning Rate."});
			isValid = false;
		}

    if (isValid) {
      const runRequest = {
        sepalLength: Number(sepalLength),
        sepalWidth: Number(sepalWidth),
        petalLength: Number(petalLength),
        petalWidth: Number(petalWidth),
        epoch: Number(epoch),
        learningRate: Number(learningRate)
      };

      runTest(runRequest);
    }
  }

  const resetErrors = () => {
		setSepalLengthError({error: false, errorMsg: ""});
		setSepalWidthError({error: false, errorMsg: ""});
		setPetalLengthError({error: false, errorMsg: ""});
		setPetalWidthError({error: false, errorMsg: ""});
    setEpochError({error: false, errorMsg: ""});
		setLearningRateError({error: false, errorMsg: ""});
	}

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
        <Typography component="h1" variant="h5" sx={{ mb: 1}}>
					Enter Test Data
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} autoComplete='off' sx={{ mt: 1 }}>
          <TextField 
            fullWidth
            onChange={(e) => setSepalLength(e.target.value)}
            label="Sepal Length"
            variant="outlined"
            color="primary"
            type="number"
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            value={sepalLength}
            required
            error={sepalLengthError.error}
            helperText={sepalLengthError.errorMsg}
            sx={{
              marginBottom: 3
            }}
          />

          <TextField 
            fullWidth
            onChange={(e) => setSepalWidth(e.target.value)}
            label="Sepal Width"
            variant="outlined"
            color="primary"
            type="number"
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            value={sepalWidth}
            required
            error={sepalWidthError.error}
            helperText={sepalWidthError.errorMsg}
            sx={{
              marginBottom: 3
            }}
          />

          <TextField 
            fullWidth
            onChange={(e) => setPetalLength(e.target.value)}
            label="Petal Length"
            variant="outlined"
            color="primary"
            type="number"
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            value={petalLength}
            required
            error={petalLengthError.error}
            helperText={petalLengthError.errorMsg}
            sx={{
              marginBottom: 3
            }}
          />

          <TextField 
            fullWidth
            onChange={(e) => setPetalWidth(e.target.value)}
            label="Petal Width"
            variant="outlined"
            color="primary"
            type="number"
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            value={petalWidth}
            required
            error={petalWidthError.error}
            helperText={petalWidthError.errorMsg}
            sx={{
              marginBottom: 3
            }}
          />

          <TextField 
            fullWidth
            onChange={(e) => setEpoch(e.target.value)}
            label="Epoch"
            variant="outlined"
            color="primary"
            type="number"
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            value={epoch}
            required
            error={epochError.error}
            helperText={epochError.errorMsg}
            sx={{
              marginBottom: 3
            }}
          />

          <TextField 
            fullWidth
            onChange={(e) => setLearningRate(e.target.value)}
            label="Learning Rate"
            variant="outlined"
            color="primary"
            type="number"
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            value={learningRate}
            required
            error={learningRateError.error}
            helperText={learningRateError.errorMsg}
            sx={{
              marginBottom: 3
            }}
          />

          <div style={{display: 'flex', justifyContent:'flex-end', width:'100%'}}>
						<Button
							type="submit"
							color="primary"
							variant="contained"
							endIcon={<KeyboardArrowRight />}
						> Submit </Button>
					</div>
        </Box>
      </Box>
    </Container>
  );
}
