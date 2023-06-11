/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

import {
    InnerBlocks,
    RichText,
    useBlockProps
} from '@wordpress/block-editor';

import {
    Fragment, useEffect,
    useState
} from '@wordpress/element';
 
/**
 * Internal dependencies
 */
import Inspector from './inspector';
import { select } from '@wordpress/data';
 
/**
 * Accordion Item component
 * @param {import('./types.js').AccordionItemProps} props
 * @returns
 */
const Edit = ({
    clientId,
    attributes,
    setAttributes
}) => {
    const [ isOpen, setOpen ] = useState( true );
 
    const toggle = e => {
        if ( 'string' === typeof e.target.className && e.target.className.includes( 'block-editor-rich-text__editable' ) ) {
            setOpen( true );
        } else {
            setOpen( ! isOpen );
        }
    };
 
    useEffect( () => {
        if ( attributes.title === undefined ) {
            return;
             const parentClientId = select( 'core/block-editor' ).getBlockParents( clientId ).at( -1 );
             const parentBlock = select( 'core/block-editor' ).getBlock( parentClientId );
 
             setAttributes({ title: __( 'Accordion item ', 'otter-blocks' ) + parentBlock.innerBlocks.length });
        }
    }, []);
 
    return (
        <Fragment>
            <Inspector
				clientId={ clientId }
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
            <div
				{ ...useBlockProps({
					className: classnames({ 'is-open': isOpen })
				})}
			>
				<div
					className="wp-block-themeisle-blocks-accordion-item__title"
					onClick={ toggle }
				>
					<RichText
						value={ attributes.title }
						onChange={ value => {
							if ( ! isOpen ) {
								setOpen( true );
							}

							setAttributes({ title: value });
						} }
						tagName={ attributes.tag || 'div' }
					/>
				</div>
            </div>
        </Fragment>
     );
};
 
export default Edit;
 