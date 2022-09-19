import React from "react";
import { toast } from "react-toastify";

import SendIcon from "@mui/icons-material/Send";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";

const Demo = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={8}>
        <Typography variant="h3">Typography</Typography>
        <Paper sx={{ padding: 2, margin: 1 }}>
          <Typography variant="h1">h1. Heading</Typography>
          <Typography variant="h2">h2. Heading</Typography>
          <Typography variant="h3">h3. Heading</Typography>
          <Typography variant="h4">h4. Heading</Typography>
          <Typography variant="h5">h5. Heading</Typography>
          <Typography variant="h6">h6. Heading</Typography>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h3">Colors</Typography>
        <Paper
          sx={{
            padding: 2,
            margin: 1,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Button variant="contained" size="small" color="primary">
            primary
          </Button>
          <Button variant="contained" size="small" color="secondary">
            secondary
          </Button>
          <Button variant="contained" size="small" color="success">
            success
          </Button>
          <Button variant="contained" size="small" color="error">
            error
          </Button>
          <Button variant="contained" size="small" color="warning">
            warning
          </Button>
          <Button variant="contained" size="small" color="info">
            info
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h3">Toasts</Typography>
        <Paper sx={{ padding: 2, margin: 1 }}>
          <Grid container gap={3}>
            <Button
              variant="contained"
              size="small"
              color="info"
              onClick={() => toast.info("Info toast")}
            >
              info
            </Button>
            <Button
              variant="contained"
              size="small"
              color="success"
              onClick={() => toast.success("Success toast")}
            >
              success
            </Button>
            <Button
              variant="contained"
              size="small"
              color="error"
              onClick={() => toast.error("Error toast")}
            >
              error
            </Button>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs>
        <Typography variant="h3">Example buttons</Typography>
        <Paper
          sx={{
            padding: 2,
            margin: 1,
          }}
        >
          <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                width: "100%",
              }}
            >
              <Typography variant="h5">Variants</Typography>
              <Button variant="contained" size="small">
                contained button
              </Button>
              <Button variant="contained" size="small" color="secondary">
                contained secondary button
              </Button>
              <Button variant="outlined" size="small">
                outlined button
              </Button>
              <Button variant="outlined" size="small" color="secondary">
                outlined secondary button
              </Button>
              <Button variant="text" size="small" color="secondary">
                text button
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                endIcon={<SendIcon />}
              >
                End icon button
              </Button>
              <Button variant="contained" size="small" startIcon={<SendIcon />}>
                Start icon button
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                width: "100%",
              }}
            >
              <Typography variant="h5">Sizes</Typography>
              <Button variant="contained" size="small">
                small button
              </Button>
              <Button variant="contained" size="medium">
                medium button
              </Button>
              <Button variant="contained" size="large">
                large button
              </Button>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Demo;
