import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { title, content } = attributes;
	return (
		<div {...useBlockProps.save({ className: "igor-accordion-item" })}>
			{title ? <RichText.Content tagName="p" value={title} /> : null}
			{content ? <RichText.Content tagName="p" value={content} /> : null}
		</div>
	);
}
