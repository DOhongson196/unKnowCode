USE master
GO
IF EXISTS (SELECT * FROM sys.databases WHERE Name='AZ_bank')
DROP DATABASE AZ_bank
GO
CREATE DATABASE AZ_bank
GO
USE AZ_bank
GO

CREATE TABLE Customer(
	CustomerId int PRIMARY KEY,
	[Name] nvarchar(50),
	[City] nvarchar(50),
	[Country] nvarchar(50),
	[Phone] nvarchar(50),
	[Email] nvarchar(50),
)

CREATE TABLE CustomerAccount(
	AccountNumber char(9) PRIMARY KEY,
	CustomerId int,
	Balance money NOT NULL,
	MinAccount money,
	CONSTRAINT FK_CA_C
    FOREIGN KEY (CustomerId)
    REFERENCES Customer(CustomerId)
)

CREATE TABLE CustomerTransaction(
	TransactionId int PRIMARY KEY,
	AccountNumber char(9),
	TransactionDATE smalldatetime,
	Amount money,
	DepositorWithdraw bit,
	CONSTRAINT FK_CT_CA
    FOREIGN KEY (AccountNumber)
    REFERENCES CustomerAccount(AccountNumber)
)

INSERT INTO Customer VALUES(1,'Do Hong Son','HN','VN','0123','DHS@gmail.com')
INSERT INTO Customer VALUES(2,'Tu','HN','VN','2345','Tu@gmail.com')
INSERT INTO Customer VALUES(3,'Long','HN','VN','5678','Long@gmail.com')
SELECT * FROM Customer

INSERT INTO CustomerAccount VALUES('CA1',1,2000,100)
INSERT INTO CustomerAccount VALUES('CA2',1,100000,100)
INSERT INTO CustomerAccount VALUES('CA3',2,4000,100)
SELECT * FROM CustomerAccount

INSERT INTO CustomerTransaction VALUES(1,'CA1','2019-07-17',2000,3)
INSERT INTO CustomerTransaction VALUES(2,'CA1','2022-07-12',100000,5)
INSERT INTO CustomerTransaction VALUES(3,'CA2','2021-02-12',6000,3)
SELECT * FROM CustomerTransaction

--4. Write a query to get all customers from Customer table who live in ‘Hanoi’.
SELECT * FROM Customer WHERE City = 'HN'
--5. Write a query to get account information of the customers (Name, Phone, Email,
--AccountNumber, Balance).
SELECT [Name],Phone,Email,AccountNumber,Balance FROM Customer
join CustomerAccount ON
Customer.CustomerId = CustomerAccount.CustomerId
--6. A-Z bank has a business rule that each transaction (withdrawal or deposit) won’t be
--over $1000000 (One million USDs). Create a CHECK constraint on Amount column
--of CustomerTransaction table to check that each transaction amount is greater than
--0 and less than or equal $1000000.
ALTER TABLE CustomerTransaction
ADD CONSTRAINT CK_Checkwithdrawal CHECK (DepositorWithdraw > 0 and DepositorWithdraw <= 1000000)
--7. Create a view named vCustomerTransactions that display Name,
--AccountNumber, TransactionDate, Amount, and DepositorWithdraw from Customer,
--CustomerAccount and CustomerTransaction tables.

CREATE VIEW vCustomerTransactions
AS
SELECT [Name],CustomerAccount.AccountNumber,TransactionDate,Amount,DepositorWithdraw FROM Customer
join CustomerAccount ON
Customer.CustomerId = CustomerAccount.CustomerId
Join CustomerTransaction ON
CustomerTransaction.AccountNumber = CustomerAccount.AccountNumber

SELECT * FROM vCustomerTransactions