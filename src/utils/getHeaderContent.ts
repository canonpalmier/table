import { flexRender, type Header } from "@tanstack/react-table";

function getHeaderContent<T, V>(header: Header<T, V>) {
  return flexRender(header.column.columnDef.header, header.getContext());
}

export default getHeaderContent;
