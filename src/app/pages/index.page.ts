import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NgOptimizedImage } from "@angular/common";
import { Button } from "primeng/button";
import { Tag } from "primeng/tag";

import FooterComponent from "@app/components/footer.component";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [RouterLink, NgOptimizedImage, Button, Tag, FooterComponent],
	templateUrl: './_index.html',
})
export default class HomePage {
	project = signal<any>(null);

	skill = signal<any>(null);

	["/projects"]: any = ""; // Auto-injected
	tag: any = ""; // Auto-injected
	// State
	name = signal("Alex Dev");
	role = signal("Full Stack Developer");
	bio = signal(
		"Crafting high-performance web applications with modern technologies.",
	);
	avatarUrl = signal("https://picsum.photos/seed/alexdev/200/200");

	skills = signal<Skill[]>([
		{ name: "Angular", icon: "pi pi-android" },
		{ name: "TypeScript", icon: "pi pi-code" },
		{ name: "Node.js", icon: "pi pi-server" },
		{ name: "Tailwind CSS", icon: "pi pi-palette" },
	]);

	featuredProjects = signal<Project[]>([
		{
			slug: "ecommerce-dashboard",
			title: "E-Commerce Dashboard",
			description:
				"A comprehensive analytics dashboard for online retailers featuring real-time data visualization.",
			tags: ["Angular", "PrimeNG", "RxJS"],
		},
		{
			slug: "task-manager",
			title: "Task Manager API",
			description:
				"A robust RESTful API designed for managing tasks and facilitating team collaboration.",
			tags: ["Node.js", "H3", "TypeScript"],
		},
	]);

	scrollToProjects() {
		document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
	}
}

interface Skill {
	name: string;
	icon: string;
}

interface Project {
	slug: string;
	title: string;
	description: string;
	tags: string[];
}
