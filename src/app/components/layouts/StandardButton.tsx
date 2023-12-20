import { Button } from '@mui/material'

const StandardButton = ({
    displayText,
    sx = { backgroundColor: '#0096FF' },
    disabled = false,
    onClick,
    type = 'button',
}: {
    displayText: string
    sx?: {
        [key: string]: string
    }
    disabled?: boolean
    onClick?: (Event: React.MouseEvent) => void
    type?: 'button' | 'submit' | 'reset'
}) => {
    return (
        <Button
            variant={'contained'}
            sx={{
                boxShadow: 'none',
                borderRadius: '2px',
                padding: '10px 50px',
                ...sx,

                '&:hover': {
                    backgroundColor: sx?.backgroundColor,
                },
            }}
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            {displayText}
        </Button>
    )
}

export default StandardButton
