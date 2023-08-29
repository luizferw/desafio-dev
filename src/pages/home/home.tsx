import { Box, Button, Container, Typography } from '@mui/material'
import { DataGrid } from './components/data-grid'
import { useDataGrid } from './hooks'
import { GridToolbar } from './components/grid-toolbar'
import { SaleGrid } from '@/domain/models/sale'
import { LineChart } from '@mui/x-charts/LineChart'
import { getChartData } from './utils'
import { useEffect, useState } from 'react'

export const Home = () => {
  const { grid, handleOnChangeFile, handleUpdateRow } = useDataGrid()
  const [chartData, setChartData] = useState(getChartData(grid.rows as SaleGrid[]))

  useEffect(() => {
    setChartData(getChartData(grid.rows as SaleGrid[]))
  }, [grid.rows])

  return (
    <Container sx={{ py: 3 }}>
      <Box mb={3}>
        <Typography mb={2} variant="h2">Desafio Manchester</Typography>
        <Typography>Suba o XLSX de vendas e clique duas vezes na célula para editá-la</Typography>
      </Box>
      <Box mb={2}>
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
            toolbar: GridToolbar
          }}
          processRowUpdate={(updatedRow: SaleGrid) => handleUpdateRow(updatedRow)}
          onProcessRowUpdateError={() => { }}
        />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight={200}
        p={2}
        mt={2}
        borderRadius={1}
        border={1}
        sx={{ borderColor: 'rgba(224, 224, 224, 1)' }}
      >
        {
          grid.rows.length ? (
            <LineChart
              height={500}
              series={chartData.series}
              xAxis={[{ scaleType: 'point', data: chartData.xLabels }]}
              sx={{ height: 200 }}
            />
          ) : (
            <Typography textAlign="center">Nenhuma planilha</Typography>
          )
        }
      </Box>
    </Container>
  )
}
