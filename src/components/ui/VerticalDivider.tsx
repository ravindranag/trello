import { Divider, DividerProps } from "@mui/material"

const VerticalDivider = ({ sx, ...others }: DividerProps) => {
  return (
    <Divider 
      sx={{
        width: '1px',
        bgcolor: '#000',
        opacity: 0.1,
        ...sx
      }}
      flexItem
      {...others}
    />
  ) 
}

export default VerticalDivider
