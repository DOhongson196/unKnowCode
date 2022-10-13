USE master
GO
IF EXISTS (SELECT * FROM sys.databases WHERE Name='QL_Khosach')
DROP DATABASE QL_Khosach
GO
CREATE DATABASE QL_Khosach
GO
USE QL_Khosach
GO

CREATE TABLE Sach(
	MS VARCHAR(7) PRIMARY KEY,
	TS varchar(50),
	TG varchar(50),
	NDTT varchar(200),
	NXB DATE,
	LXB int,
	GB money,
	SL int,
	LS varchar(30)
)

CREATE TABLE NXB(
	IDNXB int PRIMARY KEY IDENTITY,
	TNXB varchar(30),
	DCNXB varchar(50),
	MS varchar(7),
	CONSTRAINT FK_NXB_MS
    FOREIGN KEY (MS)
    REFERENCES Sach(MS),
)

INSERT INTO Sach VALUES('B001','Tri Tue Do Thai','Eran Katz','Nguoi Do THai','2010-01-01',1,79000,100,'Khoa Hoc Xa Hoi')
INSERT INTO Sach VALUES('B002','Tin hoc co ban','Thay Tuan','Nhap mon tin hoc','2000-01-01',3,99000,200,'Tin Hoc')
INSERT INTO Sach VALUES('B003','IT khong kho','Do Son','IT Easy','2008-01-01',2,179000,200,'IT')
INSERT INTO Sach VALUES('B004','JS co ban','Son Dang','JS & REACTJS','2012-01-01',1,200000,50,'IT')
INSERT INTO Sach VALUES('B005','ky nang song','Do Son','1000 cau hoi vi sao','2001-01-01',3,50000,1000,'Ky nang')

SELECT * FROM sach

INSERT INTO NXB VALUES('Tri Thuc','Ha Noi','B001')
INSERT INTO NXB VALUES('Tri Thuc','Ha Noi','B002')
INSERT INTO NXB VALUES('Tri Thuc','Ha Noi','B003')
INSERT INTO NXB VALUES('Tri Thuc','Ha Noi','B004')
INSERT INTO NXB VALUES('Doi song','Ha Noi','B005')

SELECT * FROM NXB

--3. Liệt kê các cuốn sách có năm xuất bản từ 2008 đến nay
SELECT * FROM Sach WHERE NXB > '2008-01-01'
--4. Liệt kê 10 cuốn sách có giá bán cao nhất
SELECT TOP 3 TS,GB FROM Sach
ORDER BY GB DESC
--5. Tìm những cuốn sách có tiêu đề chứa từ “tin học”
SELECT  TS FROM Sach WHERE LS like '%tin%'
--6. Liệt kê các cuốn sách có tên bắt đầu với chữ “T” theo thứ tự giá giảm dần
SELECT TS FROM Sach WHERE TS like 'T%'
ORDER BY TS DESC 
--7. Liệt kê các cuốn sách của nhà xuất bản Tri thức
SELECT TS FROM Sach WHERE MS
IN
(SELECT MS FROM NXB WHERE TNXB like '%tri%')
--8. Lấy thông tin chi tiết về nhà xuất bản xuất bản cuốn sách “Trí tuệ Do Thái”
SELECT * FROM NXB WHERE MS
IN
(SELECT MS FROM Sach WHERE TS like '%tri tue%')
--9. Hiển thị các thông tin sau về các cuốn sách: Mã sách, Tên sách, Năm xuất bản, Nhà xuất bản,
--Loại sách
SELECT Sach.MS,TS,NXB,NXB,LS FROM Sach
JOIN NXB ON
Sach.MS = NXB.MS
--10. Tìm cuốn sách có giá bán đắt nhất
SELECT TS,GB FROM Sach WHERE GB = (SELECT MAX(GB) FROM sach)
--11. Tìm cuốn sách có số lượng lớn nhất trong kho
SELECT TS,SL FROM Sach WHERE SL = (SELECT MAX(SL) FROM sach)
--12. Tìm các cuốn sách của tác giả “Eran Katz”
SELECT TS,TG FROM Sach WHERE TG =  'Eran Katz'
--13. Giảm giá bán 10% các cuốn sách xuất bản từ năm 2008 trở về trước
UPDATE Sach SET GB = GB*0.9 WHERE NXB < '2008-01-01'
--14. Thống kê số đầu sách của mỗi nhà xuất bản
SELECT TNXB, SUM(SL) AS 'Tong so sach' FROM Sach
JOIN NXB ON
Sach.MS = NXB.MS
GROUP BY TNXB

--15. Thống kê số đầu sách của mỗi loại sách
SELECT LS, SUM(SL) as [Tong So Luong]  FROM Sach
GROUP BY LS

--16. Đặt chỉ mục (Index) cho trường tên sách
CREATE INDEX idx_tensach
ON sach (TS)

--17. Viết view lấy thông tin gồm: Mã sách, tên sách, tác giả, nhà xb và giá bán
CREATE VIEW view_all
AS
SELECT sach.MS,TS,TG,NXB,GB FROM Sach
JOIN NXB ON
Sach.MS = NXB.MS

SELECT * FROM view_all