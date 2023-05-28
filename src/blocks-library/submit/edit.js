/**
 * WordPress Dependencies
 */
import { isEmpty } from 'lodash';
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { addQueryArgs } from '@wordpress/url';
/**
 *  Custom Dependencies
 */
import classnames from 'classnames';
import Inspector from './inspector';

export default function edit( props ) {
	const blockProps = useBlockProps( {
		className: classnames( 'cf7-submit-field' ),
	} );

	const { label, logo, logoColor, logoWidth, labelColor, color } = props.attributes;
	const shieldsUrl = addQueryArgs( 'https://shields.io/badge/style-flat--square-green', {
		label, 
		logo, 
		logoColor, 
		logoWidth, 
		labelColor, 
		color,
		style: 'flat-square',
	})

	return (
		<>
			<div { ...blockProps }>
				<img src={shieldsUrl}/>
			</div>
			<Inspector { ...props } />
		</>
	);
}
