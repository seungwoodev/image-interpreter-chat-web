# Project Title / image-interpreter-chat-web

이미지를 이모티콘으로 변경 및 채팅 기능을 활용한 웹 사이트

## Team Mates : 최지호, 김주형, 추승우

## Login Page
* database에 저장된 유저의 아이디, 비밀번호 확인 후 로그인

## Image interpreter
* 유저가 이미지 업로드
* 이미지 특징 분석 및 변환 중 google rest api request 문제 발생


## Chat (채팅)

* 구글, 페이스북 SDK를 활용한 로그인

<img src="https://user-images.githubusercontent.com/72987121/126331920-8d65c36b-c8fe-45e6-bd57-343ef4d292f9.PNG" width=50% height=50%>

* 유저 추가 기능을 활용하여 1대1 및 그룹 채팅 모두 진행 가능

<img src="https://user-images.githubusercontent.com/72987121/126331924-4f484f27-9989-41cd-874f-6987e1ebd2be.PNG" width=50% height=100%>

<img src="https://user-images.githubusercontent.com/72987121/126332734-b8539aaf-c63f-4c84-821e-361b080b1649.PNG" width=50% height=80%>

* 채팅 내역 저장 및 재접속시 로드

<img src="https://user-images.githubusercontent.com/72987121/126332723-5c912e57-c648-4ed7-9a58-cf5df85b9084.PNG" width=50% height=80%>

* 상대가 메세지를 읽었는지 유무 확인 가능
* 관리자가 유저 추가 및 삭제 (채팅 내역 삭제 가능)
* 로그인 정보 저장을 위한 firebase 및 Chat engine 사용
* <del> socket을 활용한 카메라 기능을 구현 하였으나 로컬에서만 작동 가능, 외부에서는 https링크가 아니라 접속 불가, 해당 사항 추가 보완 필요 </del> 



 

