import { Box, TextField, Typography } from '@mui/material'
import { ChangeEvent, FocusEvent } from 'react'

const FormComponent = ({
    name,
    value,
    label,
    placeholder,
    fullHeight = false,
    handleChange,
    handleBlur,
    error,
    helperText,
}: {
    name: string
    value: string
    label: string
    placeholder: string
    fullHeight?: boolean
    handleChange: (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void
    handleBlur: (
        event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void
    error: boolean
    helperText: string
}) => {
    return (
        <Box
            width={'100%'}
            height={fullHeight ? '100%' : 'auto'}
            display={'flex'}
            flexDirection={'column'}
            margin={'5px 0'}
        >
            <Typography marginBottom={'10px'}>{label}</Typography>
            <TextField
                name={name}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{
                    resize: 'none',
                    flex: 1,
                    '& .MuiOutlinedInput-root': {
                        height: fullHeight ? '92%' : '40px',
                    },
                    '& .MuiInputBase-root': fullHeight
                        ? {
                              justifyContent: 'flex-start',
                              alignItems: 'flex-start',
                          }
                        : {},
                }}
                multiline={fullHeight}
                fullWidth
                variant="outlined"
                placeholder={placeholder}
                rows={3.75}
                error={error}
                helperText={helperText}
            />
        </Box>
    )
}
export default FormComponent
