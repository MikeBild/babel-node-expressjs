# ExpressJS with modern Babel + NodeJS

Transpile and bundle ECMA to use in NodeJS.

## Build

`npm run build`

## Test

`npm test`

## Dev

`npm start`


## Run

`npm run serve`



## Examples

### JSON

`curl -v -XGET http://localhost:3000 -H "content-type: application/json"`

### URL-Encoded

`curl -v -XPOST http://localhost:3000 --data-urlencode "msg=hello you" -H "content-type: application/x-www-form-urlencoded"`