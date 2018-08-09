import html from '/js/html.js';

let template = function() {
    return html`
        <li> 
        <h2>Methodology</h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non sodales neque sodales ut etiam. At ultrices mi tempus imperdiet nulla. Sit amet risus nullam eget felis eget nunc lobortis. Donec enim diam vulputate ut pharetra sit amet aliquam id. Phasellus vestibulum lorem sed risus ultricies tristique. Morbi enim nunc faucibus a pellentesque sit. Sagittis orci a scelerisque purus. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Pellentesque id nibh tortor id. Rhoncus dolor purus non enim praesent elementum. Ac auctor augue mauris augue neque gravida in. Ornare massa eget egestas purus. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Cursus turpis massa tincidunt dui ut ornare. Nisi quis eleifend quam adipiscing vitae. Nam at lectus urna duis convallis convallis tellus. Rutrum tellus pellentesque eu tincidunt tortor aliquam. Viverra mauris in aliquam sem fringilla ut morbi tincidunt.
        </li>
    `;
};
export default class Methodology {
    render() {
        let dom = template();
        return dom;
    }
}