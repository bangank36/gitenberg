import TurndownService from 'turndown';
import MarkdownIt from 'markdown-it';
import { gfm } from './turndown-gfm';
import { gitenbergRenderer } from './markdown-it-renderer';

const turndown = new TurndownService( {
	bulletListMarker: '-',
} );
gfm( turndown );

const md = new MarkdownIt();
gitenbergRenderer(md);

turndown.addRule( 'listItem', {
	filter: 'li',

	replacement: function ( content, node, options ) {
		content = content
			.replace( /^\n+/, '' ) // remove leading newlines
			.replace( /\n+$/, '\n' ) // replace trailing newlines with just a single one
			.replace( /\n/gm, '\n    ' ); // indent
		var prefix = options.bulletListMarker + ' ';
		var parent = node.parentNode;
		if ( parent.nodeName === 'OL' ) {
			var start = parent.getAttribute( 'start' );
			var index = Array.prototype.indexOf.call( parent.children, node );
			prefix = ( start ? Number( start ) + index : index + 1 ) + '. ';
		}
		return prefix + content + ( node.nextSibling && ! /\n$/.test( content ) ? '\n' : '' );
	},
} );

// Keeping the <details> content when process in turndown
turndown.addRule('keep', {
	filter: ['details'],
	replacement: function (content, node) {
	  	return node.outerHTML
	}
} )

/**
 * Initial content loader. Determine if the textarea contains blocks or raw HTML
 * @param {string} content Text area content
 * @param {*} parser Gutenberg `parse` function
 * @param {*} rawHandler Gutenberg `rawHandler` function
 */
export function load( content, parser, rawHandler ) {
	// Does the content contain blocks?
	if ( content.value.indexOf( '<!--' ) !== -1 ) {
		// Parse the blocks
		return parser( content.value );
	}

	let htmlContent = md.render( content.value );

	// Raw HTML - do our best
	return rawHandler( { HTML: htmlContent } );
}

/**
 * Saves content to the textarea
 * @param {string} content Serialized block content
 * @param {HTMLTextAreaElement} textarea Textarea node
 */
export function save( content, textarea ) {
	textarea.value = turndown.turndown( content ) + '\n';
}
