import GithubIcon from "@/components/icons/GithubIcon"
import { FileItem } from "../types"

export const DepyLink = new FileItem({
    type: {
        kind: "link",
        url: "https://github.com/insertokname/depy",
        name: "Depy",
        description: "Declarative extension of scoop",
        dateModified: "31 Jul 2024"
    },
    icon: GithubIcon,
    color: "var(--color-gruvbox-purple)"
})