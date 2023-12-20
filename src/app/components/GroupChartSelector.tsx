import { MenuItem, Select } from '@mui/material'
import React from 'react'

type GroupDataObject = 'clicks' | 'cost' | 'conversions' | 'revenue'

const GroupChartSelector = ({
    chartKey,
    setChartKey,
}: {
    chartKey: GroupDataObject
    setChartKey: React.Dispatch<React.SetStateAction<GroupDataObject>>
}) => {
    return (
        <Select
            sx={{
                height: '30px',
                fontSize: '12px',
                display: 'flex',
                justifyContent: 'space-between',

                '& .MuiMenuItem-root': {
                    fontSize: '12px',
                },
            }}
            value={chartKey}
            onChange={(e) => setChartKey(e.target.value as GroupDataObject)}
        >
            {['clicks', 'cost', 'conversions', 'revenue'].map((key) => (
                <MenuItem
                    key={key}
                    value={key}
                    sx={{
                        fontSize: '12px',
                    }}
                >
                    {key[0].toUpperCase() + key.slice(1)}
                </MenuItem>
            ))}
        </Select>
    )
}

export default GroupChartSelector
