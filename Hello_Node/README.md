# Hello Node Project
## Nodejs 를 사용하여 web Application Server 생성하기
1. workspace/ nodejs 폴더생성
2. nodejs 퐁더에서 express 프레임워크를 사용하여 프로젝트 생성
    - express Hello)Node
3. cd Hello_Node : 프로젝트 폴더로 이동
4. npm install : dependency download
    - package.json파일에 설정된 dependency들을 download하여
    node_modules vhfejdp wjwkd
5. 프로젝트 시작
    가. npm start : 기본시작하기
    나. nodemon : 개발환경에서 파일이 변경(수정)하면 자동으로 서버를 재 시작하는 tool을 사용하기


    ## nodejs의 view 설정
    1. nodejs의 탄생시점에서는 jade라는 view를 사용했다
    2. 2.x로 버전업이 되면서 이름이 pug로 변경되었다
    3. npm install pug : view 단의 도구 설치
    4. views 폴더의 파일들 \*.pug로 이름 변경
    5. app.js 파일에서 jade를 pug로 변경