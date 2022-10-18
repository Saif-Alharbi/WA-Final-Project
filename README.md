# WA-Final-Project
Web Applications Final Project

“Hotel Information System” web application 

4 main web pages (index.html,
Add New Apartment Record, Browse All Apartments Records and Add Feedback Entry)

register page{
    let the user either register for new user account or to use their previously registered user name and password to login to the website 
    or to logout from the web application.
    login page{
        only users who have login accounts and already logged-in cold browse the(index.html, Add New Apartment Record, 
        Browse All Apartments Records and Add Feedback Entry basides the logout function)
    }
logout page
}

add website the following steps{
    1.add a new "Users" table (That include the user accounts for the web application) each user account should include the following fields:{
        UserId, FullName, UserName, (Unique Email Address (not null)) if the email is repeated the record should not inserted to the database and return an error message
         contain "This email address already exists! Please provide another email address",
         Password, CreationDataTime
         all the attributes should be NOT NULL!,

         The Password column should contain a hashed version of the original passwords, not the plain original passwords provided by the users.
    }
    2.add a new public web page to the web page (register.html) let the public users to register to the web application 
    to have a user account by providing their personal information such as{ FullName, UserName (Unique Email address), Password and ConfirmPassword }

    UserId int auto_increment, 

    CreationDateTime column should also be evaluated automatically as the current date/time timestamp of successful registration.

    3. add a new menu entry in the top website menu in all web menu pages that display login or logout hyperlink.
    
    Login hyperlink will show if the user didn't login yet.

    this same menu hyperlink will show the text "logout" instead if the user is already logged-in and didn't logout yet.

    4.all  non logged-in users could see the four public web pages (index.html,registered.html,login.html,add Feedback entry) if they are not logged-in.

    5.All logged-in users could see the four web pages (index.html, Add New Apartment Record, Browse All Apartments Records and Add Feedback Entry besides the logout
    function) only if they are logged-in successfully.

    6. if the user select the login hyperlink in the top menu through a separate login web page.
    
    the user could use username and password stored in the "Users" tableas a result of the (register.html) web page.

    When the user chooses the “login” menu option, the website will redirect the user to the new “login” web page form that you will create in this project.

    add back-end java servlet programming code to check the "Users" table and compare if the provided username and password from the user are rights or not.
    also to include javascript validation to make sure that the username is unique.

    7. If the user is already logged-in and then chooses the “logout” top menu link, the system should logout this user.
        
        redirects him to the main page (index.html) and shows the “login” option in the top menu instead of “logout”
    
    8.If the user didn’t login and tries to access any of the secure web pages (Add New Apartment Record and Browse All Apartments Records) 
    directly through the web browser’s address bar for example, the system should not accept his access and redirects him to the “login” web page first.

    9. make sure that the user’s session times out after 15 minutes of inactive interaction with the website.

}

Hints: 
- Don’t store password as plain text in the MySQL database “Users” table. 
Try to use a hashing function such as SHA256 or MD5 to encrypt the passwords and then to store and compare the stored passwords.
 - When you submit your project’s source code and database backup, please include, along with your names, student numbers and email addresses, 
 a username/password combination from the “Users” table so that the instructor would be able to test the login function of your project. 
 - The developed website should be tested thoroughly. The system should be bug-free when delivered and should work properly. 
 The web pages source codes should be clear, consistent, well-formed and concise within their HTML content, CSS, JavaScript, …etc. 
 All web pages should have similar style, layout and behavior. 
 -  For testing the front-end web pages, try to use various client browsers. 
 Those browsers should include at least: Microsoft Internet Explorer, Google Chrome, Firefox, …etc.


