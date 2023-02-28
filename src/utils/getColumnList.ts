import { type Column } from "@tanstack/react-table";

function getColumnList<T, V>(column: Column<T, V>) {
  return Array.from(column.getFacetedUniqueValues().keys()).sort();
}

export default getColumnList;
