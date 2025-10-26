import GithubIcon from "@/components/icons/GithubIcon"
import { FileItem } from "../types"
import MailIcon from "@/components/icons/MailIcon"

export const MailLink = new FileItem({
    type: {
        kind: "link",
        url: "mailto:spam.insertokname@gmail.com",
        name: "Mail",
        description: "Send me an email",
    },
    icon: MailIcon,
    color: "var(--color-gruvbox-purple)"
})