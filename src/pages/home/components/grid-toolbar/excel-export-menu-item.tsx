import {
  GridExportMenuItemProps,
  useGridApiContext,
  GridApi,
  gridFilteredSortedRowIdsSelector,
  gridVisibleColumnFieldsSelector,
} from '@mui/x-data-grid'
import { MenuItem } from '@mui/material'
import { exportXlsxFromJson } from '@/utils'

const getRows = (apiRef: React.MutableRefObject<GridApi>) => {
  const filteredSortedRowIds = gridFilteredSortedRowIdsSelector(apiRef)
  const visibleColumnsField = gridVisibleColumnFieldsSelector(apiRef)

  return filteredSortedRowIds.map((id) => {
    const row: Record<string, unknown> = {}
    visibleColumnsField.forEach((field) => {
      row[field] = apiRef.current.getCellParams(id, field).value
    })
    return row
  })
}

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
