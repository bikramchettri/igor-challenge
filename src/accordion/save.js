import { useBlockProps, RichText, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { heading, openMultiple, itemGap } = attributes;
	return (
		<div {...useBlockProps.save()}>
			{heading ? <RichText.Content tagName="h2" value={heading} /> : null}
			<div className="igor-accordion__container" style={{}}>
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
