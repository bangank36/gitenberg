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
            <summary>This is the accordion title</summary>
            This is the accordion content
        </details>
	);
};

export default Save;
