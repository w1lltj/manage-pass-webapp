# manage-pass-webapp
- this project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.

# start development server
- run `nvm use` (unified node version use node v10.16.0)
- run `ng serve` or `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# feature
1. responsive UI
   - login/logout/register: https://gyazo.com/59e11f028d00d6a05625c0b3df47eb67
   - password-data page: 
     - https://gyazo.com/640e26ff7c28958c1bdd8d9e056ee5f1
     - https://gyazo.com/a1671f0dc7eac9e6a1ab7cd2f1c5792a
2. user registration (url: `/`)
3. user signin / logout (url:`/`)
4. password data page (url: `/password-data`)
   - user who does not signin will not be able to navigate to password-data page (`/password-data`)
5. password-data page to display all the password-data (future improvement)
   - display the details of each individual data (future improvement)
   - can perform update & delete data (future improvement)
