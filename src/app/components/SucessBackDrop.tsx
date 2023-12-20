import { Box, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const SucessBackDrop = () => {
    return (
        <Box
            position={'absolute'}
            top={0}
            left={0}
            right={0}
            bottom={0}
            zIndex={999}
            sx={{
                opacity: 1,
                backdropFilter: 'blur(6px)',
            }}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            height={'100vh'}
        >
            <Box
                bgcolor={'#fff'}
                padding={'30px'}
                width={'30%'}
                height={'20%'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                boxShadow={'0 0px 10px rgb(0 0 0 / 0.3)'}
            >
                <CheckCircleIcon color="primary" />
                <Typography fontSize={'18px'}>Submitted</Typography>
            </Box>
        </Box>
    )
}

export default SucessBackDrop
