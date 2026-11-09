import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// Every route is prerendered and nothing revalidates, so the cache ships with the
// static assets. Deploys no longer upload it to R2, where uploads have timed out.
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
});
