import IconProps from "@/components/icons/IconProps";
import { JSX } from "react";

export interface File {
  name: string;
  type: string;
  dateModified: string;
  icon: React.ComponentType<IconProps>;
}
