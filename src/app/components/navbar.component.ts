import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  templateUrl: './_navbar.html',
	selector: "app-navbar",
	standalone: true,
	imports: [RouterLink, RouterLinkActive],
	
})
export default class NavbarComponent {
	navLinks = [
		{ path: "/", label: "Home", icon: "pi pi-home" },
		{ path: "/projects", label: "Projects", icon: "pi pi-th-large" },
	];
}
