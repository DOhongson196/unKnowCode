USE master
GO
IF EXISTS (SELECT * FROM sys.databases WHERE Name='BookStore')
DROP DATABASE BookStore
GO
CREATE DATABASE BookStore
GO
USE BookStore
GO

CREATE TABLE Customer(
	C_ID int primary key identity,
	C_Name varchar(50),
	C_Address varchar(100),
	C_Phone varchar(12)
)

CREATE TABLE Book(
	B_ID int primary key,
	B_Category varchar(50),
	B_Author varchar(50),
	B_Publish varchar(100),
	B_Title varchar(100),
	B_Price int,
	B_Instore int,
)

CREATE TABLE BookSold(
	BS_ID int primary key,
	BS_Date datetime,
	BS_Price int,
	BS_Amount int,
	C_ID int,
	B_ID int,
	CONSTRAINT FK_BS_CID
    FOREIGN KEY (C_ID)
    REFERENCES Customer(C_ID),
	CONSTRAINT FK_BS_BID
    FOREIGN KEY (B_ID)
    REFERENCES Book(B_ID)
)

INSERT INTO Customer Values('Son', 'Ha Noi', 0981806996)
INSERT INTO Customer Values('Long', 'Ha Noi', 098788990)
INSERT INTO Customer Values('Tu', 'Hai Phong', 098765432)
INSERT INTO Customer Values('Hai', 'TP.HCM', 0988888123)
INSERT INTO Customer Values('Huy', 'Ha Noi', 0981231232)

SELECT * FROM Customer

INSERT INTO Book Values(111,'Sach Kinh Te', 'avicii', 'kim dong','Kinh te','200',100)
INSERT INTO Book Values(222,'Sach Toan Hoc', 'Mono', 'kim dong','math',200,100)
INSERT INTO Book Values(333,'Sach Tin Hoc', 'Son Tung', 'NEW','Tin Hoc',300,100)
INSERT INTO Book Values(999,'Sach Chung Khoan', 'Ha Anh Tuan', 'OLD','Stock',500,100)
INSERT INTO Book Values(777,'Sach Van Hoc', 'Tuan', 'kim dong','Van Hoc',2000,100)

SELECT * FROM Book

INSERT INTO BookSold VALUES(1,'2022-01-10',70,2,1,111)
INSERT INTO BookSold VALUES(2,'2021-01-10',100,2,1,333)
INSERT INTO BookSold VALUES(3,'2022-01-8',700,2,3,777)
INSERT INTO BookSold VALUES(4,'2022-03-1',50,2,4,999)
INSERT INTO BookSold VALUES(5,'2022-07-10',60,2,5,222)
INSERT INTO BookSold VALUES(6,'2022-10-10',60,2,1,222)

SELECT * FROM BookSold

--2. Tạo một khung nhìn chứa danh sách các cuốn sách (BookCode, Title, Price) kèm theo số lượng đã
--bán được của mỗi cuốn sách.
--Gợi ý: Trường Amout của bảng BookSold chứa số lượng sách đã bán cho một khách hàng.
CREATE VIEW View_Book_BookSold
AS
SELECT Book.B_ID,B_Category,B_Price,BS_Price,BS_Amount FROM Book
inner join BookSold ON
BookSold.B_ID = Book.B_ID

SELECT * FROM View_Book_BookSold
--3. Tạo một khung nhìn chứa danh sách các khách hàng (CustomerID, CustomerName, Address) kèm
--theo số lượng các cuốn sách mà khách hàng đó đã mua.
CREATE VIEW view_cus_booksold
AS
SELECT Customer.C_ID,C_Name,C_Address,BS_Amount FROM Customer
inner join BookSold ON
BookSold.C_ID = Customer.C_ID

--4. Tạo một khung nhìn chứa danh sách các khách hàng (CustomerID, CustomerName, Address) đã
--mua sách vào tháng trước, kèm theo tên các cuốn sách mà khách hàng đã mua.
CREATE VIEW view_cus_book_sold
AS
SELECT Customer.C_ID,C_Name,C_Address,B_Title,BS_Date FROM Customer
left join BookSold ON
BookSold.C_ID = Customer.C_ID 
left join Book ON
BookSold.B_ID = Book.B_ID WHERE (DATEDIFF(month,BS_Date,getdate())>1)

select getdate()

--5. Tạo một khung nhìn chứa danh sách các khách hàng kèm theo tổng tiền mà mỗi khách hàng đã chi
--cho việc mua sách.
--Gợi ý: Tiền mỗi lần mua = Giá mỗi cuốn sách * Số lượng sách đã mua.
CREATE VIEW  view_cus_amount
AS
SELECT C_Name,SUM(BookSold.BS_Amount * BookSold.BS_Price) as [Total cost] FROM Customer
JOIN BookSold ON
BookSold.C_ID = Customer.C_ID WHERE Customer.C_Name like '%son%'
GROUP BY C_Name