/**
* Internal dependencies
*/
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import './style.scss';

/**
* External dependencies
*/
import { __ } from '@wordpress/i18n';

import { registerBlockType, createBlock } from '@wordpress/blocks';
import { select } from '@wordpress/data';

/**
* Module Constants
*/
const blockName = 'getwid/button-group';

/**
* Register the block
*/
registerBlockType('getwid/button-group', {
	title: __( 'Button Group', 'getwid' ),
	icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,3v6H2V3H22 M24,1H0v10h24V1L24,1z"/><g><rect x="4" y="5" width="16" height="2"/></g><path d="M22,15v6H2v-6H22 M24,13H0v10h24V13L24,13z"/><g><rect x="4" y="17" width="16" height="2"/></g></svg>,
	category: 'getwid-blocks',
	keywords: [
	],
	supports: {
		inserter: true
	},
	transforms: {
		to: [
			{
				type: 'block',
				blocks: [ 'core/button' ],
				transform: ( attributes ) => {
					const clientId = select('core/block-editor').getSelectedBlockClientId();
					const innerBlocksArr = select('core/block-editor').getBlock(clientId).innerBlocks;
					let inner_attributes = [];

					 if (innerBlocksArr.length){
						innerBlocksArr.forEach( (item, index) => {
							if (item.attributes.text != ''){
								inner_attributes.push({
									text: item.attributes.text,
									url: item.attributes.url,
								});
							}
						});
					}

					return inner_attributes.map( ( { text, url } ) => createBlock( 'core/button', {
						text,
						url,
					} ) );
				}
			}
		]
	},
	attributes,
	edit: Edit,
	save
});
