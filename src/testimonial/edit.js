import { __ } from "@wordpress/i18n";

import { useBlockProps, RichText } from "@wordpress/block-editor";
import { Fragment } from "@wordpress/element";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { quote, name, designation } = attributes;

	return (
		<Fragment>
			<div {...useBlockProps()}>
				<RichText
					tagName="p"
					placeholder={__("Write Quote", "igor-challenge")}
					value={quote}
					onChange={(value) => setAttributes({ quote: value })}
				/>
				<RichText
					tagName="h3"
					placeholder={__("Write Name", "igor-challenge")}
					value={name}
					onChange={(value) => setAttributes({ name: value })}
				/>
				<RichText
					tagName="p"
					placeholder={__("Write Designation", "igor-challenge")}
					value={designation}
					onChange={(value) => setAttributes({ designation: value })}
				/>
			</div>
		</Fragment>
	);
}
