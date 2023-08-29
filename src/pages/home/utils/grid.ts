import { GridApi, gridFilteredSortedRowIdsSelector, gridVisibleColumnFieldsSelector } from '@mui/x-data-grid'

export function getRows (apiRef: React.MutableRefObject<GridApi>) {
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
