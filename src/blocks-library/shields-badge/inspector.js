/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
} from '@wordpress/block-editor';
import { 
	TextControl, 
	SelectControl,
	PanelBody } from '@wordpress/components';

function Inspector( props ) {
	const { label, logo, logoColor, logoWidth, labelColor, color, style } = props.attributes;

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Parameters', 'gitenberg' ) }>
				<SelectControl
					label={__('Badge Style', 'gitenberg')}
					value={ style }
					options={ [
						{ label: 'Plastic', value: 'plastic' },
						{ label: 'Square', value: 'flat' },
						{ label: 'Flat square', value: 'flat-square' },
						{ label: 'For the badge', value: 'for-the-badge' },
						{ label: 'Social', value: 'social' }
					] }
					onChange={(newValue) => props.setAttributes({ style: newValue })}
				/>
				<TextControl
					style={ { maxWidth: '100%' } }
					value={label}
					label={__('Label', 'gitenberg')}
					help={__('Left-hand-side text', 'gitenberg')}
					onChange={(newValue) => props.setAttributes({ label: newValue })}
				/>
				<TextControl
					style={ { maxWidth: '100%' } }
					value={logo}
					label={__('Logo', 'gitenberg')}
					help={__('Insert the logo name or custom logo image.', 'gitenberg')}
					onChange={(newValue) => props.setAttributes({ logo: newValue })}
				/>
				<TextControl
					style={ { maxWidth: '100%' } }
					value={ logoColor }
					label={__('Logo Color', 'gitenberg')}
					onChange={ ( newValue ) =>
						props.setAttributes( { logoColor: newValue } )
					}
				/>
				<TextControl
					style={ { maxWidth: '100%' } }
					value={ logoWidth }
					label={__('Logo Width', 'gitenberg')}
					onChange={ ( newValue ) =>
						props.setAttributes( { logoWidth: newValue } )
					}
				/>
				<TextControl
					style={ { maxWidth: '100%' } }
					value={ labelColor }
					label={__('Label Color', 'gitenberg')}
					onChange={ ( newValue ) =>
						props.setAttributes( { labelColor: newValue } )
					}
				/>
				<TextControl
					style={ { maxWidth: '100%' } }
					value={ color }
					label={__('Badge Color', 'gitenberg')}
					help={__('Background color for the right part.', 'gitenberg')}
					onChange={ ( newValue ) =>
						props.setAttributes( { color: newValue } )
					}
				/>
			</PanelBody>
		</InspectorControls>
	);
}

export default Inspector;
