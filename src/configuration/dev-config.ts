import { IConfigItem } from "./IConfigItem";
import { ConfigKeyType } from "./types/config-types";

const DevConfig: readonly IConfigItem[] = [
    { Key: ConfigKeyType.URL, Value: "dev url" } as IConfigItem,
    { Key: ConfigKeyType.ENV, Value: process.env["NODE_ENV"] } as IConfigItem
];

export default DevConfig;