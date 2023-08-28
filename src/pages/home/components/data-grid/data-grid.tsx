import { styled } from '@mui/material'
import { DataGrid as MUIDataGrid, DataGridProps } from '@mui/x-data-grid'

const StyledDataGrid = styled(MUIDataGrid)(() => ({
  '.MuiTablePagination-select, .MuiTablePagination-selectLabel, .MuiTablePagination-input': {
    display: 'none !important'
  },
}))

export const DataGrid = (props: DataGridProps) => {
  return (
    <StyledDataGrid
      {...props}
      disableColumnMenu
      disableRowSelectionOnClick
    />
  )
}
