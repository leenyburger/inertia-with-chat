To see the sample file
http://localhost:3100/inertia-example


Minimum required to get setup and deploy to Heroku with inertia.js and rails
1. Follow steps in this document
2. Add ruby version to gemfile
3. Add buildpacks
```
heroku buildpacks:set heroku/ruby
heroku buildpacks:add --index 1 heroku/nodejs
```
Skip pruning of dev dependencis by setting 
```
heroku config:set NPM_CONFIG_INCLUDE='dev' YARN_PRODUCTION=false
# or NPM_CONFIG_PRODUCTION=false in versions of npm < 7
```
