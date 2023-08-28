import { Box, Button, Container, Typography } from '@mui/material'
import { DataGrid } from './components/data-grid'
import { useDataGrid } from '@/hooks'

export const Home = () => {
  const { grid, handleOnChangeFile } = useDataGrid()

  return (
    <Container sx={{ paddingBlock: 3 }}>
      <Box marginBottom={2}>
        <Typography variant="h2">Desafio Manchester</Typography>
      </Box>
      <Box marginBottom={1}>
        <Button
          variant="contained"
          component="label"
        >
          Upload File
          <input
            type="file"
            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            onChange={handleOnChangeFile}
            hidden
          />
        </Button>
      </Box>
      <Box height="80vh">
        <DataGrid
          rows={grid.rows}
          columns={grid.columns} />
      </Box>
    </Container>
  )
}
