import { render } from "@analogjs/router/server";
import { config } from "./app/app.config.server";

import "zone.js/node";
import "@angular/platform-server/init";

import AppComponent from "./app/app.component";

export default render(AppComponent, config);
