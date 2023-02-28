import { type Cell } from "@tanstack/react-table";
import MinusIcon from "../icons/MinusIcon";
import PlusIcon from "../icons/PlusIcon";
import getCellContent from "../utils/getCellContent";
import * as styles from "../styles/table";

function TableCell<T, V>({ cell }: { cell: Cell<T, V> }) {
  return (
    <td style={styles.cell}>
      <div style={styles.slot}>
        {cell.getIsGrouped() && (
          <button
            style={styles.button}
            onClick={cell.row.getToggleExpandedHandler()}
          >
            {cell.row.getIsExpanded() ? <MinusIcon /> : <PlusIcon />}
          </button>
        )}
        {!cell.getIsPlaceholder() && (
          <span style={styles.content} title={cell.getValue()?.toString()}>
            {getCellContent(cell)}
          </span>
        )}
      </div>
    </td>
  );
}

export default TableCell;
