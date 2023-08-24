import fs from "fs-extra";
import path from "path";

import DEFAULT_CONFIG from "./config/config.json";

export { DEFAULT_CONFIG };

export interface Config {
    color?: string;
    defaultSize: number;
    classNamePrefix: string;
}

export async function resolveConfig(configFilePath: string): Promise<Config> {
    if (await fs.exists(configFilePath)) {
        return (await fs.readJSON(path.resolve(configFilePath))) as Config;
    }

    const defaultConfigFilePath = path.join(process.cwd(), "iconfont-componentized.json");

    if (await fs.exists(defaultConfigFilePath)) {
        return (await fs.readJSON(defaultConfigFilePath)) as Config;
    }

    return DEFAULT_CONFIG as Config;
}

export async function getConfig(configFilePath: string): Promise<Config> {
    const config = await resolveConfig(configFilePath);

    return {
        ...DEFAULT_CONFIG,
        ...config,
    };
}
