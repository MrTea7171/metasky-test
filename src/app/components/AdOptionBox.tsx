import { Box, Checkbox, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

const AdOptionBox = ({
  type,
  checked,
  onChecked,
  AdOptionImg,
  AdOptionText,
}: {
  type: "text" | "media";
  checked: boolean;
  onChecked: (type: "text" | "media") => void;
  AdOptionImg: string;
  AdOptionText: string;
}) => {
  return (
    <Box
      boxShadow={
        checked ? "0 0px 10px rgb(0 0 0 / 0.4)" : "0 0px 10px rgb(0 0 0 / 0.1)"
      }
      borderRadius={"5px"}
      width={{
        xs: "60%",
        sm: "60%",
        md: "calc(35% - 10px)",
        lg: "calc(26% - 10px)",
      }}
      onClick={() => {
        onChecked(type);
      }}
    >
      <Box paddingLeft={"10px"} paddingTop={"10px"}>
        <Checkbox
          checked={checked}
          disableRipple
          sx={{
            color: "#dadada",
            "&$checked": {
              color: "#13c552",
            },
          }}
        />
      </Box>
      <Box display={"flex"} justifyContent={"center"} padding={"5px 20px"}>
        <Image
          src={AdOptionImg}
          alt=""
          width={0}
          height={0}
          sizes={"100vw"}
          style={{
            width: "80%",
            height: "auto",
          }}
        />
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        bgcolor={"#fafafa"}
        padding={"30px"}
      >
        <Typography variant="caption" color={"#c5c5c5"}>
          Create
        </Typography>
        <Typography variant="h5" fontSize={"18px"} fontWeight={"700"}>
          {AdOptionText}
        </Typography>
      </Box>
    </Box>
  );
};

export default AdOptionBox;
