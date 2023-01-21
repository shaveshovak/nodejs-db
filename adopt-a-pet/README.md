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
<p>3. To create the first route /, first define a function called app.get() on the route /, that returns an HTML <code> h1 </code> element with the text Adopt a Pet!. Remember that HTML can be returned as a Template string  with the function res.send().</p>
<p>4. Use the <code>app.listen()</code> function with the port of your choice (by convention we use the port 3000)</p>
<p>Run your code now and go on http://localhost:3000, you should see the heading displayed on the page!</p>
<p>5. Let’s add some more elements to the page. Right after the <code> h1 </code> element, add a <p> element that contains the text <b>Browse through the links below to find your new furry friend:</b>.</p>
<p>6. Now after the <p> element, create an unordered list using <ul>. The bulleted list should contain three items: Dogs, Cats, and Rabbits. Remember to use <li> to create each item.</p>
<h2>Create the animals’ route</h2>
<p>7. The site is looking good so far! The next step is to create individual pages for each animal type and link them in the bulleted list. To do that, we’ll add a new /animals route.</p>
<p>In the <code>res.send()</code>, create a string containing an <code> h1 </code> element with the text List of pets</p>
<p>8. Create a new route with <code>app.get()</code> with the URL pattern ‘/animals/X’, where X is a variable section of the URL. Name the variable part :pet_type.</p>
<p>9. Next, take the parameter called :pet_type and modify the <code> h1 </code> heading to read List of X, where X is :pet_type with the object req.param.</p>
<p>10. We’re ready to create links on the index page that links to each individual animal page! Inside the / route, turn each bulleted list item into a link by adding an<code> a </code> element within each <code>li</code> element:</p>
<ul>
    <li>Dogs should link to <code>‘/animals/dogs’</code></li>
    <li>Cats should link to <code>‘/animals/cats’</code></li>
    <li>Rabbits should link to <code>‘/animals/rabbits’</code></li>
</ul>
<p>Now run your code and try clicking on the links!</p>
D/ Populate page content
Now create a new file <code> helper.js</code>. This file will contain an object named pets that contains some data that we can use to populate the webpages.
``` const pets = {
   'dogs': [
       {
           'name': 'Spot',
           'age': 2,
           'breed': 'Dalmatian',
           'description': 'Spot is an energetic puppy who seeks fun and adventure!',
           'url': 'https://robohash.org/eaqueatquecommodi.png?size=50x50&set=set1'
       },
       {
           'name': 'Shadow',
           'age': 4,
           'breed': 'Border Collie',
           'description': 'Eager and curious, Shadow enjoys company and can always be found tagging along at your heels!',
           'url': 'https://robohash.org/etidnatus.png?size=50x50&set=set1'
       }
   ],
   'cats': [
       {
           'name': 'Snowflake',
           'age': 1,
           'breed': 'Tabby',
           'description': 'Snowflake is a playful kitten who loves roaming the house and exploring.',
           'url': 'https://robohash.org/quaevoluptatibusconsequatur.png?size=50x50&set=set1'
       }
   ],
   'rabbits': [
       {
           'name': 'Easter',
           'age': 4,
           'breed': 'Mini Rex',
           'description': 'Easter is a sweet, gentle rabbit who likes spending most of the day sleeping.',
           'url': 'https://robohash.org/numquamvelalias.png?size=50x50&set=set1'
       }
   ]
}
module.exports = pets;
```

The pets object contains three elements, one for each animal type. The key is the animal type and the value is a list of objects, each of which contains info about an individual pet.

Start by importing the pets object at the top of app.js.

Inside the /animals route, you’ll be modifying the html you send back to display the names of all available pets that are of :pet_type.
Right before the res.send(), create a for loop that iterates over each element in the list of pets. You can access the appropriate list of pets in the pets object by the key, pet_type. Inside the loop, create a <li> element for each pet’s name and concatenate the string to a variable named html.
Then, make sure to concatenate the opening <code> ul </code> tag to html before the loop and the closing <code> ul </code> tag after the loop, such that the <code> li </code> elements would be nested inside the <code> ul </code> element.
If you run your code and navigate to each animal page, you can see a bulleted list of available pets!
E/ Create the pet route
The next step is to create and link to individual profile pages for each pet. To do that, we’ll add a new pet route. Define a route that is associated with the URL pattern '/animals/X/#', where X and # are variable sections of the URL. The section indicated by X should be called :pet_type and the section indicated by # should be called :pet_id.

In the body, create a variable called pet that stores the profile information of the pet who is of pet_type and has index position pet_id in its list of pets.

In other words, first access the appropriate list of pets in the pets object by the key, pet_type. Then, access the appropriate object in the list of pets by the index position, pet_id.
Your resulting pet dictionary will look like this:
{
  'name': ...,
  'age': ...,
  'breed': ...,
  'description': ...,
  'url': ...
}
Return an HTML <code> h1 </code> element containing the pet’s name. You can access the pet’s name from the pet dictionary you created in the previous step.

Now, we’re ready to create links on the animal page that links to each individual pet profile page! Inside the /animals route, turn each bulleted list item into a link by adding an <code> a </code> element within each <code> li </code> element.

The URL we want to link to should follow the pattern '/animals/X/#', where X is pet_type and # is the index position.
Once you’re done, run your code and try navigating to an individual pet’s profile page.
Finally, let’s add some more content to the profile page! Inside the /pet route, right after the <code> h1 </code>element, add the following elements to display the profile info stored in the pet dictionary:
<code> img </code> to display the photo at the given URL
<code> p </code> that contains the pet’s description
<code> ul </code> with two <code> li </code> for the pet’s breed and age