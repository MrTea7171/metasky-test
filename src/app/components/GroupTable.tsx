import { ColDef, IHeaderParams } from 'ag-grid-community'
import { groupsDummyData } from '../data/DummyDataCollection'
import CustomSortHeader from './CustomSortHeader'
import StandardTable from './layouts/StandardTable'

const GroupTable = () => {
    const columnDefs: ColDef[] = [
        {
            field: 'group',
            sort: 'asc',
            headerComponent: (props: IHeaderParams) => {
                return <CustomSortHeader {...props} isLeft={true} />
            },
            cellStyle: { textAlign: 'left' },
        },
        {
            field: 'clicks',
            valueFormatter: (params) => {
                return params.value.toLocaleString('en-US')
            },
        },
        {
            field: 'cost',
            valueFormatter: (params) => {
                return params.value
                    .toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                    })
                    .replace('$', 'USD ')
            },
        },
        {
            field: 'conversions',
        },
        {
            field: 'revenue',
            valueFormatter: (params) => {
                return params.value
                    .toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                    })
                    .replace('$', 'USD ')
            },
        },
    ]

    const pinnedBottomRowData = [
        {
            group: 'Total',
            clicks: groupsDummyData.reduce((acc, curr) => acc + curr.clicks, 0),
            cost: groupsDummyData.reduce((acc, curr) => acc + curr.cost, 0),
            conversions: groupsDummyData.reduce(
                (acc, curr) => acc + curr.conversions,
                0
            ),
            revenue: groupsDummyData.reduce(
                (acc, curr) => acc + curr.revenue,
                0
            ),
        },
    ]

    return (
        <StandardTable
            columnDefs={columnDefs}
            rowData={groupsDummyData}
            pinnedBottomRowData={pinnedBottomRowData}
        />
    )
}

export default GroupTable
