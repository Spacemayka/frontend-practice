Mustache, CSS, jQuery, Git, and a bit of PHP

Fork my respository: https://github.com/zachlite/frontend-practice  to a new branch.  Make commits, and push your changes as you go.


Try and make a webpage that looks as close to hello.png as possible.  It should be responsive, and mobile friendly

Change "Name" to your name in the controller.

After you type your three things, pressing submit should trigger the following:

Using jQuery (in external file(s)), a post request should be made to practice_actions.php, alerting the controller of the new information. On successfull completion of this post request, alert the user that their info has been saved.  You don't have to do anything with the data once it's in the controller.  Just make sure it gets there.


The post request should not occur if any of the text fields are left blank.  If a field is left blank, let the user know. Additionally, the post request should not occur if the last field has non-alphabetic characters in it.  Again, let the user know.


Have the text fields created dynamically using mustache.  In other words, don't hardcode 3 seperate input element tags.  Use mustache loops in your mustache file, and set the number of text fields to create in the controller. (MVC, the view is dumb.  It shouldn't be rigid.  It responds to what it's told.) Your post request and validity checking should work with more input fields without changing any code.


When you're all set, submit a pull request to merge your branch with mine.

