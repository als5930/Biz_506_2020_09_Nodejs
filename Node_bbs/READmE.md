# nodejs + mongoDB + mongoose 연동 BBs 프로젝트
* mongoDB를 사용하여 BBS 프로젝트 실행

## mongoDB는 NOSQL
* NOSQL : SQL이 아니다 라는 뜻이 아니다, Not Only SQL라는 뜻으로
SQL뿐남 아니라 SQL 을 사용하지 않는 방법으로 대량의 데이터를 CRUD 수행하는데 사용하는  DBMS
Schema라는 것 자체가 없어도 되는 환경, Document라는 개념으로 
JSON형태의 데이터를 관리한다
대량의 데이터를 INSERT할떄 데이터구조가 정해지지 않았어도
데이터를 취급할수가 있는 DBMS
* RDBMS : 관계형데이터베이수, 데이터를 INSERT 하기전에 반드시 DB,
TableSpace, Table 관 같은 Schema들을 먼저 생성된어 있어야한다
만약 원래 구성된 Schema와 다른 형식에 데이터를저장하려고 하면
데이터 구조를 먼저 변경해야 하기 때문에 유연한 환경에
대처하기 어렵다

- BigData : 데이터가 굉장히 크다 대량의 데이터, 취급이 쉽지 않은 형태 Data
취급이 쉽지 않다 = RDBMS(SQL을 사용하는)로 관리하기 어려울만큼
BigData를 취급할때는 RDBMS보다는 NoSQL 