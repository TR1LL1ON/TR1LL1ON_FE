# 야놀자테크캠프 미니프로젝트 1조 💸 TR1LL1ON 프론트엔드!

<div align="center">
<p align="left">
  <a href="https://tr1ll1on.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/TR1LL1ON-white?style=for-the-badge&logoColor=white" alt="page"/>
  </a>
</p>
</div>

### 0️⃣ Git convention

### ✅ Work Flow

1. [기능명세](https://www.notion.so/537d2e5282ec4c2aa0c96ebd5fc1f181?v=6c25db2751a74634824ae2fbb357c12a&pvs=4)를 기반으로 `Issue` 생성
2. 생성한 `Issue` 번호로 로컬에서 브랜치 생성(feature/#이슈번호)
3. `dev`의 최신변경사항을 pull 받아서 동기화
4. 구현완료후 `dev`로 push후 Pull Request 생성
5. 14:00에 팀원들과 함께 conflict 해결 후 `dev`로 merge
6. 브랜치 삭제후 1번으로

### ✅ Commit log

```
Feat : 새로운 기능 추가
Fix : 버그 수정
Style : 코드 스타일 수정 (세미 콜론, 인덴트 등의 스타일적인 부분만)
Refactor : 코드 리팩토링 (더 효율적인 코드로 변경 등)
Design : CSS 등 디자인 추가/수정
Comment : 주석 추가/수정
Docs : 내부 문서 추가/수정
Test : 테스트 추가/수정
Chore : 빌드 관련 코드 수정, 개발 환경 관련 설정(과거 Env)
Move : 파일 및 폴더명 수정(과거 Rename)
Remove : 파일 삭제
```

### ✅ Branch Naming

```
feature/#이슈번호
```

### ✅ Branch strategy

### `main`

- 소비자가 사용하는 제품이 존재하는 (배포될 코드가 있는) 브랜치
  - PR받는 브랜치: `dev`
  - Pull Request merge 완료후 `dev` push 받기

### `dev(develop)`

- 개발 단계의 코드가 있는 (개발의 중심) 브랜치
- 개발 자체는 feature 브랜치에서 진행
  - PR받는 브랜치: `feature/#이슈번호`
  - 14:00에 다같이 Pull Request merge

### `feature/#이슈번호`

- 특정한 기능 (단위 기능) 을 구현하는 브랜치
- 기능 구현이 완료되면, `dev`로 pr
  - PR나가는 브랜치: dev
  - 구현완료시 Push후 Pull Request 생성

---

### 1️⃣ 라우팅구조

```
📦src
 ┣ 📂api ➡️ api 관련
 ┣ 📂components
 ┃ ┣ 📂layout ➡️ 공통 컴포넌트
 ┃ ┗ 📂template ➡️ 특정 페이지에서만 쓰이는 컴포넌트
 ┃ ┃ ┣ 📂cart
 ┃ ┃ ┣ 📂products
 ┃ ┃ ┣ 📂join
 ┃ ┃ ┣ 📂mypage
 ┃ ┃ ┗ 📂payment
 ┣ 📂hooks
 ┣ 📂interfaces ➡️ 타입지정 관련
 ┣ 📂pages ➡️ 탬플릿에 작성된 컴포넌트를 import해서 구성
 ┃ ┣ 📂cart
 ┃ ┣ 📂products
 ┃ ┣ 📂main
 ┃ ┣ 📂mypage
 ┃ ┗ 📂payment
 ┣ 📂router ➡️ 라우팅 관련
 ┃ ┗ 📜mainRouter.tsx
 ┣ 📂states ➡️ 리코일 관련
 ┃ ┗ 📜atom.ts
 ┣ 📂util ➡️ 유틸함수 관련
 ┃ ┗ 📜util.ts
 ┣ 📜App.tsx
 ┣ 📜constant.ts ➡️ 환경변수(.env) 관련
 ┣ 📜index.css ➡️ css 기본설정 관련
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```

---

### 2️⃣ 라이브러리

---
