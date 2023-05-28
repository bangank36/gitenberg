/**
 * WordPress Dependencies
 */
import { RawHTML } from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Custom Dependencies
 */
import { convertSubmitBlockToCF7Shortcode } from '../utils/convert-to-cf7-shortcode';

export default function save( props ) {
	const { color, id, label } = props.attributes;

	return (
		<div { ...useBlockProps.save() }>
			<img src={`https://shields.io/badge/style-flat--square-green?logo=appveyor&style=flat-square&logoColor=${color}`}/>
		</div>
	);
}
