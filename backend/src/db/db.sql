CREATE TABLE departments (
  depId INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  label VARCHAR(255),
  flag TINYINT(1) DEFAULT 1,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE staff (
  staffId INT PRIMARY KEY AUTO_INCREMENT,
  code VARCHAR(50),
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  mobile VARCHAR(20),
  joinedDate DATE,
  depId INT,
  position VARCHAR(255),
  age INT,
  gender VARCHAR(10),
  status TINYINT(1),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  createdBy INT,
  updatedBy INT,
  FOREIGN KEY (depId) REFERENCES departments(depId)
);

CREATE TABLE users (
  userId INT PRIMARY KEY AUTO_INCREMENT,
  staffId INT,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  createdBy INT,
  updatedBy INT,
  flag TINYINT(1),
  FOREIGN KEY (staffId) REFERENCES staff(staffId)
);

CREATE TABLE roles (
  roleId INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  label VARCHAR(255),
  flag TINYINT(1),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE permissions (
  permissionId INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  label VARCHAR(255),
  flag TINYINT(1),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE user_role (
  userId INT,
  roleId INT,
  flag TINYINT(1),
  PRIMARY KEY (userId, roleId),
  FOREIGN KEY (userId) REFERENCES users(userId),
  FOREIGN KEY (roleId) REFERENCES roles(roleId)
);

CREATE TABLE role_permission (
  roleId INT,
  permissionId INT,
  flag TINYINT(1),
  PRIMARY KEY (roleId, permissionId),
  FOREIGN KEY (roleId) REFERENCES roles(roleId),
  FOREIGN KEY (permissionId) REFERENCES permissions(permissionId)
);