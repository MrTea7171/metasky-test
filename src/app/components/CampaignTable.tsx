import { ColDef, IHeaderParams } from "ag-grid-community";
import { campaignsDummyData } from "../data/DummyDataCollection";
import CustomSortHeader from "./CustomSortHeader";
import StandardTable from "./layouts/StandardTable";
import { Box } from "@mui/material";

const CampaignTable = () => {
  const columnDefs: ColDef[] = [
    {
      field: "campaigns",
      sort: "asc",
      headerComponent: (props: IHeaderParams) => {
        return <CustomSortHeader {...props} isLeft={true} />;
      },
      cellStyle: { textAlign: "left" },
    },
    {
      field: "clicks",
      valueFormatter: (params) => {
        return params.value.toLocaleString("en-US");
      },
    },
    {
      field: "cost",
      valueFormatter: (params) => {
        return params.value
          .toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })
          .replace("$", "USD ");
      },
    },
    {
      field: "conversions",
    },
    {
      field: "revenue",
      valueFormatter: (params) => {
        return params.value
          .toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })
          .replace("$", "USD ");
      },
    },
  ];

  const pinnedBottomRowData = [
    {
      campaigns: "Total",
      clicks: campaignsDummyData.reduce((acc, curr) => acc + curr.clicks, 0),
      cost: campaignsDummyData.reduce((acc, curr) => acc + curr.cost, 0),
      conversions: campaignsDummyData.reduce(
        (acc, curr) => acc + curr.conversions,
        0
      ),
      revenue: campaignsDummyData.reduce((acc, curr) => acc + curr.revenue, 0),
    },
  ];

  return (
    <StandardTable
      columnDefs={columnDefs}
      rowData={campaignsDummyData}
      pinnedBottomRowData={pinnedBottomRowData}
    />
  );
};

export default CampaignTable;
