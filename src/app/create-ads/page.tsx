"use client";
import { Box, Typography } from "@mui/material";
import AdOptionBox from "../components/AdOptionBox";
import StandardContainer from "../components/layouts/StandardContainer";
import StandardButton from "../components/layouts/StandardButton";
import { useState } from "react";
import AnimatedPage from "../components/layouts/AnimatedPage";
import Link from "next/link";
import isAuth from "../components/auth/isAuth";

const CreateAds = () => {
  const [createAdType, setCreateAdType] = useState<"text" | "media" | null>(
    null
  );
  const onSelection = (type: "text" | "media") => {
    setCreateAdType((prev) => {
      if (prev === type) {
        return null;
      }
      return type;
    });
  };
  return (
    <AnimatedPage>
      <StandardContainer>
        <Box
          flex={1}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          gap={{
            xs: "20px",
            md: "30px",
          }}
        >
          <Box>
            <Typography fontSize={"18px"}>Create Ads</Typography>
          </Box>
          <Box
            display={"flex"}
            flexDirection={{
              xs: "column",
              md: "row",
            }}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"50px"}
          >
            <AdOptionBox
              type={"text"}
              checked={createAdType === "text"}
              onChecked={onSelection}
              AdOptionImg={"/images/TextAdImg.png"}
              AdOptionText={"Text Ad"}
            />
            <AdOptionBox
              type={"media"}
              checked={createAdType === "media"}
              onChecked={onSelection}
              AdOptionImg={"/images/MediaAdImg.png"}
              AdOptionText={"Media Ad"}
            />
          </Box>
          <Box display={"flex"} justifyContent={"flex-end"}>
            <Link href={`/create-ads/${createAdType}`}>
              <StandardButton displayText={"Next"} disabled={!createAdType} />
            </Link>
          </Box>
        </Box>
      </StandardContainer>
    </AnimatedPage>
  );
};

export default isAuth(CreateAds);
