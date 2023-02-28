import { type CSSProperties } from "react";

export const box = {
  border: "1px solid #f1f3f5",
  borderRadius: "6px",
  overflow: "hidden",
} as CSSProperties;

export const table = {
  width: "100%",
  tableLayout: "fixed",
  borderCollapse: "collapse",
  textAlign: "left",
  fontFeatureSettings: '"tnum"',
  background: "#ffffff",
  color: "#000000",
} as CSSProperties;

export const header = {
  background: "#f8f9fa",
  color: "#495057",
  fontSize: "12px",
  fontWeight: "400",
  lineHeight: "14px",
  padding: "8px 16px",
  borderBottom: "1px solid #f1f3f5",
} as CSSProperties;

export const cell = {
  fontSize: "12px",
  lineHeight: "14px",
  padding: "8px 16px",
  borderTop: "1px solid #f1f3f5",
} as CSSProperties;

export const slot = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
} as CSSProperties;

export const button = {
  display: "flex",
  alignItems: "center",
  padding: "1px",
  background: "#ffffff",
  border: "1px solid #dee2e6",
  borderRadius: "4px",
  cursor: "pointer",
} as CSSProperties;

export const content = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
} as CSSProperties;
