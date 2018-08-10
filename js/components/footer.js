'use strict';

import html from '../html.js';

// header of html file with main tag to add things to
let template = function() {
    return html`
        <div class ="footer">
            <footer>
                &copy; Lauren Shareshian
            </footer>
        </div>
    `;
};
export default class Footer {

    render() {
        let dom = template();
        return dom;
    }
}
