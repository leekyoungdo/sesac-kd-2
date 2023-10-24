select addr from customer;
select distinct addr from customer;

select * from orders;
-- orders 테이블에 존재 하는 주문 개수
select count(*) as 'total_orders' from orders;
desc orders;

-- 사람별 주문 건수
-- select에서 group by 를 쓸 때, group by뒤에 쓴 속성과 집계함수로 새로 만든 속성만 출력. ( 다른 prodname 등등의 속성은 출력하지 x)
select custid, count(*) as 'count' from orders group by custid;
-- 사람별로 구매한 상품의 개수
select custid, sum(amount) as 'total_amount' from orders group by custid;
-- 사람별로 구매한 상품의 개수 조회하는데, 구매한 상품의 개수가 5개 이상인 경우만 조회
select custid, sum(amount) as 'total_amount' from orders group by custid having sum(amount) >= 5;
-- 사람별로 구매한 상품의 개수 조회하는데, 구매한 상품의 개수가 5개 이상인 경우만 조회 (custid != 'bunny' 를 제외한)
select custid, sum(amount) as 'total_amount' from orders where custid != 'bunny'
 group by custid having sum(amount) >= 5;
-- 사람별로 결제한 금액
select custid, sum(amount*price) as 'total_price' from orders group by custid;

-- customer, order을 inner join > 주문별로 배송지를 알고싶어서
select * from customer inner join orders on customer.custid = orders.custid;
select customer.addr,orders.* from customer inner join orders on customer.custid = orders.custid;