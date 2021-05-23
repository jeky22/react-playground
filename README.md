### 제출 동작 실행에 대한 설명

- initialize 패키지 이외에 적용한 패키지는 `node-sass` 뿐입니다.
- 실행 방법

```
// Project setup
npm install

// Compiles for development
npm run start

// Compiles and minifies for production
npm run build
```

### 본인이 생각하는 가장 좋은 구조와 개선 방안

#### 개선 방향

- http통신 적용하여 실제 데이터 통신구현
  - 데이터 양을 보고 로딩방식에 대해 생각해볼 필요가 있을것 같다 (무한스크롤, 페이지네이션)
- semantic한 웹 태그 적용
  - 태그를 대부분 div로 개발하였기 때문에 추후에 SEO적용에 불리할것 같다
- redux와 같은 상태관리도구를 이용하여 컴포넌트간의 통신에 적용
  - 프로젝트가 커짐에 때라 데이터간의 통신이 더 복잡해질것 같다
- scss 파일 세분화 필요
  - scss 파일이 지금은 하나의 파일로 뭉쳐져 있는데 추후에 파일별로 쪼개어 관리하는게 나을것 같다
