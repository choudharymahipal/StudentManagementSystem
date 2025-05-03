# Student Management System
Full-Stack Student Management System with Angular + .NET Core + MySQL

## Specifications
- Frontend: Angular 17
- Backend API: .Net Core 8.0 (Entity Framework 9.0.4, Swagger)
- Database: My SQL

## Additional Features
- JWT Authentication
- Angular Material Theme

## Project creation steps

### SMSAPI (.Net Core Web API)
1. First We need to Install .NET Core SDK Latest
2. Create Web API Using below command
```
    dotnet new webapi
```
4. Run the application
```
    dotnet run
```
5. Install the below extension
     1. C#
     2. Nuget Package manager
6. Install Entity Framework
```
    dotnet tool install --global dotnet-ef
```
8. Add package Entity Framework Design
```
    dotnet add package Microsoft.EntityFrameworkCore.Design
    dotnet add package Pomelo.EntityFrameworkCore.MySql
```
10. Execute the below command form verify the EF Installation
```
    dotnet ef
```
12. Enter scaffold command 
```
    dotnet ef dbcontext scaffold "connectionstring" Microsoft.EntityFrameworkCore.SqlServer --output-dir Models
```
13. For Generating bd context only in the folder
```
    dotnet ef dbcontext scaffold --context-dir Models
```
15. Create the controller also complete the steps in the middleware

### SMSAPP (Angular App)
1. Create Angular App
```
    ng new SMSApp --standalone=false
```
2. Open angular app in your VS Code.
3. Open terminal and Serve application
```
    ng serve
```