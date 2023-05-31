/**
 * This configuration file lets you run `$ sanity [command]` in this folder
 * Go to https://www.sanity.io/docs/cli to learn more.
 **/
import { API_TOKEN, DATA_SET, PROJECT_ID } from "../env";

import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({ api: { PROJECT_ID, DATA_SET, API_TOKEN } });
