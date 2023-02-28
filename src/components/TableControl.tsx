import { Fragment } from "react";
import { type Column } from "@tanstack/react-table";
import { Listbox } from "@headlessui/react";
import ArrowsIcon from "../icons/ArrowsIcon";
import getColumnLabel from "../utils/getColumnLabel";
import getColumnList from "../utils/getColumnList";
import getColumnPredicate from "../utils/getColumnPredicate";
import * as styles from "../styles/control";

function Item({ value, label }: { value: string; label?: string }) {
  return (
    <Listbox.Option value={value} as={Fragment}>
      {({ active, selected }: { active: boolean; selected: boolean }) => (
        <li
          style={{
            ...styles.option,
            background: active || selected ? "#e9ecef" : undefined,
          }}
        >
          {label ?? value}
        </li>
      )}
    </Listbox.Option>
  );
}

function TableControl<T, V>({ column }: { column: Column<T, V> }) {
  return (
    <Listbox
      value={getColumnPredicate(column)}
      onChange={column.setFilterValue}
    >
      <div style={styles.wrapper}>
        <Listbox.Button style={styles.trigger}>
          {getColumnLabel(column)}
          <ArrowsIcon />
        </Listbox.Button>
        <Listbox.Options style={styles.options}>
          <Item value="" label="Todos" />
          {getColumnList(column).map((value, index) => (
            <Item key={index} value={value} />
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}

export default TableControl;
