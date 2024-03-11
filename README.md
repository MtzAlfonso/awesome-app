# 👾 Awesome App

It is an awesome application that allows you to do a lot of things.

## 👨‍💻 Authors

- [@MtzAlfonso](https://github.com/MtzAlfonso)

## 🛠 Tech Stack

- Angular 13.x.x
- Angular CLI 13.x.x
- Angular Material 13.x.x
- Bootstrap 4.x.x

## 🚀 Run Locally

Clone the project in your local machine

```bash
  git clone https://github.com/MtzAlfonso/awesome-app.git
```

If you don't have the Angular CLI installed, you can install it with the following command:

```bash
  npm install -g @angular/cli@13
```

Go to the project directory

```bash
  cd awesome-app
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## 📝 Features

### Login page

The user can enter their username and password and see a message if the login was successful or not.

Once the user logs in, the app will generate a token and store it in the local storage. The token is used to simulate the login service.

> [!WARNING]
> Login service is not available. The login is simulated and no data is sent to a server.

> [!IMPORTANT]
> To log in, use the following credentials:
>
> - Username: `admin`
> - Password: `admin`

### Authentication

The app has a guard that checks if the user is logged in.

If the user is not logged in, the app will redirect to the login page.

If the user is logged in, the app will allow the user to navigate to the different pages.

### Welcome page

This is a welcome page where the user can enter their name and see a message with the name. The message is transformed with a custom pipe.

### Sidebar

It is a sidebar component that allows the user to navigate to the different pages of the app.

### Conversion page

This is an empty page. The user can see a message with the page name.

### Calculate date page

The user can select a date, a unit (days, months, years) and a number. The app will calculate the new date and show it to the user.

### Reactive form page

The user can fill a form and validate it with Angular's reactive forms and custom validators.

> [!WARNING]
> The **civil status** catalog is not available. The options are simulated.

## 🖼️ Screenshots

### Login page

<img src="./screenshots/login.png" alt="Login page Desktop" width="100%" />
<img src="./screenshots/login-responsive.png" alt="Login page Mobile" width="50%" />

### Welcome page

<img src="./screenshots/welcome-1.png" alt="Welcome page empty" width="100%" />
<img src="./screenshots/welcome-2.png" alt="Welcome page modal" width="100%" />
<img src="./screenshots/welcome-3.png" alt="Welcome page filled" width="100%" />
<img src="./screenshots/welcome-responsive.png" alt="Welcome page mobile" width="50%" />

### Sidebar

<img src="./screenshots/sidebar.png" alt="Sidebar" width="100%" />
<img src="./screenshots/sidebar-responsive.png" alt="Sidebar mobile" width="50%" />

### Conversion page

<img src="./screenshots/conversions.png" alt="Conversion page" width="100%" />
<img src="./screenshots/conversions-responsive.png" alt="Conversion page mobile" width="50%" />

### Calculate date page

<img src="./screenshots/calculate-date-1.png" alt="Calculate date page empty" width="100%" />
<img src="./screenshots/calculate-date-2.png" alt="Calculate date page filled" width="100%" />
<img src="./screenshots/calculate-date-responsive.png" alt="Calculate date page mobile" width="50%" />

### Reactive form page

<img src="./screenshots/form-1.png" alt="Reactive form page empty" width="100%" />
<img src="./screenshots/form-2.png" alt="Reactive form page filled" width="100%" />
<img src="./screenshots/form-responsive-1.png" alt="Reactive form page mobile" width="50%" />
<img src="./screenshots/form-responsive-2.png" alt="Reactive form page mobile filled" width="50%" />

### Logout modal

<img src="./screenshots/logout.png" alt="Logout modal" width="100%" />
<img src="./screenshots/logout-responsive.png" alt="Logout modal mobile" width="50%" />

## 🧪 Testing

Run the unit tests via [Karma](https://karma-runner.github.io).

```bash
  npm run test
```

Or you can run the following command:

```bash
  ng test
```

## 🔧 Support

For support or any questions, you can contact me at mtz.alfonso96@gmail.com
