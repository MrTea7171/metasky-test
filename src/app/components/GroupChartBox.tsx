import { useEffect, useState } from 'react'
import { groupsDummyData } from '../data/DummyDataCollection'
import GroupCharts from './GroupCharts'
type GroupDataObject = 'clicks' | 'cost' | 'conversions' | 'revenue'
const GroupChartBox = ({ chartKey }: { chartKey: GroupDataObject }) => {
    const [chartValues, setChartValues] = useState<{
        male: number
        female: number
        others: number
    }>({
        male: 0,
        female: 0,
        others: 0,
    })

    useEffect(() => {
        const male = groupsDummyData[0][chartKey]
        const female = groupsDummyData[1][chartKey]
        const others = groupsDummyData[2][chartKey]
        const total = male + female + others
        setChartValues({
            male: Number(((male / total) * 100).toFixed(2)),
            female: Number(((female / total) * 100).toFixed(2)),
            others: Number(((others / total) * 100).toFixed(2)),
        })
    }, [chartKey])

    return (
        <GroupCharts
            male={chartValues.male}
            female={chartValues.female}
            others={chartValues.others}
        />
    )
}

export default GroupChartBox
