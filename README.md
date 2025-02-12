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
4. Remove     <%= stylesheet_link_tag "application" %> from your application.html.erb 

### Important Tailwind Config notes
- Do *not* install Tailwind via Vite if you want to use a tailwind.config.js. It installs Tailwind 4, which no longer uses a config file (very confusing)

- This application has Tailwind 3 installed via yarn. It does *not* use the tailwindcss-rails gem. Vite is loaded in `vite.config.ts` and tailwind is loaded per usual in `tailwind.config.js` 

- The main "entry point" for tailwind is `frontend/application.css`