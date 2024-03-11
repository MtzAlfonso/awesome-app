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

![Login page](./screenshots/login.png)
![Login page mobile](./screenshots/login-responsive.png)

### Welcome page

![Welcome page empty](./screenshots/welcome-1.png)
![Welcome page modal](./screenshots/welcome-2.png)
![Welcome page filled](./screenshots/welcome-3.png)
![Welcome page mobile](./screenshots/welcome-responsive.png)

### Sidebar

![Sidebar](./screenshots/sidebar.png)
![Sidebar mobile](./screenshots/sidebar-responsive.png)

### Conversion page

![Conversion page](./screenshots/conversions.png)
![Conversion page mobile](./screenshots/conversions-responsive.png)

### Calculate date page

![Calculate date page empty](./screenshots/calculate-date-1.png)
![Calculate date page filled](./screenshots/calculate-date-2.png)
![Calculate date page mobile](./screenshots/calculate-date-responsive.png)

### Reactive form page

![Reactive form page empty](./screenshots/form-1.png)
![Reactive form page filled](./screenshots/form-2.png)
![Reactive form page mobile](./screenshots/form-responsive-1.png)
![Reactive form page mobile filled](./screenshots/form-responsive-2.png)

### Logout modal

![Logout modal](./screenshots/logout.png)
![Logout modal mobile](./screenshots/logout-responsive.png)

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
