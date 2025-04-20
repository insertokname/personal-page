import IconProps from "@/components/icons/IconProps";

export interface FileItem {
  name: string;
  type: string;
  dateModified: string;
  icon: React.ComponentType<IconProps>;
}
