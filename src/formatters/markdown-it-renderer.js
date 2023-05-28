import cb from 'markdown-it-custom-block';


export const gitenbergRenderer = function (md) {
    return;
    md.renderer.rules.image = function (tokens, idx, options, env, slf) {
		const token = tokens[idx];
		const srcAttribute = token.attrGet('src');
		if (srcAttribute && srcAttribute.includes('shields.io')) {
			return `<!-- wp:gitenberg/shields-badge --><div class="wp-block-gitenberg-shields-badge">
					<img src="https://shields.io/badge/style-flat--square-green?label=healthinesses&amp;logo=appveyor&amp;logoColor=violet&amp;logoWidth=40&amp;labelColor=abcdef&amp;color=fedcba&amp;style=flat-square"/>
				</div><!-- /wp:gitenberg/shields-badge -->`;
		}
	  
		return `${slf.renderToken(tokens, idx, options)}`;
	}
}