/**
 * WordPress Dependencies
 */
 import { __ } from '@wordpress/i18n';
 import {
     InspectorControls,
 } from '@wordpress/block-editor';
 import { 
     ToggleControl,
     PanelBody } from '@wordpress/components';
 
 function Inspector( props ) {
     const { initialOpen } = props.attributes;

     const onInitialOpenToggle = initialOpen => {
		setAttributes({ initialOpen });

		if ( ! initialOpen ) {
			return;
		}
    }
 
     return (
        <InspectorControls>
			<PanelBody
				title={ __( 'Settings', 'otter-blocks' ) }
			>
				<ToggleControl
					label={ __( 'Initially Open', 'otter-blocks' ) }
					checked={ initialOpen }
					onChange={ onInitialOpenToggle }
				/>
			</PanelBody>
		</InspectorControls>
     );
 }

 export default Inspector;