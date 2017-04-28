# hashtag-composer
A webtool written in vue.js to help choose good, relevant hashtags for Instagram posts.

## Structure

For more details, see the readme documents in each respective folder.

### docs
The specification of the REST API in [swagger](http://swagger.io). Look at the swagger.yaml file.

### frontend
The vue.js project - what a user sees in her browser.

### backend
A Python flask setup, serves the REST API.

### glue
Disregard this. A better solution is using the webpack way http://vuejs-templates.github.io/webpack/proxy.html. Already configured, so the dev server of the frontend creates a proxy to the flask dev server on its own

A docker-compose project, meant to unify both development servers from above
onto a single port for convenience.

## Setup

Follow the setup instructions in each folder.

## Run

Start the frontend and backend development servers on ports :8080 and :5000
respectively. 

GOOD: Navigate to localhost:8080. The frontend project will proxy to the backend dev server. 
BAD: Run the glue project. Navigate to localhost:9000

Start developing.

## Links

* [Blogpost with motivation for the project](https://pivii.co/blog/crafting-a-rest-api-driven-webtool/)
