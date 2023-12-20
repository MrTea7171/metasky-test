"use client";
import { ColDef, IHeaderParams } from "ag-grid-community";
import CustomSortHeader from "./CustomSortHeader";
import StandardTable from "./layouts/StandardTable";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Box, TextField } from "@mui/material";
import { debounce } from "lodash";
import { setUsers, userType } from "@/store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";

const UserTable = () => {
  const trueData = useSelector((state: RootState) => state.userSlice);
  const [allUsers, setAllUsers] = useState<userType[]>(trueData.data);
  const dispatch = useDispatch();
  useEffect(() => {
    if (trueData.filled) return;
    const fetchData = async () => {
      const allData = await axios.get(
        "https://randomuser.me/api/?results=2000"
      );
      const filteredData: [userType] = allData.data.results.map((user: any) => {
        return {
          id: `${user.id.name}${user.id.value}`,
          gender: user.gender,
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          state: user.location.state,
          country: user.location.country,
        };
      });
      setAllUsers(filteredData);
      dispatch(setUsers(filteredData));
    };
    fetchData();
  }, [trueData]);

  const debouncedFilter = debounce((value) => {
    setAllUsers((prev) => {
      return (
        trueData.data.filter((data) => data.name.includes(value)) ??
        trueData ??
        []
      );
    });
  }, 300);
  const columnDefs: ColDef[] = [
    {
      field: "id",
      headerComponent: (props: IHeaderParams) => {
        return <CustomSortHeader {...props} isLeft={true} />;
      },
      cellStyle: { textAlign: "left" },
    },
    {
      field: "name",
      sort: "asc",
      valueFormatter: (params) => {
        return params.value.toLocaleString("en-US");
      },
    },
    {
      field: "gender",
    },
    {
      field: "email",
    },
    {
      field: "state",
    },
    {
      field: "country",
    },
  ];

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"right"}
        alignItems={"end"}
        width={"100%"}
        padding={"20px 10px"}
      >
        <TextField
          sx={{
            "& .MuiOutlinedInput-root": {
              height: "30px",
              width: "200px",
            },
          }}
          onChange={(e) => {
            debouncedFilter(e.target.value);
          }}
          variant="outlined"
          placeholder={"Search by name"}
        />
      </Box>
      <StandardTable
        columnDefs={columnDefs}
        rowData={allUsers}
        pagination={true}
      />
    </>
  );
};

export default UserTable;
