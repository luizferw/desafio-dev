import { SaleGrid } from '@/domain/models/sale'
import { Box, Typography } from '@mui/material'
import { GridPagination, useGridApiContext } from '@mui/x-data-grid'
import { getRows } from '../../utils'

export const GridFooter = () => {
  const apiRef = useGridApiContext()

  const rows = getRows(apiRef) as unknown as SaleGrid[]
  const productSum: { [product: string]: number } = {}
  rows.forEach((entry) => {
    const product = entry.PRODUTO
    const amount = Number(entry.QUANTIDADE_VENDIDA)
    if (productSum[product]) {
      productSum[product] += amount
    } else {
      productSum[product] = amount
    }
  })

  return (
    <Box sx={{ p: 1, display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mr: 5 }}>
        {productSum && Object.entries(productSum).map(([key, value], index) => (
          <Typography key={index}>Produto {key}: {value} {value > 1 ? 'vendas' : 'venda'}</Typography>
        ))}
      </Box>
      <GridPagination />
    </Box>
  )
}
