import { Box, Typography } from "@mui/material";

const Loading = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
      gap={"20px"}
    >
      <Typography variant={"h1"}>Loading...</Typography>
      <Typography variant={"subtitle1"}>
        Please wait while the page is loading
      </Typography>
    </Box>
  );
};

export default Loading;
