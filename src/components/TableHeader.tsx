import { type Header } from "@tanstack/react-table";
import ArrowsIcon from "../icons/ArrowsIcon";
import getHeaderContent from "../utils/getHeaderContent";
import * as styles from "../styles/table";

function TableHeader<T, V>({ header }: { header: Header<T, V> }) {
  return (
    <th style={styles.header}>
      <div style={styles.slot}>
        <span style={styles.content}>{getHeaderContent(header)}</span>
        {header.column.getCanSort() && (
          <button
            style={styles.button}
            onClick={header.column.getToggleSortingHandler()}
          >
            <ArrowsIcon />
          </button>
        )}
      </div>
    </th>
  );
}

export default TableHeader;
