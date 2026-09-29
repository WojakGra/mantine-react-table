import { useMemo } from 'react';

import type { MRT_Row, MRT_RowData, MRT_TableInstance } from '../types';
import { getMRT_Rows } from '../utils/row.utils';

export const useMRT_Rows = <TData extends MRT_RowData>(
  table: MRT_TableInstance<TData>,
): Array<MRT_Row<TData>> => {
  const {
    getRowModel,
    options: { data, enableGlobalFilterRankedResults, positionCreatingRow },
    state,
  } = table;
  const {
    creatingRow,
    expanded,
    globalFilter,
    pagination,
    rowPinning,
    sorting,
  } = state;

  const rows = useMemo(
    () => getMRT_Rows(table),
    [
      creatingRow,
      data,
      enableGlobalFilterRankedResults,
      expanded,
      getRowModel().rows,
      globalFilter,
      pagination.pageIndex,
      pagination.pageSize,
      positionCreatingRow,
      rowPinning,
      sorting,
    ],
  );

  return rows;
};
