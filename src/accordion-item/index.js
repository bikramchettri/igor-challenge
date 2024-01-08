import { registerBlockType } from "@wordpress/blocks";

import "./style.scss";

import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";

registerBlockType(metadata.name, {
	example: {
		attributes: {
			title: "Why should you use accordion?",
			content:
				"Accordions streamline content presentation by condensing information into expandable sections. They optimize space, enhance organization, and improve readability, making websites more user-friendly.",
		},
	},
	edit: Edit,
	save,
});
