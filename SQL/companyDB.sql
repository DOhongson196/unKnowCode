CREATE DATABASE CompanyDB
Go
USE CompanyDB
Go

CREATE TABLE department(
	DID int PRIMARY KEY,
	Dname nvarchar(30) NOT NULL
)

DROP TABLE DEPARTMENT;

INSERT INTO department(DID,Dname) VALUES(10,'Finance')
INSERT INTO department(DID,Dname) VALUES(14,'RD')

UPDATE department SET Dname = 'R&D' WHERE DID = 14

SELECT*FROM department

CREATE TABLE employee(
	EID int PRIMARY KEY,
	Ename nvarchar(30) NOT NULL,
	DID int,
	CONSTRAINT fk_employee FOREIGN KEY(DID) REFERENCES department(DID)
)

INSERT INTO employee(EID,Ename,DID) VALUES(1,'Huey',10)
INSERT INTO employee(EID,Ename,DID) VALUES(5,'Deway',10)
INSERT INTO employee(EID,Ename,DID) VALUES(11,'Louie',10)
INSERT INTO employee(EID,Ename,DID) VALUES(2,'Jack',14)
INSERT INTO employee(EID,Ename,DID) VALUES(4,'Jill',14)

SELECT*FROM employee

CREATE TABLE project(
	PID int PRIMARY KEY,
	Pname nvarchar(50) NOT NULL
)

INSERT INTO project(PID,Pname) VALUES(27,'Alpha')
INSERT INTO project(PID,Pname) VALUES(25,'Beta')
INSERT INTO project(PID,Pname) VALUES(22,'Gamma')
INSERT INTO project(PID,Pname) VALUES(26,'Pail')
INSERT INTO project(PID,Pname) VALUES(21,'Hill')

SELECT*FROM project

CREATE TABLE employee_project(
	EPID int PRIMARY KEY,
	Btime decimal,
	EID int,
	PID int,
	CONSTRAINT fk_employee_p FOREIGN KEY(EID) REFERENCES employee(EID),
	CONSTRAINT fk_e_project FOREIGN KEY(PID) REFERENCES project(PID)
)

ALTER TABLE employee_project ALTER COLUMN Btime decimal(10,2)

INSERT INTO employee_project(EPID,Btime,EID,PID) VALUES(1,4.5,1,27)
INSERT INTO employee_project(EPID,Btime,EID,PID) VALUES(2,3,5,25)
INSERT INTO employee_project(EPID,Btime,EID,PID) VALUES(3,7,11,22)
INSERT INTO employee_project(EPID,Btime,EID,PID) VALUES(4,8,2,26)
INSERT INTO employee_project(EPID,Btime,EID,PID) VALUES(5,9,4,21)

UPDATE employee_project SET Btime = (4.5) WHERE EPID = 1

SELECT*FROM employee_project