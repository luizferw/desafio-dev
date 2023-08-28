import { read, utils } from 'xlsx'

export function readXlsxFile (file: File): Promise<object[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = (event) => {
      if (event.target?.result) {
        const bstr = event.target.result
        const workBook = read(bstr, { type: 'binary', cellDates: true })
        const wsName = workBook.SheetNames[0]
        const workSheet = workBook.Sheets[wsName]
        const data = utils.sheet_to_json<object>(workSheet)
        resolve(data)
      } else {
        reject()
      }
    }

    reader.onerror = reject

    reader.readAsBinaryString(file)
  })
}
