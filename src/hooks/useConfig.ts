import { getConfigAsync } from "../configuration/configuration-manager";
import { ConfigKeyType } from "../configuration/types/config-types";

function useConfigAsync(configKey: ConfigKeyType): Promise<[string, boolean]> {
    return getConfigAsync(configKey);
}

export default useConfigAsync;