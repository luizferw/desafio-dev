import { GridExportMenuItemProps, useGridApiContext } from '@mui/x-data-grid'
import { MenuItem } from '@mui/material'
import { exportXlsxFromJson } from '@/utils'
import { getRows } from '../../utils'

export const ExcelExportMenuItem = (props: GridExportMenuItemProps<object>) => {
  const apiRef = useGridApiContext()
  const { hideMenu } = props

  return (
    <MenuItem
      onClick={() => {
        const rows = getRows(apiRef)
        exportXlsxFromJson(rows)
        hideMenu?.()
      }}
    >
      Exportar Excel
    </MenuItem>
  )
}
