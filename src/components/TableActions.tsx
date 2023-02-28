import { type Column, type Table } from "@tanstack/react-table";
import ResetIcon from "../icons/ResetIcon";
import TableControl from "./TableControl";
import * as styles from "../styles/control";

function Control<T, V>({ column }: { column: Column<T, V> }) {
  return column.getCanFilter() ? <TableControl column={column} /> : null;
}

function TableActions<T>({ table }: { table: Table<T> }) {
  return (
    <div style={styles.group}>
      <div style={styles.list}>
        {table.getAllFlatColumns().map((column) => (
          <Control key={column.id} column={column} />
        ))}
      </div>
      <button style={styles.action} onClick={() => table.resetColumnFilters()}>
        <ResetIcon />
      </button>
    </div>
  );
}

export default TableActions;
