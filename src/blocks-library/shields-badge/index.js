import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';

import edit from './edit';
import save from './save';

import { button } from '@wordpress/icons';

console.log('import');

registerBlockType( metadata, {
	apiVersion: 2,
	edit,
	save,
	icon: button,
} );
