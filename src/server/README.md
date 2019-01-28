# Server

This is the web app server part of this [client](http://gerona.nt.fh-koeln.de/gitlab/syp18/team02/client).

An example is avalible [here](http://gerona.nt.fh-koeln.de/gitlab/fheinri2/backend). If you do not have enough rigths to see the example, please do not hesitate to contact Florian Heinrich.


## Installation

```bash
npm install
```

### Recommended

#### REST API Testing

[Postman](https://www.getpostman.com/) is the complete toolchain for API developers. It can makes API development faster, easier, and better, but sometimes also much more complicated. We use it for simple API tests like: _Will I get the user list if I call this Url?_

#### VSCode extensions

If you want to develop in Visual Studio Code we would recommend to install the following extensions:

- [jshint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.jshint)
- [MySQL](https://marketplace.visualstudio.com/items?itemName=formulahendry.vscode-mysql)
- [npm](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script)


## Config File

A config file is also required. This config file should be named ```config.json``` and should lay in the root directory of the server part.

```json
{
  "db": {
    "host": "<database server>",
    "database": "<database name>",
    "user": "<database username>",
    "password": "<database user password>"
  },
  "server": {
    "port": "<REST API default port>"
  }
}
```

### Example: config.json

```json
{
  "db": {
    "host": "localhost",
    "database": "demodb",
    "user": "demo",
    "password": "secret"
  },
  "server": {
    "port": "3000"
  }
}
```


## Database

Only one table is required:
```sql
CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
	age INT,
	CONSTRAINT user_pk PRIMARY KEY (id)
);
```


## npm

Do not forget that npm brings many useful tools like e.g.
- ```npm list -g --depth=0```
- ```npm outdated```
- ```npm audit```


## Build executable files
```bash
pkg --targets=node10 .
```