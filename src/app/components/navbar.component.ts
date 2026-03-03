import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
	selector: "app-navbar",
	standalone: true,
	imports: [RouterLink, RouterLinkActive],
	templateUrl: './_navbar.html',
})
export default class NavbarComponent {
	navLinks = [
		{ path: "/", label: "Home", icon: "pi-home" },
		{ path: "/projects", label: "Projects", icon: "pi-th-large" },
	];
}
