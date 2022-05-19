import { IConfigItem } from "./IConfigItem";
import { ConfigKeyType } from "./types/config-types";

const ProductionConfig: readonly IConfigItem[] = [
    { Key: ConfigKeyType.URL, Value: "prod url" } as IConfigItem,
    { Key: ConfigKeyType.URL, Value: process.env["NODE_ENV"] } as IConfigItem
];

export default ProductionConfig;

