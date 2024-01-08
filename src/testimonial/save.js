import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { quote, name, designation } = attributes;

	return (
		<div {...useBlockProps.save({ className: "igor-testimonial" })}>
			{quote ? <RichText.Content tagName="p" value={quote} /> : null}
			{name ? <RichText.Content tagName="h3" value={name} /> : null}
			{designation ? (
				<RichText.Content tagName="p" value={designation} />
			) : null}
		</div>
	);
}
