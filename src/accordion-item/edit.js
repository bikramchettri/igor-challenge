import { __ } from "@wordpress/i18n";

import { useBlockProps, RichText } from "@wordpress/block-editor";
import { Fragment } from "@wordpress/element";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { title, content } = attributes;

	return (
		<Fragment>
			<div {...useBlockProps({ className: "igor-accordion-child" })}>
				<div className="igor-accordion-child__title">
					<RichText
						tagName="p"
						placeholder={__("Write Title", "igor-challenge")}
						value={title}
						onChange={(value) => setAttributes({ title: value })}
						allowedFormats={["core/bold", "core/italic"]}
					/>
				</div>
				<div className="igor-accordion-child__content">
					<RichText
						tagName="p"
						placeholder={__("Write Content", "igor-challenge")}
						value={content}
						onChange={(value) => setAttributes({ content: value })}
					/>
				</div>
			</div>
		</Fragment>
	);
}
