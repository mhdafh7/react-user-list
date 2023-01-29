/* eslint-disable prettier/prettier */
/* eslint-disable node/no-unpublished-import */
import {

  UseFiltersColumnProps,
  UseGroupByColumnProps,
  UsePaginationOptions,
  UseResizeColumnsColumnProps,
  UseSortByColumnProps,
  UseSortByOptions,
} from 'react-table'

declare module 'react-table' {
  // take this file as-is, or comment out the sections that don't apply to your plugin configuration

  export interface TableOptions<D extends Record<string, unknown>>
    extends UsePaginationOptions<D>,
    UseSortByOptions<D> { }

  export interface ColumnInstance<D extends Record<string, unknown> = Record<string, unknown>>
    extends UseFiltersColumnProps<D>,
    UseGroupByColumnProps<D>,
    UseResizeColumnsColumnProps<D>,
    UseSortByColumnProps<D> { }

}
