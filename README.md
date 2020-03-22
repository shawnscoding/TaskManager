## Task Manager

Task Management app built in React js, https://my-motivator-db.firebaseapp.com/

## 앱요약

Task Management 앱 입니다. React js, Redux, firebase 등을 이용하여 Task Management 앱을 만들었습는다. 이름은 Task Manager 입니다.
개인의 재량으로 구글링과 다큐멘터리를 참조하며 디자인, 프론트엔드, 백엔드 그리고 Data Structure 모두 구상, 구현하였습니다.
앱의 주요 기능은 유저가 할일을 요일, 주, 달별로 필터링 해주는 것, 그리고 업무 종류, 시간대, 중요도로 분류해주는 것입니다.
게다가 성취도 그래프를 구현해 카테고리별로 본인 과거 성취도를 한눈에 볼 수 있으며, 타이머 기능과 히스토리페이지도 추가하였습니다.

### 앱 사용법

포트폴리오 페이지 하단에 앱 데모 비디오가 있습니다.
https://shawnsportfolio.herokuapp.com/

회원가입을 원하지 않을 경우,
이메일: test333@test.com
비밀번호: tests333 으로 로그인해주십시오.

## 개발 동기

자기개발과 편의성을 위해서 개발한 앱입니다.
평소 동기부여를 위해 공부할 때, 항상 타이머를 이용해 시간을 재고 노트에 기록을 했었습니다.
하지만 공부했던 시간이 많아질수록, 노트 보관이 힘들어지고 제 성취도를 한 번에 볼 수 없는 등, 읽고 관리하기가 불편하다는 것을 깨달았습니다.
그 후, 제가 노트에 적어왔던 것들을 웹으로 디자인하며, 항상 원해왔고 상상했던 기능들을 모두 구현해 저만의 Task Management 앱을 만들자고 다짐했습니다.
개발 후, 정말 유용하게 사용하고 있으며 가족들과 친구들도 함께 사용하고 있습니다.

## 내가 겪은 문제 & 해결방안

이번 프로젝트에서 앱 특성상 데이터 필터링을 정말 다양하게 많이 해야 했습니다. 유저의 액션의 따라 많은 UI Component
변경되여야 했고, 그때마다 서버에 Request를 하는 것은 앱 속도를 매우 느리게 했고 리액트 환경 특성상 효율적이지 않았습니다. 고민 후, 유저가 페이지에 접속할 때 유저의 한 달 동안의 업무를 모두 request 하고 나머지 필터링은 모두 Redux에게 맞기기로 결정했습니다. 그로 인해 유저 액션에 따른 앱의 상호작용이 훨씬 더 빨라졌습니다.
한 번에 많은 데이터 request로 인해 서버가 사망할 수도 있다고 생각했지만 유저의 한 달 업무가 그리 많지 않을 것이라고 판단했습니다.

앱을 거의 완성했을 당시, 인증되지 않은 유저가 본 앱에서 할 수 있는 것이 거의 없다고 판단했습니다. 고민 끝에, 인증되지 않은 유저는 홈페이지에서 로그인을 하지 않는 한 홈페이지에서 더 이상 안쪽으로 접근할 수 없도록 규정하였습니다.

이번 프로젝트에 Functional Component만 사용해 개발을 할 것이라고 다짐했지만 Classical Component를 써야 하는 상황이
종종 있었습니다. 예로 타이머 컴포넌트에서 setInterval clearInterval 를 정확한 시간에 쓰는데 어려움이 있었습니다.
이와 같이, 몇몇 Claasical Components를 생성하였고 더 안정적인 프로그램을 만들 수 있었습니다..
물론 Functional Component만으로도 충분히 본 앱과 똑같은 앱을 만들 수 있을 거라고 믿지만,
최고의 Practice는 Classical 와 Functional Component를 적절한 시기에 함께 사용하는 것이라는 것을 깨닭았습니다.

## 배운 점

이번 프로젝트로 배운 점은 크게 3가지입니다.

먼저 Date-fns과 같은 Date library의 중요성을 알게 되었습니다. 충분히 이러한 라이브러리 없이 개발이 가능하지만, Date Value가 많아질수록 Value Converting이 어려워진다는 것을 깨달았습니다. 그래서 Date-fns 라이브러리를 사용하였고 그 후 훨씬 쉽고 빠르게 개발할 수 있었습니다.

두 번째로 스타일 라이브러리의 장단점을 알게 되었습니다. 저는 본 프로젝트에 Material UI를 사용하였습니다. 개발 속도가 초반에 엄청 빠르다는 장점이 있었지만, 커스터마이징 하는데 아무래도 복잡함이 따랐습니다.

마지막으로 파이어베이스과 같은 클라우드 데이터베이스 서비스를 사용함으로써, 얼마나 백엔드 개발이 쉬워지고 시간이 단축되는지 몸소 깨닫게 되었습니다. 물론 백엔드 서비스를 이용함에 따라, 서버에서 많은 컨트롤을 가질 순 없지만, 간단한 앱 개발을 하기에는 최적화라고 생각합니다.

### this is the summary of this app written in English

### `the features this app has`

I am pretty confident to say that this app is probably the best todo app ever on the internet.
You can pretty much do anything related to task management.
I categorized tasks by date, hour, month, week, type, importance, completion and so on.
Also, There is history page where you can see the rate of your completion in diverse categories as well.
Plus, It has really beautiful UI which is simple to use

I am thinking of adding more features to make this app by far the best todo app ever.

### `tools and libraries I used`

I used react-saga, material ui and a little bit of styled-library to style,
firebase, date-fns and so on.

### `Things I learned`

Material Ui Library has a quite deep learning curve but is really flexible and easy to customize. there was no problem in customizing material UI component at all.

### `Challenge I faced`

It is feasible to deal with date value without using a library like date-fns but can be a nightmare.
So I used date-fns, which made development so much easier.

Creating our own graph or chart can be quite tricky. Thus, I picked up a small React Chart library called recharts and made my life so much easier.

Since there's nothing to do for unauthenticated user on this app, I decided to force user to sign 1n
before entering to the start page

### `Q & A`

### `can I copy your app?`

Yes! , I'd be glad to help.
However, you are required to mention my name Shawn and that you copied my work on your app, if you
replicate almost everything on my app.
d
If you have any question relevant to my app, you can simply email me. I'd be glad to answer.
