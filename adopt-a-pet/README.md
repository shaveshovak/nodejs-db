# 🔨 ExpressJS – Adopt A Pet
<p>Imagine you are looking to add a new furry friend to your family! On the pet adoption website, you browse through the categories of animals and select the one you’re interested in, which brings you to another page that contains a list of available pets. Then, you continue your search by further clicking on an individual pet to view its profile page.</p> 
<p>Every time you navigate to a different webpage, your browser is making a request to the web server. Thanks to routing, the server knows exactly which endpoint should handle the request and can return the correct HTML page to display.</p>
<p>In this project, you’ll use the Express framework to create a simple pet adoption site that contains multiple routes.</p>
<p>Let’s get started!</p>

<h2>Set up the Express app</h2>
<p>1. Via NPM, install Express by doing in the terminal: <code>npm install express</code></p>
<p>Then create a file app.js, and import express from the express module as the following <i>Hello World</i>from the documentation.</p>
<p>2. Create an instance of the express module, and save the object to a variable called app.</p>
<h2>Create the index route</h2>
<p>3. To create the first route /, first define a function called app.get() on the route /, that returns an HTML <h1> element with the text Adopt a Pet!. Remember that HTML can be returned as a Template string  with the function res.send().</p>
<p>4. Use the <code>app.listen()</code> function with the port of your choice (by convention we use the port 3000)</p>
<p>Run your code now and go on http://localhost:3000, you should see the heading displayed on the page!</p>
<p>5. Let’s add some more elements to the page. Right after the <h1> element, add a <p> element that contains the text <b>Browse through the links below to find your new furry friend:</b>.</p>
<p>6. Now after the <p> element, create an unordered list using <ul>. The bulleted list should contain three items: Dogs, Cats, and Rabbits. Remember to use <li> to create each item.</p>
<h2>Create the animals’ route</h2>
<p>7. The site is looking good so far! The next step is to create individual pages for each animal type and link them in the bulleted list. To do that, we’ll add a new /animals route.</p>
<p>In the <code>res.send()</code>, create a string containing an <h1> element with the text List of pets</p>
<p>8. Create a new route with <code>app.get()</code> with the URL pattern ‘/animals/X’, where X is a variable section of the URL. Name the variable part :pet_type.</p>
<p>9. Next, take the parameter called :pet_type and modify the <h1> heading to read List of X, where X is :pet_type with the object req.param.</p>
<p>10. We’re ready to create links on the index page that links to each individual animal page! Inside the / route, turn each bulleted list item into a link by adding an<code> <a> </code> element within each <code><li></code> element:</p>
<ul>
    <li>Dogs should link to ‘/animals/dogs’</li>
    <li>Cats should link to ‘/animals/cats’</li>
    <li>Rabbits should link to ‘/animals/rabbits’</li>
</ul>
<p>Now run your code and try clicking on the links!</p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>