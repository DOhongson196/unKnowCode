USE master
GO
--Create structure of database
IF EXISTS (SELECT * FROM sys.databases WHERE Name='StudentCourse')
DROP DATABASE StudentCourse
GO
CREATE DATABASE StudentCourse
GO
USE StudentCourse
GO
CREATE TABLE Student(
 S_ID INT PRIMARY KEY,
 S_FName VARCHAR(20) NOT NULL,
 S_LName VARCHAR(30) NOT NULL
);

CREATE TABLE Course(
 CID INT PRIMARY KEY,
 C_Name VARCHAR(30) NOT NULL
);

CREATE TABLE Course_Grades(
 CGID INT PRIMARY KEY,
 Semester CHAR(4) NOT NULL,
 CID_CG INT NOT NULL,
 SID_CG INT NOT NULL,
 Grade CHAR(2) NOT NULL,
 CONSTRAINT CID_CG_FK FOREIGN KEY (CID_CG)REFERENCES Course(CID)ON DELETE CASCADE,
 CONSTRAINT SID_CG_FK FOREIGN KEY (SID_CG) REFERENCES Student(S_ID) ON DELETE CASCADE
);

--INSERT data

INSERT INTO Student (S_ID, S_FName, S_LName) VALUES (12345, 'Chris','Rock');
INSERT INTO Student (S_ID, S_FName, S_LName) VALUES (23456, 'Chris', 'Farley');
INSERT INTO Student (S_ID, S_FName, S_LName) VALUES (34567, 'David', 'Spade');
INSERT INTO Student (S_ID, S_FName, S_LName) VALUES (45678, 'Liz', 'Lemon');
INSERT INTO Student (S_ID, S_FName, S_LName) VALUES (56789, 'Jack', 'Donaghy');

SELECT * FROM Student

INSERT INTO Course (CID, C_Name) VALUES (101001, 'Intro to Computers');
INSERT INTO Course (CID, C_Name) VALUES (101002, 'Programming');
INSERT INTO Course (CID, C_Name) VALUES (101003, 'Databases');
INSERT INTO Course (CID, C_Name) VALUES (101004, 'Websites');
INSERT INTO Course (CID, C_Name) VALUES (101005, 'IS Management');

SELECT * FROM Course

INSERT INTO Course_Grades(CGID, Semester, CID_CG, SID_CG, Grade) VALUES (2010101,'SP10',101005,34567,'D+')
INSERT INTO Course_Grades(CGID, Semester, CID_CG, SID_CG, Grade) VALUES (2010308,'FA10',101005,34567,'A-')
INSERT INTO Course_Grades(CGID, Semester, CID_CG, SID_CG, Grade) VALUES (2010309,'FA10',101001,45678,'B+')
INSERT INTO Course_Grades(CGID, Semester, CID_CG, SID_CG, Grade) VALUES (2011308,'FA11',101003,23456,'B-')
INSERT INTO Course_Grades(CGID, Semester, CID_CG, SID_CG, Grade) VALUES (2012206,'SU12',101002,56789,'A+')

SELECT * FROM Course_Grades

-- 3. In the Student table, change the maximum length for Student first names to be 30, characters long.

ALTER TABLE Student ALTER COLUMN S_FName varchar(30)

exec sp_help Student

-- 4. In the Course table, add a column called “Faculty_LName” where the Faculty last name
--can vary up to 30 characters long. This column cannot be null and the default value should be “TBD”.


ALTER TABLE Course
ADD Faculty_LName varchar(30) NOT NULL DEFAULT('TBD')


-- 5. In the Course table, update CID 101001 where will be Faculty_LName is “Potter” and
--C_Name is “Intro to Wizardry”.

UPDATE Course SET Faculty_LName = 'Potter', C_Name = 'Intro to Wizardry' WHERE CID = 101001

-- 6. In the Course table, change the column name “C_Name” to be “Course_Name”.

EXECUTE sp_rename N'Course.C_Name', N'Course_Name', 'COLUMN' 

exec sp_help Course

exec sp_rename 'Course.[Course_Name]' , 'C_Name', 'COLUMN'

-- 7. Delete the “Websites” class from the Course table.

UPDATE Course SET C_Name = '' WHERE CID = 101004

-- 8. Remove the Student table from the database.

DROP TABLE Student

-- 9. Remove all the data from the Course table, but retain the table structure.

DELETE FROM Course

-- 10. Remove the foreign key constraints from CID and SID columns in the Course_Grades table.

ALTER TABLE Course_Grades
DROP constraint CID_CG_FK,SID_CG_FK