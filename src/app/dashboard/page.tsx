"use client";
import { Box } from "@mui/material";
import DasboardBox from "../components/DasboardBox";
import CampaignTable from "../components/CampaignTable";
import GroupTable from "../components/GroupTable";
import ToggleButton from "../components/ToggleButton";
import GroupChartSelector from "../components/GroupChartSelector";
import { useState } from "react";
import GroupChartBox from "../components/GroupChartBox";
import AnimatedPage from "../components/layouts/AnimatedPage";
import UserTable from "../components/UserTable";
import isAuth from "../components/auth/isAuth";

const Dashboard = () => {
  type GroupDataObject = "clicks" | "cost" | "conversions" | "revenue";
  const [isToggled, setIsToggled] = useState(false);
  const [chartKey, setChartKey] = useState<GroupDataObject>("clicks");

  const toggleButton = () => {
    setIsToggled(!isToggled);
  };
  return (
    <AnimatedPage>
      <Box
        padding={"30px"}
        display={"flex"}
        flexDirection={{
          xs: "column",
          md: "row",
        }}
        justifyContent={"space-around"}
        minHeight={"450px"}
        gap={"30px"}
      >
        <DasboardBox>
          <CampaignTable />
        </DasboardBox>
        <DasboardBox
          menuComponent={
            !isToggled && (
              <GroupChartSelector
                chartKey={chartKey}
                setChartKey={setChartKey}
              />
            )
          }
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            minHeight={"345px"}
          >
            <Box>
              {isToggled ? (
                <GroupTable />
              ) : (
                <GroupChartBox chartKey={chartKey} />
              )}
            </Box>
            <Box
              width={"100%"}
              padding={"10px"}
              display={"flex"}
              justifyContent={"flex-end"}
              alignItems={"flex-end"}
            >
              <ToggleButton isToggled={isToggled} toggleButton={toggleButton} />
            </Box>
          </Box>
        </DasboardBox>
      </Box>
      <Box padding={"30px"} minHeight={"450px"}>
        <DasboardBox>
          <UserTable />
        </DasboardBox>
      </Box>
    </AnimatedPage>
  );
};

export default isAuth(Dashboard);
