import { type Table } from "@tanstack/react-table";
import TableHeader from "./TableHeader";
import TableCell from "./TableCell";
import * as styles from "../styles/table";

function TableCore<T>({ table }: { table: Table<T> }) {
  return (
    <div style={styles.box}>
      <table style={styles.table}>
        <thead>
          <tr>
            {table.getLeafHeaders().map((header) => (
              <TableHeader key={header.id} header={header} />
            ))}
          </tr>
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} cell={cell} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableCore;
