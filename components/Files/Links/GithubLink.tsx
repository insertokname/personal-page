import GithubIcon from "@/components/icons/GithubIcon"
import { FileItem } from "../types"

export const GithubLink = new FileItem({
    type: {
        kind: "link",
        url: "https://github.com/insertokname",
        name: "Github",
        description: "My Github Profile",
    },
    icon: GithubIcon,
    color: "var(--color-gruvbox-purple)"
})