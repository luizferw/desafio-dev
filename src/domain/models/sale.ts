import { Customer } from './'

export interface Sale extends Customer {
  PRODUTO: string
  QUANTIDADE_VENDIDA: number
  DATA: Date
}

export interface SaleGrid extends Customer {
  ID: number
  PRODUTO: string
  QUANTIDADE_VENDIDA: number
  DATA: string
}
