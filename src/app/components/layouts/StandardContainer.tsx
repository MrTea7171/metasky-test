import { Box } from '@mui/material'

const StandardContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box
            minHeight={'85vh'}
            margin={'30px'}
            border={'1px solid #dadada'}
            borderRadius={'5px'}
            padding={'20px'}
        >
            {children}
        </Box>
    )
}

export default StandardContainer
