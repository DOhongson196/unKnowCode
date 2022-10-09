USE master
GO
IF EXISTS (SELECT * FROM sys.databases WHERE Name='RegisterPhone')
DROP DATABASE RegisterPhone
GO
CREATE DATABASE RegisterPhone
GO
USE RegisterPhone
GO


CREATE TABLE soThueBao(
	IDTB int primary key IDENTITY,
	soTB char(10) check (soTB not like '%[^0-9]%'),
	loaiTB char(2) check(loaiTB not like '%[^TT,TS]%' )  DEFAULT 'T' ,
	NgayDK date
)

CREATE TABLE khachHang(
	IDKH int primary key IDENTITY(1,1),
	tenKH nvarchar(30) NOT NULL,
	SoCMND char(9) check (SoCMND not like '%[^0-9]%'),
	diaChi nvarchar(100),
	IDTB int,
	CONSTRAINT FK_KH_TB
    FOREIGN KEY (IDTB)
    REFERENCES soThueBao(IDTB)
)

INSERT INTO soThueBao VALUES('0981806996','TT','2019-07-17')
INSERT INTO soThueBao VALUES('0999999999','TS','2020-01-1')
INSERT INTO soThueBao VALUES('0988888886','TS','2021-02-21')
INSERT INTO soThueBao VALUES('0923333336','TS','2022-03-3')
INSERT INTO soThueBao VALUES('0922223116','TT','2019-05-20')
INSERT INTO soThueBao VALUES('0922224116','TT','2019-05-20')
SELECT * FROM soThueBao

INSERT INTO khachHang VALUES('Do Son','123123123','Ha Noi',1)
INSERT INTO khachHang VALUES('Do Son','123123123','Ha Noi',5)
INSERT INTO khachHang VALUES('Khai','123412341','Hai Phong',2)
INSERT INTO khachHang VALUES('Long','123456789','Nam Dinh',3)
INSERT INTO khachHang VALUES('Luong','456456789','Thai Binh',4)
SELECT * FROM khachHang



--4. Viết các câu lênh truy vấn để
--a) Hiển thị toàn bộ thông tin của các khách hàng của công ty.
SELECT * FROM khachHang
--b) Hiển thị toàn bộ thông tin của các số thuê bao của công ty.
SELECT * FROM soThueBao

--5. Viết các câu lệnh truy vấn để lấy
--a) Hiển thị toàn bộ thông tin của thuê bao có số: 0123456789
SELECT * FROM soThueBao WHERE soTB = 0981806996
--b) Hiển thị thông tin về khách hàng có số CMTND: 123456789
SELECT * FROM khachHang WHERE SoCMND = 123456789
--c) Hiển thị các số thuê bao của khách hàng có số CMTND:123456789
SELECT * FROM soThueBao WHERE IDTB
IN
(SELECT IDTB FROM khachHang WHERE SoCMND = 123456789)
--d) Liệt kê các thuê bao đăng ký vào ngày 12/12/09
SELECT * FROM soThueBao WHERE NgayDK = '2019-07-17'
--e) Liệt kê các thuê bao có địa chỉ tại Hà Nội
SELECT soTB FROM soThueBao WHERE IDTB
IN
(SELECT IDTB FROM khachHang WHERE diaChi like 'Ha noi')

--6. Viết các câu lệnh truy vấn để lấy
--a) Tổng số khách hàng của công ty.
SELECT count(idkh) AS 'Tong KH'
FROM khachHang
--b) Tổng số thuê bao của công ty.
SELECT count(idtb) AS 'Tong TB'
FROM soThueBao
--c) Tổng số thuê bào đăng ký ngày 12/12/09.
SELECT count(idtb) AS 'Tong TB'
FROM soThueBao WHERE NgayDK = '2019-07-17'
--d) Hiển thị toàn bộ thông tin về khách hàng và thuê bao của tất cả các số thuê bao.
SELECT * FROM soThueBao,khachHang


--7. Thay đổi những thay đổi sau trên cơ sở dữ liệu
--a) Viết câu lệnh để thay đổi trường ngày đăng ký là not null.
ALTER TABLE soThueBao ALTER COLUMN NgayDK date NOT NULL
exec sp_help soThueBao
--b) Viết câu lệnh để thay đổi trường ngày đăng ký là trước hoặc bằng ngày hiện tại.
ALTER TABLE soThueBao
ADD CONSTRAINT CK_checkdate CHECK (NgayDK < getdate())
--c) Viết câu lệnh để thay đổi số điện thoại phải bắt đầu 09
ALTER TABLE soThueBao
ADD CONSTRAINT CK_number CHECK (soTB like '09%')
--d) Viết câu lệnh để thêm trường số điểm thưởng cho mỗi số thuê bao.
ALTER TABLE soThueBao
ADD diemThuong int


--8. Thực hiện các yêu cầu sau
--◦ View_KhachHang: Hiển thị các thông tin Mã khách hàng, Tên khách hàng, địa chỉ
CREATE VIEW View_KhachHang
as
SELECT IDKH,TenKH,diaChi FROM khachHang

--◦ View_KhachHang_ThueBao: Hiển thị thông tin Mã khách hàng, Tên khách hàng, Số thuê bao
CREATE VIEW View_KhachHang_ThueBao
as
SELECT IDKH,TenKH,SoTB FROM khachHang
inner Join  soThueBao ON
soThueBao.IDTB = khachHang.IDTB