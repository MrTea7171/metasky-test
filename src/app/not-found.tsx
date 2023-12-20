import { Box, Typography } from "@mui/material";

const Page404 = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
      gap={"20px"}
    >
      <Typography variant={"h1"}>Page 404</Typography>
      <Typography variant={"subtitle1"}>
        The page you are looking for does not exist!
      </Typography>
      <Typography variant={"subtitle1"}>Custom Error Page</Typography>
    </Box>
  );
};

export default Page404;
