"use client";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import StandardButton from "./layouts/StandardButton";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logout } from "@/store/authSlice";

const Navbar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const linkList = [
    {
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "Create Ads",
      link: "/create-ads",
    },
  ];
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
      height={"50px"}
      boxShadow={"0 3px 10px rgb(0 0 0 / 0.2)"}
      padding={"20px"}
      textTransform={"uppercase"}
      boxSizing={"border-box"}
    >
      <Link href="/">
        <Typography variant={"h1"} fontSize={"1.25rem"} fontWeight={"700"}>
          App Logo
        </Typography>
      </Link>
      <Box display={"flex"} gap={"40px"} alignItems={"center"}>
        {linkList.map((linkItem) => (
          <Link key={linkItem.link} href={linkItem.link}>
            <Typography
              key={linkItem.name + 22}
              variant={"h4"}
              fontSize={"1rem"}
              fontWeight={"300"}
            >
              {linkItem.name}
            </Typography>
          </Link>
        ))}
        <StandardButton
          displayText="Logout"
          onClick={() => {
            localStorage.removeItem("credentials");
            dispatch(logout());
            router.push("/create-ads");
          }}
          type="button"
        />
      </Box>
    </Box>
  );
};

export default Navbar;
