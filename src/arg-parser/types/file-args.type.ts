import { FileType } from "../../config-parser/shared/types/file.type";
import { Command } from "./command.type";
import { Version } from "../../types/version.type";

export type FileArgs = ParseFileArgs | GenFileArgs | ParseGenFileArgs;

export type ParseFileArgs = {
  command: Command.PARSE;
} & ConfigFile &
  JsonFile & {
    append: boolean;
    version?: Version;
  };

export type GenFileArgs = {
  command: Command.GEN;
} & JsonFile &
  MdFile;

export type ParseGenFileArgs = {
  command: Command.PARSE_GEN;
} & ConfigFile &
  JsonFile &
  MdFile & {
    append: boolean;
    version?: Version;
  };

export type ConfigFile = {
  configFile: string;
  configFileType: FileType;
};

export type JsonFile = {
  jsonFile: string;
};

export type MdFile = {
  mdFile: string;
};
