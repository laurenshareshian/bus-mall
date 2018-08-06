1. As a test subject, I want to see three images, so I can click on one and choose the one I like.
* In html file, create a a form template and a results template.
* Create a form that has 3 radio buttons and a vote button (later change to a onselect option)
* In Javascript file, keep track of total clicks with variable totalClicks.
* Create a class called image that has the properties key, filename, numSelected, numViewed, viewedLastTime. 
* Create an array containing the class instances in which viewedLastTime = false.
* Randomly select three from that array.
* Upon submission, update # of numSelected for the winner and update numViewed and viewedLastTime for all of them.

2. As a market researcher, I want to see a summary of each image, so that I can pick the top sellers.
* When totalClicks > 25, clear innerhtml from form template and dislay results template.
* Results template will have a table (bring in TableRow and TableList components from previous assignment) and a chart (D3).

3. Files I need:
* index.html (contains form and survey templates and scripts and root id)
* index.js and html.js
* products-api.js (contains the images and properties)
* app.js (creates html with header and main tag, creates ProductList and the form, 
* randomly chooses three, listens for events)
* table-row.js (creates a class that is a row in my summary table)
* table-list.js (creates all the table rows and update and render methods)
* product.js (creates class for each image and its properties)
