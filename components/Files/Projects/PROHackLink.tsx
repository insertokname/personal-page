import PROIcon from "@/components/icons/PROIcon"
import { FileItem } from "../types"

export const PROHackLink = new FileItem({
    type: {
        kind: "link",
        url: "https://github.com/insertokname/ProHack",
        name: "PROHack",
        description: "an automated bot for PRO",
        dateModified: "26 Oct 2025"
    },
    icon: PROIcon,
    color: "var(--color-gruvbox-purple)"
})