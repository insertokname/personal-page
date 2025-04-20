import { MeFile } from "./MeFile";
import { ProjectsDirectory } from "./Projects";
import { DirectoryFileType } from "./types";

export default function getRoot(): DirectoryFileType {
    return {
        name: "root",
        kind: "directory",
        description: "File folder",
        children: [MeFile, ProjectsDirectory],
    };
};
