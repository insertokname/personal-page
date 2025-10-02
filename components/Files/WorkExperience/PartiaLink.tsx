import { FileItem } from "../types"
import PartiaIcon from "@/components/icons/PartiaIcon"

export const PartiaFile = new FileItem({
    type: {
        kind: "link",
        url: "https://partia.ro",
        name: "Partia",
        description: "Developer on the project.",
        dateModified: "Now"
    },
    icon: PartiaIcon,
    color: "var(--color-gruvbox-purple)"
})