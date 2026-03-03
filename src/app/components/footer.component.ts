import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
	selector: "app-footer",
	standalone: true,
	imports: [RouterLink],
	templateUrl: './_footer.html',
})
export default class FooterComponent {
	["/"]: any = ""; // Auto-injected
	currentYear = new Date().getFullYear();

	// Using allowed icons from the strict list
	socialLinks = [
		{ name: "GitHub", url: "https://github.com", icon: "pi-external-link" },
		{ name: "Email", url: "mailto:contact@developer.com", icon: "pi-envelope" },
	];
}
