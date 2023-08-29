import { SaleGrid } from '@/domain/models/sale'

interface DataByMonth {
  [key: string]: {
    [key: string]: number
  }
}
interface ChartDataSeries {
  data: number[]
  label: string
}

export function getChartData (rows: SaleGrid[]) {
  const dataByMonth: DataByMonth = {}

  rows.forEach((item) => {
    const [day, month, year] = item.DATA.split('/')
    const date = new Date(Number(year), Number(month) - 1, Number(day))
    const monthYear = `${date.getMonth() + 1}/${date.getFullYear()}`

    if (!dataByMonth[monthYear]) {
      dataByMonth[monthYear] = {}
    }

    if (!dataByMonth[monthYear][item.PRODUTO]) {
      dataByMonth[monthYear][item.PRODUTO] = 0
    }

    dataByMonth[monthYear][item.PRODUTO] += Number(item.QUANTIDADE_VENDIDA)
  })

  const xLabels: string[] = Object.keys(dataByMonth).sort((a, b) => {
    const [monthA, yearA] = a.split('/')
    const [monthB, yearB] = b.split('/')
    const dateA = new Date(Number(yearA), Number(monthA) - 1)
    const dateB = new Date(Number(yearB), Number(monthB) - 1)
    return dateA.getTime() - dateB.getTime()
  })
  const series: ChartDataSeries[] = []
  const products: string[] = [...new Set(rows.map((item) => item.PRODUTO))]

  products.forEach((produto: string) => {
    const data: number[] = xLabels.map((monthYear: string) => {
      return dataByMonth[monthYear][produto] || 0
    })

    series.push({ data, label: `Produto ${produto}` })
  })

  return { series, xLabels }
}
