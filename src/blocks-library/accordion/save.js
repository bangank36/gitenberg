/**
 * WordPress dependencies.
 */
import {
	InnerBlocks,
	RichText,
	useBlockProps
} from '@wordpress/block-editor';

const Save = ({
	attributes
}) => {
	const blockProps = useBlockProps.save({
		open: attributes.initialOpen ? true : false
	});

	return (
		<details>
            <summary className="gitenberg-blocks-accordion-item__title">
				<RichText.Content
					value={ attributes.title }
				/>
			</summary>
            <div className="gitenberg-blocks-accordion-item__content">
				<InnerBlocks.Content />
			</div>
        </details>
	);
};

export default Save;
