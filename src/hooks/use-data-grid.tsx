import { isValidDate, readXlsxFile } from '@/utils'
import { GridColDef, GridRowsProp, GridValidRowModel } from '@mui/x-data-grid'
import { ChangeEvent, useState } from 'react'

interface GridProps {
  columns: GridColDef[]
  rows: readonly GridValidRowModel[]
}

export function useDataGrid () {
  const [grid, setGrid] = useState<GridProps>({
    columns: [],
    rows: []
  })

  function parseXlsxFile (file: object[]): GridProps {
    const columns: GridColDef[] = (() => {
      const columns = Object.keys(file[0])
      return columns.map((column) => ({
        field: column,
        headerName: column,
        flex: 1,
      }))
    })()

    const rows: GridRowsProp = (() => {
      const rows = file
      return rows.map((row, index) => {
        const updatedRow: Record<string, unknown> = {}

        Object.entries(row).forEach(([key, value]) => {
          if (isValidDate(value)) {
            value = value.toLocaleDateString()
          }
          updatedRow[key] = value
        })

        return {
          ...updatedRow,
          id: index
        }
      })
    })()

    return { columns, rows }
  }

  async function handleOnChangeFile (event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault()

    const eventFile = event.target.files?.[0]
    if (eventFile) {
      const file = await readXlsxFile(eventFile)
      const parsedFile = parseXlsxFile(file)
      setGrid(parsedFile)
    }
  }

  return {
    grid,
    handleOnChangeFile
  }
}
