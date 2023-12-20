import { QuestionMarkOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const DasboardBox = ({
  children,
  menuComponent: MenuComponent = <></>,
}: {
  children: React.ReactNode;
  menuComponent?: React.ReactNode;
}) => {
  return (
    <Box
      border={"1px solid #dadada"}
      flex={1}
      borderRadius={"5px"}
      overflow={"visible"}
    >
      <Box
        height={"45px"}
        padding={"5px 10px"}
        borderBottom={"1px solid #dadada"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant={"h6"} fontWeight={"400"}>
          Ad Insights
        </Typography>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"10px"}
        >
          {MenuComponent}
          <Box
            border={"1px solid #dadada"}
            borderRadius={"50%"}
            height={"20px"}
            width={"20px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <QuestionMarkOutlined
              sx={{
                color: "#dadada",
                fontSize: "12px",
              }}
            />
          </Box>
        </Box>
      </Box>
      {children}
    </Box>
  );
};

export default DasboardBox;
