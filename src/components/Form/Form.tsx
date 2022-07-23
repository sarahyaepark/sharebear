import * as React from "react";
import { Box, TextField, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FileUploadIcon from "@mui/icons-material/FileUpload";

export const Form: React.FC = () => {
  const theme = useTheme();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const file = form.file.value;
    const sender = form.sender_email.value;
    const receiver = form.to_email.value;
    const subject = form.subject.value;
    const message = form.message.value;
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          border: "1px solid",
          borderRadius: theme.spacing(1),
          alignItems: "center",
          padding: theme.spacing(3),
          marginTop: theme.spacing(5),
        }}
      >
        <Box
          sx={{
            marginBottom: 2,
          }}
        >
          <Button variant="contained" component="label">
            <FileUploadIcon />
            Upload File
            <input type="file" name="file" hidden />
          </Button>
        </Box>
        <TextField
          id="sender_email"
          label="your email"
          placeholder="email@email.com"
        />
        <TextField
          id="to_email"
          label="email to"
          placeholder="email@email.com"
        />
        <TextField id="subject" label="subject" placeholder="Hey it's me" />
        <TextField
          id="message"
          label="message"
          placeholder="Check out this file"
        />
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  );
};
