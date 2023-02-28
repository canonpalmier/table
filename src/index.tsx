import {
  getCoreRowModel,
  getExpandedRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getGroupedRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type TableState,
} from "@tanstack/react-table";
import TableCore from "./components/TableCore";
import TableActions from "./components/TableActions";

function Table<TData, TValue>({
  entries,
  columns,
  initialState,
  withFilters,
}: {
  entries: TData[];
  columns: ColumnDef<TData, TValue>[];
  initialState: Partial<TableState>;
  withFilters?: boolean;
}) {
  const table = useReactTable({
    data: entries,
    columns: columns,
    initialState: initialState,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFilteredRowModel: getFilteredRowModel(),
    getGroupedRowModel: getGroupedRowModel(),
  });

  return (
    <div>
      {withFilters && <TableActions table={table} />}
      <TableCore table={table} />
    </div>
  );
}

export default Table;
