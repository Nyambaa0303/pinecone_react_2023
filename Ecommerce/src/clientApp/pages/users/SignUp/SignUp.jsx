import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useState } from "react";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="http://localhost:3000/">
        Nyamooo.mn
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [username1, setUsername] = useState("");
  const [email1, setEmail] = useState("");
  const [newpassword1, setNewpassword] = useState("");
  const [repeatpass1, setRepeatpass] = useState("");

  const handleSubmit = (event) => {
    console.log(event.currentTarget);
    //  fdsadfas
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const newpassword = data.get("newpassword");
    const repeatpass = data.get("repeatpass");
    const username = data.get("username");
    setUsername(data.get("username"));
    setEmail(data.get("email"));
    setNewpassword(data.get("newpassword"));
    setRepeatpass(data.get("repeatpass"));
    if (!email || !newpassword || !username) {
      alert("Buren buglunu uu!");
    } else if (newpassword !== repeatpass) {
      alert("Password zuruutei bnshde");
    } else {
      axios
        .post("http://localhost:4000/signup", {
          email: email,
          newpassword: newpassword,
          repeatpass: repeatpass,
          username: username,
        })
        .then((res) => {
          const { data, status } = res;

          if (status === 200) {
            console.log(data);
            setUsername("");
            setEmail("");
            setNewpassword("");
            setRepeatpass("");
          }
        });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Бүртгүүлэх
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Хэрэглэгчийн нэр"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Мэйл хаяг"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="newpassword"
                  label="Шинэ нууц үг?"
                  type="password"
                  id="newpassword"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="repeatpass"
                  label="Нууц үгээ давтан уу?"
                  type="password"
                  id="repeatpass"
                  autoComplete="repeatpass"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
