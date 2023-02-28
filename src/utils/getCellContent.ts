import { flexRender, type Cell } from "@tanstack/react-table";

function getCellContent<T, V>(cell: Cell<T, V>) {
  return flexRender(cell.column.columnDef.cell, cell.getContext());
}

export default getCellContent;
