import { IConfigItem } from "./IConfigItem";
import { ConfigKeyType } from "./types/config-types";

export async function getConfigAsync(key: ConfigKeyType): Promise<[string, boolean]> {
    let configValue: string = "";
    let isLoading = true;
    let configs: readonly IConfigItem[] = {} as IConfigItem[];

    switch (process.env["NODE_ENV"]) {
        case "development": {
            await import("./dev-config")
                .then(devConfig => {
                    configs = devConfig.default;
                    isLoading = false;
                })
            break;
        }

        case "test": {
            await import("./test-config")
                .then(testConfig => {
                    configs = testConfig.default;
                    isLoading = false;
                });
            break;
        }

        case "production": {
            await import("./production-config")
                .then(productionConfig => {
                    configs = productionConfig.default;
                    isLoading = false;
                })
            break;
        }

        default: {
            await import("./dev-config")
                .then(devConfig => {
                    configs = devConfig.default;
                    isLoading = false;
                })
            break;
        }
    };

    const configItems = configs.filter((config) => {
        return config.Key === key;
    });

    if (configItems && configItems.length > 0) {
        configValue = configItems[0].Value;
    }

    return [configValue, isLoading];
}
