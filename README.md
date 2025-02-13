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
  
  ### To use Shadcn
  - Add @tailwind imports instead of @import 
  - There seems to be a very delicate balancing act between components.json, tsconfig.app.json, and tsconfig.json 
  

### Shadcn Resources 
- Building Block: https://ui.shadcn.com/blocks/authentication

### Resources/Tutorilas 
- https://shreyasprakash.com/posts/home-cooked-apps-using-rails-8-react-inertia-js-and-shadcn/


  ##Dev Logs
  Feb 13: 
  [X] Add a shadcn component to see what it looks like. 
  [x] Figure out how to submit login form as a shadcn component (inertia forms + shadcn logon)
  [ ] Add flash messaging 


  ## Resources 
  https://way-too-mainstream.vercel.app/articles/add-authorization-flash-to-inertia-rails-app
  https://github.com/inertiajs/inertia-rails/issues/27 
  (Evil Martians Blog)[https://evilmartians.com/chronicles/inertiajs-in-rails-a-new-era-of-effortless-integration]
  (Vue Rails Inertia Tutorial) [https://codeando.dev/posts/rails-inertiajs/]
  (Rails and Inertia Medium Article)[https://medium.com/@sanchez.dav90/rails-and-inertia-js-the-modern-monolith-f898e22ad47f]
  (Ping CRM in Rails)[https://github.com/ledermann/pingcrm]