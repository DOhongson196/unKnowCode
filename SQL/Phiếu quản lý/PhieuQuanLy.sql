USE master
GO
IF EXISTS (SELECT * FROM sys.databases WHERE Name='PhieuQuanLy')
DROP DATABASE PhieuQuanLy
GO
CREATE DATABASE PhieuQuanLy
GO
USE PhieuQuanLy
GO
--2. Viết các câu lệnh để tạo các bảng như thiết kế câu 1
CREATE TABLE SanPham(
	IDSP int PRIMARY KEY,
	MSP varchar(30) NOT NULL,
	NSX DATE NOT NULL
)

CREATE TABLE LoaiSanPham(
	IDMLSP int PRIMARY KEY,
	MLSP varchar(30) NOT NULL,
	TenSP varchar(50) NOT NULL,
	IDSP int,
	CONSTRAINT FK_Ma_Loai_SP
    FOREIGN KEY (IDSP)
    REFERENCES SanPham (IDSP)
    ON DELETE CASCADE
)

CREATE TABLE NhanVien(
	MNV int PRIMARY KEY,
	TNV NVARCHAR(50) NOT NULL
)

CREATE TABLE PhieuQL(
	MP int PRIMARY KEY,
	MNV int,
	IDMLSP int,
	CONSTRAINT FK_MP_NV
    FOREIGN KEY (MNV)
    REFERENCES NhanVien(MNV)
    ON DELETE CASCADE,
	CONSTRAINT FK_MP_MLSP
    FOREIGN KEY (IDMLSP)
    REFERENCES LoaiSanPham (IDMLSP)
    ON DELETE CASCADE
)

--3. Viết các câu lệnh để thêm dữ liệu vào các bảng
INSERT INTO SanPham Values(1,'Z37 111111','2009-12-12')
INSERT INTO SanPham Values(2,'H32 222222','2008-11-10')
INSERT INTO SanPham Values(3,'C56 221113','2020-01-10')

INSERT INTO NhanVien Values(987688,'Nguyen van an')
INSERT INTO NhanVien Values(123456,'B')
INSERT INTO NhanVien Values(234123,'C')

INSERT INTO LoaiSanPham Values(1,'Z37E','May tinh Z37', 1)
INSERT INTO LoaiSanPham Values(2,'H32D','May tinh Z31', 2)
INSERT INTO LoaiSanPham Values(3,'C56G','May tinh Z32', 3)

INSERT INTO PhieuQL Values(1,987688,1)
INSERT INTO PhieuQL Values(2,123456,2)
INSERT INTO PhieuQL Values(3,234123,3)


SELECT * FROM PhieuQL

--4. Viết các câu lênh truy vấn để
--a) Liệt kê danh sách loại sản phẩm của công ty.
SELECT MLSP  FROM LoaiSanPham
--b) Liệt kê danh sách sản phẩm của công ty.
SELECT MSP  FROM SanPham
--c) Liệt kê danh sách người chịu trách nhiệm của công ty.
SELECT TNV  FROM NhanVien


--5. Viết các câu lệnh truy vấn để lấy
--a) Liệt kê danh sách loại sản phẩm của công ty theo thứ tự tăng dần của tên
SELECT * FROM LoaiSanPham
ORDER BY TenSP

--b) Liệt kê danh sách người chịu trách nhiệm của công ty theo thứ tự tăng dần của tên.
SELECT * FROM NhanVien
ORDER BY TNV DESC

--c) Liệt kê các sản phẩm của loại sản phẩm có mã số là Z37E.
SELECT MLSP FROM LoaiSanPham WHERE MLSP = 'Z37E'

--d) Liệt kê các sản phẩm Nguyễn Văn An chịu trách nhiệm theo thứ tự giảm đần của mã.
SELECT MSP FROM SanPham  WHERE IDSP
IN
(SELECT IDSP FROM LoaiSanPham WHERE IDMLSP 
IN 
(SELECT IDMLSP FROM PhieuQL WHERE MNV
IN
(SELECT MNV FROM NhanVien WHERE TNV = 'Nguyen Van An'))) ORDER BY MSP DESC


--6. Viết các câu lệnh truy vấn để
--a) Số sản phẩm của từng loại sản phẩm.
SELECT MSP FROM SanPham  WHERE IDSP
IN
(SELECT IDSP FROM LoaiSanPham WHERE IDSP like '%%') 
--b) Số loại sản phẩm trung bình theo loại sản phẩm.
SELECT AVG(IDMLSP) FROM LoaiSanPham
--c) Hiển thị toàn bộ thông tin về sản phẩm và loại sản phẩm.
SELECT * FROM SanPham,LoaiSanPham
--d) Hiển thị toàn bộ thông tin về người chịu trách nhiêm, loại sản phẩm và sản phẩm.
SELECT * FROM SanPham,LoaiSanPham,NhanVien
