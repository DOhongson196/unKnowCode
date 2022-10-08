CREATE DATABASE StudentManagementDB
GO
USE StudentManagementDB
GO

CREATE TABLE StudentInfo (
  [SID] INTEGER PRIMARY KEY,
  S_Name VARCHAR(30),
  GPA FLOAT,
  Major VARCHAR(30)
);

CREATE TABLE Faculty (
  FID INTEGER PRIMARY KEY,
  F_Name VARCHAR(30) NOT NULL,
  F_Phone VARCHAR(15),
  Salary FLOAT,
  JoinDate DATETIME,
  Dept VARCHAR(10)
);

CREATE TABLE CourseInfo (
  CID INTEGER PRIMARY KEY,
  C_Name VARCHAR(30) NOT NULL,
  FID INTEGER,
  CONSTRAINT CI_FID_FK
    FOREIGN KEY (FID)
    REFERENCES Faculty (FID)
    ON DELETE CASCADE
);

CREATE TABLE CourseGrade (
  [SID] INTEGER NOT NULL,
  CID INTEGER NOT NULL,
  Grade VARCHAR(1) NOT NULL,
  PRIMARY KEY ([SID], CID),
  CONSTRAINT CG_SID_FK
    FOREIGN KEY ([SID])
    REFERENCES StudentInfo ([SID])
    ON DELETE CASCADE,
  CONSTRAINT CG_CID_FK
    FOREIGN KEY (CID)
    REFERENCES CourseInfo (CID)
    ON DELETE CASCADE
);


INSERT INTO StudentInfo Values(1, 'Adams', 3.0, 'IS');
INSERT INTO StudentInfo Values(2, 'Jones', 2.9, 'MKT');
INSERT INTO StudentInfo Values(3, 'Smith', 2.8, 'IS');
INSERT INTO StudentInfo Values(4, 'Baker', 3.1, 'CS');
INSERT INTO StudentInfo Values(5, 'Troy', 3.0, 'CS');
INSERT INTO StudentInfo Values(6, 'Sharpe', 3.2, 'MKT');
INSERT INTO StudentInfo Values(7, 'Lewis', 2.7, 'IS');
INSERT INTO StudentInfo Values(8, 'Saxe', 3.5, 'MLA');
INSERT INTO StudentInfo Values(9, 'Malone', 2.6, 'IS');
INSERT INTO StudentInfo Values(10, 'Granger', 4.0, 'MKT');
INSERT INTO StudentInfo Values(11, 'Potter', 3.3, 'IS');
INSERT INTO StudentInfo Values(12, 'Weasley', 3.1, 'CS');

INSERT INTO CourseInfo Values(1, 'ISM 301', 1);
INSERT INTO CourseInfo Values(2, 'ISM 218', 2);
INSERT INTO CourseInfo Values(3, 'ISM 116', 4);
INSERT INTO CourseInfo Values(4, 'ISM 210', 1);

INSERT INTO Faculty Values(1, 'Iyer', '45869', 24000, '1998-4-1', 'ISOM');
INSERT INTO Faculty Values(2, 'Wallace', '98999', 4000, '2000-4-18', 'ISOM');
INSERT INTO Faculty Values(3, 'Edger', '45844', 22000, '1998-4-1', 'CS');
INSERT INTO Faculty Values(4, 'Church', '66899', 4000, '2000-5-9', 'CS');

INSERT INTO CourseGrade Values(1, 2, 'A');
INSERT INTO CourseGrade Values(1, 1, 'B');
INSERT INTO CourseGrade Values(2, 2, 'C');
INSERT INTO CourseGrade Values(3, 2, 'B');
INSERT INTO CourseGrade Values(4, 1, 'C');
INSERT INTO CourseGrade Values(4, 2, 'B');
INSERT INTO CourseGrade Values(5, 2, 'C');
INSERT INTO CourseGrade Values(3, 3, 'B');
INSERT INTO CourseGrade Values(5, 4, 'B');
INSERT INTO CourseGrade Values(6, 1, 'C');
INSERT INTO CourseGrade Values(6, 2, 'A');
INSERT INTO CourseGrade Values(7, 3, 'B');
INSERT INTO CourseGrade Values(8, 2, 'B');
INSERT INTO CourseGrade Values(9, 1, 'C');
INSERT INTO CourseGrade Values(10, 1, 'B');
INSERT INTO CourseGrade Values(11, 3, 'C');
INSERT INTO CourseGrade Values(11, 2, 'B');
INSERT INTO CourseGrade Values(12, 2, 'A');
INSERT INTO CourseGrade Values(12, 1, 'C');
INSERT INTO CourseGrade Values(12, 4, 'C');

--SubQuery
SELECT * FROM StudentInfo WHERE S_Name = 'Jones'

--lay khoa hoc theo ten SV
SELECT CID, Grade FROM CourseGrade WHERE [SID] IN(
	SELECT [SID] FROM StudentInfo WHERE S_Name = 'Jones'
)

--lay ten mon hoc theo ten GV
SELECT CID, C_Name FROM CourseInfo WHERE FID IN(
	SELECT FID FROM Faculty WHERE F_Name = 'Iyer'
)

--lay ten GV theo khoa hoc
SELECT F_Name, F_Phone From Faculty WHERE FID IN(
	SELECT FID FROM CourseInfo WHERE C_Name = 'ISM 301'
)

--lay thong tin SV hoc mon nao hoc bao nhieu diem
SELECT SID FROM StudentInfo  WHERE S_Name LIKE '%r'

SELECT C_Name FROM CourseInfo WHERE CID
IN
(SELECT CID FROM CourseGrade WHERE SID
IN
(SELECT SID FROM StudentInfo WHERE S_Name LIKE '%r'))

--lay thong tin SV dat diem A cua mon ISM 210

SELECT S_Name FROM StudentInfo WHERE SID
IN
(SELECT SID FROM CourseGrade WHERE Grade Like 'B' AND CID
IN
(SELECT CID FROM CourseInfo WHERE C_Name LIKE 'ISM 301'))

--luong trung binh
SELECT AVG(salary) FROM Faculty

-- tim GV co salary <AVG 
SELECT F_Name FROM Faculty WHERE Salary < (SELECT AVG(salary) FROM Faculty)

--ten sv, mon hon. diem, giang vien
--inner join and create view table

CREATE VIEW v_student_course_marks
AS
SELECT S_Name,Grade,C_Name,F_Name FROM StudentInfo
inner Join  CourseGrade ON
StudentInfo.SID = CourseGrade.SID
inner Join  CourseInfo ON
CourseInfo.CID = CourseGrade.CID
inner Join  Faculty ON
CourseInfo.FID = Faculty.FID where grade like 'A' AND StudentInfo.S_Name Like '[S,W]%'

SELECT * FROM v_student_course_marks

EXECUTE sp_help v_student_course_marks
DROP VIEW v_student_course_marks
EXEC sp_rename 'v_student_course_marks','v_student_course_test_marks'

--left join
SELECT S_Name, Grade, C_Name, F_Name, F_Phone FROM StudentInfo
left join CourseGrade ON
StudentInfo.SID = CourseGrade.SID
left join CourseInfo ON
CourseInfo.CID = CourseGrade.CID
left join Faculty ON
CourseInfo.FID = Faculty.FID order by Grade
