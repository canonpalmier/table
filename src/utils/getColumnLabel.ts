import { type Column } from "@tanstack/react-table";

function isStringOrElse<T>(target: T, fallback: string) {
  return typeof target === "string" ? target : fallback;
}

function getColumnLabel<T, V>(column: Column<T, V>) {
  return isStringOrElse(column.columnDef.header, column.id);
}

export default getColumnLabel;
