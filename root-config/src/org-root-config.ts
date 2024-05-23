import { registerApplication, start } from "single-spa";

registerApplication({
  name: "microfrontend-app",
  app: () => System.import("@org/microfrontend-app"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
