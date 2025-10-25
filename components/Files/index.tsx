import { LinksDirectory } from "./Links";
import { MeFile } from "./MeFile";
import { ProjectsDirectory } from "./Projects";
import { DirectoryFileType } from "./types";
import { WorkExperience } from "./WorkExperience";

export default function getRoot(): DirectoryFileType {
    return {
        name: "root",
        kind: "directory",
        description: "File folder",
        children: [
            MeFile,
            WorkExperience,
            ProjectsDirectory,
            LinksDirectory,
        ],
    };
};
