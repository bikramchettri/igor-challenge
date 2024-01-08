import { __ } from "@wordpress/i18n";

import {
	useBlockProps,
	RichText,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, ToggleControl, RangeControl } from "@wordpress/components";
import { Fragment } from "@wordpress/element";

import "./editor.scss";

export default function Edit({ attributes, setAttributes, isSelected }) {
	const { heading, openMultiple, itemGap } = attributes;

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={__("Settings", "igor-challenge")}>
					<ToggleControl
						label={__("Multiple items open at a time", "igor-challenge")}
						checked={openMultiple}
						onChange={() => {
							setAttributes({ openMultiple: !openMultiple });
						}}
					/>
					<RangeControl
						label={__("Accordion Gap", "igor-challenge")}
						min={0}
						max={20}
						value={itemGap}
						onChange={(value) => setAttributes({ itemGap: value })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<RichText
					tagName="h2"
					placeholder={__("Write title for Accordion", "igor-challenge")}
					value={heading}
					onChange={(value) => setAttributes({ heading: value })}
				/>
				<InnerBlocks
					allowedBlocks={["igor-blocks/accordion-item"]}
					renderAppender={InnerBlocks.ButtonBlockAppender}
				/>
			</div>
		</Fragment>
	);
}
