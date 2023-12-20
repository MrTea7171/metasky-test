import { Box } from '@mui/material'
import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import TableChartIcon from '@mui/icons-material/TableChart'
const ToggleButton = ({
    isToggled,
    toggleButton,
}: {
    isToggled: boolean
    toggleButton: () => void
}) => {
    return (
        <Box
            width="80px"
            height={'40px'}
            onClick={toggleButton}
            bgcolor={'#EEEEEE'}
            borderRadius={'25px'}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
        >
            <Box
                height={'40px'}
                width={'40px'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                bgcolor={!isToggled ? '#0096FF' : 'transparent'}
                color={!isToggled ? 'white' : '#000'}
                borderRadius={'50%'}
            >
                <DonutLargeIcon />
            </Box>
            <Box
                height={'40px'}
                width={'40px'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                bgcolor={isToggled ? '#0096FF' : 'transparent'}
                color={isToggled ? 'white' : '#000'}
                borderRadius={'50%'}
            >
                <TableChartIcon />
            </Box>
        </Box>
    )
}

export default ToggleButton
