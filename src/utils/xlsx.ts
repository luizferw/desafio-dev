import { read, utils, writeFile } from 'xlsx'

export function readXlsxFile<T> (file: File): Promise<T[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = (event) => {
      if (event.target?.result) {
        const bstr = event.target.result
        const workbook = read(bstr, { type: 'binary', cellDates: true })
        const wsName = workbook.SheetNames[0]
        const worksheet = workbook.Sheets[wsName]
        const data = utils.sheet_to_json<T>(worksheet)
        resolve(data)
      } else {
        reject()
      }
    }

    reader.onerror = reject

    reader.readAsBinaryString(file)
  })
}

export function exportXlsxFromJson (rows: unknown[]) {
  const worksheet = utils.json_to_sheet(rows)
  const workbook = utils.book_new()
  utils.book_append_sheet(workbook, worksheet)
  writeFile(workbook, 'Base-Dados-Desafio-DEV-01.xlsx', { compression: true })
}
