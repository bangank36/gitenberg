/**
 * WordPress Dependencies
 */
import { RawHTML } from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';
import { addQueryArgs } from '@wordpress/url';

/**
 * Custom Dependencies
 */
import { convertSubmitBlockToCF7Shortcode } from '../utils/convert-to-cf7-shortcode';

export default function save( props ) {
	const { label, logo, logoColor, logoWidth, labelColor, color, style } = props.attributes;
	const shieldsUrl = addQueryArgs( 'https://shields.io/badge/style-flat--square-green', {
		label, 
		logo, 
		logoColor, 
		logoWidth, 
		labelColor, 
		color,
		style
	})

	return (
		<div { ...useBlockProps.save() }>
			<img src={shieldsUrl}/>
		</div>
	);
}
