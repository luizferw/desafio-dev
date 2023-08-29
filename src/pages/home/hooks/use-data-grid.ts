import { Sale, SaleGrid } from '@/domain/models/sale'
import { isValidDate, readXlsxFile } from '@/utils'
import { GridColDef, GridRowsProp } from '@mui/x-data-grid'
import { ChangeEvent, useState } from 'react'

interface SalesGridProps {
  columns: GridColDef[]
  rows: GridRowsProp<SaleGrid>
}

const gridInitialState = {
  columns: [],
  rows: []
}

export function useDataGrid () {
  const [grid, setGrid] = useState<SalesGridProps>(gridInitialState)

  function parseXlsxFile (file: Sale[]): SalesGridProps {
    const columns = (() => {
      const columns = Object.keys(file[0])
      return columns.map((column) => ({
        field: column,
        headerName: column,
        flex: 1,
        editable: true,
        minWidth: 150
      }))
    })()

    const rows = (() => {
      const rows = file
      return rows.map((row, index) => {
        return {
          ...row,
          DATA: isValidDate(row.DATA) ? row.DATA.toLocaleDateString() : row.DATA,
          ID: index
        } as SaleGrid
      })
    })()

    return { columns, rows }
  }

  async function handleOnChangeFile (event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault()

    const eventFile = event.target.files?.[0]
    if (eventFile) {
      try {
        const file = await readXlsxFile<Sale>(eventFile)
        const parsedFile = file.length ? parseXlsxFile(file) : gridInitialState
        setGrid(parsedFile)
      } catch {
        setGrid(gridInitialState)
      }
    }
  }

  function handleUpdateRow (row: SaleGrid) {
    setGrid((oldState) => {
      const updatedRows = oldState.rows.map((oldRow) =>
        oldRow.ID === row.ID ? row : oldRow
      )

      return {
        ...oldState,
        rows: updatedRows,
      }
    })

    return row
  }

  return {
    grid,
    handleOnChangeFile,
    handleUpdateRow
  }
}
