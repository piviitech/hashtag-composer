# API Specification Tools Notes

Here the docs will be defined in either one or two
different rest-api doc toools available, to be played with and compared.

The tools in question are:

* [API Blueprint](https://apiblueprint.org)
* [Swagger](http://swagger.io)
* [RAML](http://raml.org/)

The goal is to see if we can create a proper, nice looking documentation,
think the api through before implementing it, generate a mock-api dummy server
from the description without breaking a leg (so the frontend can be developed
and tested before the backend is functional), and maybe even do blackbox-testing
based on the documentation of the future backend.

Swagger and API Blueprint seem to be further developed, and have lots of goodies (see links sections), but RAML looks neater (you can reuse response example in a straightforward way) while being the new kid on the block.

Further, there'll be notes about each, impressions, a comparison section and reasons for/against.

First, let's start with RAML, and derive other stuff from it.

## RAML
### Installation
Nothing to install, there's a 0.8 spec, and a 1.0. You can see all kinds of projects on the [overview](http://www.raml.org/projects/projects) site, among them you need to pick a parser etc.

* [Specification of 1.0](https://github.com/raml-org/raml-spec/blob/master/versions/raml-10/raml-10.md/)

### Tools
* [spotify thing only for 0.8 for now](https://github.com/spotify/ramlfications)
* [Mock](https://github.com/artemkaint/raml-1-mocker)
* [Doc and tests](https://github.com/PGSSoft/ramlo)
* [Doc](https://github.com/Letsdeal/raml1-doc)
* [nice mocker thing](https://github.com/RePoChO/raml-mocker)

### Links
* [RAML](http://raml.org/)
* [Spotify web api RAML example](https://github.com/spotify/web-api/tree/master/specifications/raml)

## Getting Started

Okay, let's write a file. Looking at the root page for an easy to follow example...

Read the tutorials [100](http://raml.org/developers/raml-100-tutorial) and [200](http://raml.org/developers/raml-200-tutorial).

Install nodejs on Ubuntu:
```
$ curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
$ sudo apt-get install -y nodejs
$ npm install raml-mocker
```
(created a node file, supposed to generate a mock server) (old/gen.js)
raml-mocker only supports 0.8, and "uses" for types is not supported there

Okay, then docs first.
```
$ npm install raml1-doc
```
Nope nope nope. Sphinx?

Oh god no, it's bugged as well...
There doesn't really seem to be good tooling for raml 1.0 :(

Let's try 0.8 then and spotify's https://github.com/spotify/ramlfications
it has a proper fucking readme

Installed atom, installed with apm the workbench plugin
you can debug, and browse the api in the atom editor, and even start the CLI
to post requests. But COME ON, what is this good for?

can't generate html docs as it seems. No easy way to build a rest mock server.
Let's try swagger?

## Swagger
### First Impressions
The version is nice, tools are obvious
Seems stable, regarding tooling and specification
Good getting started examples

### Installation
look into editor, codegen (seems to be for api as well), and ui

* https://github.com/swagger-api/swagger-editor
* https://github.com/swagger-api/swagger-codegen
* https://github.com/swagger-api/swagger-ui
* [specification](http://swagger.io/specification/)

run editor as described in github page

Okay, so writing this stuff is okay. You can put in json examples in readable format (not yaml, but raw), and when you#re done you export a .yaml file, and
can use it anywhere else. Can write the specs in a plain text editor of your choice, or in web interface editor (autocompletion, error messages and preview).

When done, take the yaml file, put it into the swagger-ui/dist folder

run the server with http-server . in the dist folder

You can view the goodness in very readable format here:
http://localhost:8080/?url=swagger.yaml#!/default/get_related

Nice!

Generating server stubs as well as clients works from the editor, but it's
not quite the mock testing server/automated test generation which I imagined.

Still, a nice way to document the API, while staying agnostic to the
server/client language and before implementation.

### Links
* [Swagger](http://swagger.io/swagger-editor/)
* https://github.com/stoplightio/prism
* http://stackoverflow.com/questions/38344711/swagger-mock-server
* http://stoplight.io/platform/prism/

## API Blueprint
### Links
* [API Blueprint](https://apiblueprint.org/documentation/advanced-tutorial.html)
* https://apiblueprint.org/tools.html
* https://github.com/apiaryio/api-blueprint/tree/master/examples
* https://github.com/apiaryio/dredd


## Unsorted
https://apiary.io/plans
