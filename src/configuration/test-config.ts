import { IConfigItem } from "./IConfigItem";
import { ConfigKeyType } from "./types/config-types";

const TestConfig: readonly IConfigItem[] = [
    { Key: ConfigKeyType.URL, Value: "test url" } as IConfigItem,
    { Key: ConfigKeyType.ENV, Value: process.env["NODE_ENV"] } as IConfigItem
];

export default TestConfig;