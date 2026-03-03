import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import NavbarComponent from "./components/navbar.component";
import FooterComponent from "./components/footer.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, NavbarComponent, FooterComponent],
	template: `
    <app-navbar></app-navbar>
    <main class="min-h-screen">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
})
export default class AppComponent {}
