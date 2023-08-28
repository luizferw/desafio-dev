import {
  GridToolbarContainer,
  GridToolbarContainerProps,
  GridToolbarExportContainer,
} from '@mui/x-data-grid'
import { ButtonProps } from '@mui/material'
import { ExcelExportMenuItem } from './'


const CustomExportButton = (props: ButtonProps) => {
  return (
    <GridToolbarExportContainer {...props}>
      <ExcelExportMenuItem />
    </GridToolbarExportContainer>
  )
}

export const GridToolbar = (props: GridToolbarContainerProps) => {
  return (
    <GridToolbarContainer {...props}>
      <CustomExportButton />
    </GridToolbarContainer>
  )
}
