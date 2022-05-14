import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import LinkMui from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Link from "next/link";
import { Field, Form } from "react-final-form";
import { useDispatch } from "react-redux";
import { Input, required as requiredValidation, SelectField } from "../inputs";

import validator from "validator";

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const dispatch = useDispatch();

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
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Form
              onSubmit={(vals) => dispatch()}
              render={({ handleSubmit, submitting, values }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Field
                          name="firstName"
                          validate={requiredValidation}
                          component={Input}
                          label="First Name"
                          id="firstname"
                          fullWidth
                          required
                          autoFocus
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          component={Input}
                          validate={requiredValidation}
                          required
                          fullWidth
                          label="Last Name"
                          name="lastName"
                          autoComplete="family-name"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          component={Input}
                          validate={(val) =>
                            val
                              ? validator.isEmail(val)
                                ? undefined
                                : "Must be a valid email"
                              : "Required"
                          }
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          component={Input}
                          validate={(val) =>
                            val
                              ? validator.isStrongPassword(val, {
                                  minSymbols: 0,
                                  minLength: 8,
                                  minLowercase: 1,
                                  minUppercase: 1,
                                  minNumbers: 1,
                                })
                                ? undefined
                                : "Password not strong enough"
                              : "Required"
                          }
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="new-password"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          component={Input}
                          validate={(val) =>
                            val
                              ? val === values.password
                                ? undefined
                                : "Passwords must match"
                              : "Required"
                          }
                          required
                          fullWidth
                          name="password2"
                          label="Confirm Password"
                          type="password"
                          id="password2"
                          autoComplete="new-password"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                          Sign Up As
                        </Typography>
                        <Field
                          component={SelectField}
                          label="Role"
                          validate={requiredValidation}
                          name="role"
                          options={["Student", "Company Sponsor", "Club Admin"]}
                        />
                      </Grid>
                      {/* <Grid item xs={12}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              value="allowExtraEmails"
                              color="primary"
                            />
                          }
                          label="I want to receive inspiration, marketing promotions and updates via email."
                        />
                      </Grid> */}
                    </Grid>
                    <Button
                      type="submit"
                      disabled={submitting}
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign Up
                    </Button>
                  </form>
                );
              }}
            />
            <Grid container justifyContent="flex-end">
              <Grid item>
                <LinkMui variant="body2">
                  <Link href={`/users/login`}>
                    Already have an account? Sign in
                  </Link>
                </LinkMui>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
