import React from "react";

export interface Cell {
  icon: React.ComponentType<any>;
  primary?: string;
  primaryTooltip?: string;
  secondary?: string;
  secondaryTooltip?: string;
  isDisabled?: boolean;
  isCustom?: boolean;
}

export interface Row {
  cells: Cell[];
}
