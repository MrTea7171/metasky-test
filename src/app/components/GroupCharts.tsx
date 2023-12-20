import { Box, Typography } from '@mui/material'
import { PieChart } from '@mui/x-charts/PieChart'

const ChartLabel = ({
    labelColor,
    percentange,
    labelOf,
}: {
    labelColor: string
    percentange: number
    labelOf: string
}) => {
    return (
        <Box display={'flex'} gap={'20px'}>
            <Box
                padding={'5px 30px'}
                bgcolor={labelColor}
                borderRadius={'5px'}
            ></Box>
            <Typography>
                {percentange}% {labelOf}
            </Typography>
        </Box>
    )
}
const GroupCharts = ({
    male = 10,
    female = 20,
    others = 30,
}: {
    male: number
    female: number
    others: number
}) => {
    return (
        <Box
            minHeight={'280px'}
            width={'100%'}
            display={'flex'}
            flexDirection={{
                xs: 'column',
                sm: 'row',
                md: 'column',
                lg: 'row',
            }}
            gap={{
                xs: '20px',
            }}
        >
            <Box
                flex={1.5}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <PieChart
                    height={280}
                    series={[
                        {
                            data: [
                                {
                                    value: male,
                                    color: '#FF813C',
                                },
                                {
                                    value: female,
                                    color: '#0096FF',
                                },
                                {
                                    value: others,
                                    color: '#323C46',
                                },
                            ],
                            innerRadius: 70,
                            outerRadius: 120,
                            paddingAngle: 2,
                            cornerRadius: 0,
                            startAngle: 0,
                            endAngle: 360,
                            cx: 170,
                            cy: 150,
                        },
                    ]}
                    tooltip={{
                        trigger: 'none',
                    }}
                    disableAxisListener
                />
            </Box>
            <Box
                flex={1}
                display={'flex'}
                flexDirection={'column'}
                gap={'10px'}
                justifyContent={'center'}
                alignItems={{
                    xs: 'start',
                    sm: 'flex-start',
                    md: 'start',
                    lg: 'flex-start',
                }}
                padding={'20px'}
            >
                <ChartLabel
                    labelColor="#FF813C"
                    percentange={male}
                    labelOf="Male"
                />
                <ChartLabel
                    labelColor="#0096FF"
                    percentange={female}
                    labelOf="Female"
                />
                <ChartLabel
                    labelColor="#323C46"
                    percentange={others}
                    labelOf="Others"
                />
            </Box>
        </Box>
    )
}

export default GroupCharts
