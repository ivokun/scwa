import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "scwa",
      region: "ap-northeast-1",
    };
  },
  stacks(app) {
    app.stack(function Web({ stack }) {
      const web = new NextjsSite(stack, "web", {
        warm: 10,
        environment: {
          OPENWEATHERMAP_API_KEY: process.env.OPENWEATHERMAP_API_KEY ?? "",
          OPENWEATHERMAP_API_URL: process.env.OPENWEATHERMAP_API_URL ?? "",
          IP2LOCATION_API_KEY: process.env.IP2LOCATION_API_KEY ?? "",
          IP2LOCATION_API_URL: process.env.IP2LOCATION_API_URL ?? "",
          UNSPLASH_API_URL: process.env.UNSPLASH_API_URL ?? "",
          UNSPLASH_API_ACCESS_KEY: process.env.UNSPLASH_API_ACCESS_KEY ?? "",
        },
      });

      stack.addOutputs({
        WebURL: web.url,
      });
    });
  },
} satisfies SSTConfig;
