import GithubIcon from "@/components/icons/GithubIcon"
import { FileItem } from "../types"
import PbinfoIcon from "@/components/icons/PbinfoIcon"

export const PbinfoCliLink = new FileItem({
    type: {
        kind: "link",
        url: "https://github.com/insertokname/depy",
        name: "pbinfo-cli",
        description: "a cli client for pbinfo.ro",
        dateModified: "15 May 2025"
    },
    icon: PbinfoIcon,
    color: "var(--color-gruvbox-purple)"
})