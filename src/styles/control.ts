import { type CSSProperties } from "react";

export const group = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "16px",
  marginBottom: "16px",
} as CSSProperties;

export const list = {
  display: "flex",
  gap: "16px",
  flexWrap: "wrap",
} as CSSProperties;

export const action = {
  display: "flex",
  alignItems: "center",
  padding: "6px",
  background: "#ffffff",
  border: "1px solid #dee2e6",
  borderRadius: "100px",
  cursor: "pointer",
} as CSSProperties;

export const wrapper = {
  position: "relative",
} as CSSProperties;

export const trigger = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  padding: "8px 16px",
  fontFamily: "inherit",
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "14px",
  textOverflow: "ellipsis",
  border: "1px solid #e9ecef",
  borderRadius: "6px",
  background: "#f8f9fa",
  cursor: "pointer",
} as CSSProperties;

export const options = {
  position: "absolute",
  top: "40px",
  left: "0",
  maxHeight: "320px",
  overflowY: "scroll",
  width: "184px",
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  margin: "0",
  padding: "4px",
  listStyle: "none",
  background: "#ffffff",
  color: "#000000",
  borderRadius: "6px",
  border: "1px solid #e9ecef",
  boxShadow: "0 0 2px 0 #0000000d",
} as CSSProperties;

export const option = {
  flexShrink: "0",
  display: "block",
  fontSize: "12px",
  padding: "8px",
  borderRadius: "4px",
  userSelect: "none",
  cursor: "pointer",
} as CSSProperties;
