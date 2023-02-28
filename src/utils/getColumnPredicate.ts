import { type Column } from "@tanstack/react-table";

function getColumnPredicate<T, V>(column: Column<T, V>) {
  return column.getFilterValue()?.toString() ?? "";
}

export default getColumnPredicate;
