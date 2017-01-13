## What is it?
This is a helper function you can drop into your Node app to check Basic Authentication within a URL of a Request. 

  *if you are using Basic Authentication, you should use HTTPS to encrypt the credentials in the URL.*

## How do I use it?
This function assumes that you are going to store your usernames and passwords in a `.env` file, and that you are using a library that allows you to read from a `.env` file (I recommend the [dotenv](https://github.com/motdotla/dotenv) library). You could pretty easily modify to check against values stored elsewhere, like a database for example (I'll leave that up to you).

This function needs two variables passed in to check Authorization:

* A 'vendor' which correlates to a username & password field in your .env file. 
For example, if I pass in 'twitter' as the vendor, this function checks authorization against two environment variables: `TWITTER_USERNAME` & `TWITTER_PASSWORD`

* An 'Auth' object, which is the request authorization header. You can access this on the req object with `req.headers['authorization']`


It returns **true** or **false** if the username and password match.

Example of use:

    const isAuthorized = require('is-authorized');
    
    ...
    
    if ( isAuthorized('twitter', req.headers['authorization']) ) {
      ...do something... 
    }

