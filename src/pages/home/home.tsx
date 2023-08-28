import { Box, Button, Container, Typography } from '@mui/material'
import { DataGrid } from './components/data-grid'
import { useDataGrid } from '@/hooks'
import { GridToolbar } from './components/grid-toolbar'
import { GridFooter } from './components/grid-footer'
import { SaleGrid } from '@/domain/models/sale'

export const Home = () => {
  const { grid, handleOnChangeFile } = useDataGrid()

  return (
    <Container sx={{ paddingBlock: 3 }}>
      <Box marginBottom={4}>
        <Typography variant="h2">Desafio Manchester</Typography>
      </Box>
      <Box marginBottom={2}>
        <Button
          variant="contained"
          component="label"
        >
          Enviar planilha
          <input
            type="file"
            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            onChange={handleOnChangeFile}
            hidden
          />
        </Button>
      </Box>
      <Box height="70vh" minHeight={500}>
        <DataGrid
          rows={grid.rows}
          columns={grid.columns}
          getRowId={(row: SaleGrid) => row.ID}
          slots={{
            toolbar: GridToolbar,
            footer: GridFooter
          }}
        />
      </Box>
    </Container>
  )
}
