import { ChevronLeftOutlined } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { IHeaderParams, SortDirection } from 'ag-grid-community'
import { useEffect, useState } from 'react'

interface CustomHeaderParams extends IHeaderParams {
    isLeft: boolean
}

const CustomSortHeader = (props: CustomHeaderParams) => {
    const [sortActive, setSortActive] = useState<SortDirection>(null)

    const onSortChanged = () => {
        setSortActive(
            props.column.isSortAscending()
                ? 'asc'
                : props.column.isSortDescending()
                ? 'desc'
                : null
        )
    }

    const onSortRequested = (
        order: SortDirection,
        event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>
    ) => {
        props.setSort(order, event.shiftKey)
    }

    useEffect(() => {
        props.column.addEventListener('sortChanged', onSortChanged)
        onSortChanged()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let sort = null
    if (props.enableSorting) {
        sort = (
            <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'flex-start'}
                height={'20px'}
            >
                <Box
                    onClick={(event) => {
                        onSortRequested(
                            sortActive !== 'asc' ? 'asc' : null,
                            event
                        )
                        console.log('asc clicked', sortActive)
                    }}
                    onTouchEnd={(event) =>
                        onSortRequested(
                            sortActive !== 'asc' ? 'asc' : null,
                            event
                        )
                    }
                    height={'6px'}
                >
                    <ChevronLeftOutlined
                        sx={{
                            fontSize: '15px',
                            transform: 'rotate(90deg)',
                            opacity: sortActive === 'asc' ? 1 : 0.3,
                        }}
                    />
                </Box>
                <Box
                    onClick={(event) => {
                        onSortRequested(
                            sortActive !== 'desc' ? 'desc' : null,
                            event
                        )
                        console.log('desc clicked', sortActive)
                    }}
                    onTouchEnd={(event) =>
                        onSortRequested(
                            sortActive !== 'desc' ? 'desc' : null,
                            event
                        )
                    }
                    height={'6px'}
                >
                    <ChevronLeftOutlined
                        sx={{
                            fontSize: '15px',
                            transform: 'rotate(-90deg)',
                            opacity: sortActive === 'desc' ? 1 : 0.3,
                        }}
                    />
                </Box>
            </Box>
        )
    }

    return (
        <Box
            width={'100%'}
            display={'flex'}
            justifyContent={props.isLeft ? 'flex-start' : 'flex-end'}
            alignItems={'center'}
            gap={'5px'}
        >
            <Typography variant="h6" fontSize="15px">
                {props.displayName}
            </Typography>
            {sort}
        </Box>
    )
}

export default CustomSortHeader
