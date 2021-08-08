# zum
줌인터넷 과제를 위한 repository입니다.

## 프로젝트 구조
---
### 1. SCSS
```bash
/src/entry/scss/
|
|– abstracts/
|   |– _variables.scss    # SCSS 변수
|   |– _placeholder.scss  # SCSS 플레이스홀더
|   |– _mixins.scss       # SCSS 믹스인
|
|– base/
|   |– _reset.scss        # 리셋
|   |– _common.scss       # 공통
|
|– components/
|   |– _button.scss       # 버튼
|   |– _icon.scss         # 아이콘
|   |– _quick.scss        # 퀵메뉴
|   |– _chart.scss        # 차트
|
|– layout/
|   |– _header.scss       # 헤더
|   |– _section.scss      # 섹션
|   |– _footer.scss       # 푸터
|
|– egloos.scss
```

### 2. JavaScript
```bash
/src/entry/js/
|
|– components/
|   |– ChartManager.js    # 차트
|   |– ChrartDoughnut.js  # 도넛차트
|   |– ScrollCheck.js     # 스크롤
|   |– QuickMenu.js       # 퀵메뉴
|   |– RollingList.js     # 롤링
|
|– egloos.js
```

### 3. Library
```bash
/src/libs/
|
|– js/
|   |– chart/
|        |- 3.5.0/
|             |- chart.min.js
|        |- datalabels/2.0.0/
|             |- chartjs-plugin-datalabels@2.0.0
| 
```

### 4. Webpack
```bash
/
|- webpack.config.js       # 웹팩 설정 파일
|- js-config.js            # js 설정 파일
|- css-config.js           # css 설정 파일
```

### 5. HTML
```bash
/src/
|- index.html              # 인덱스 html
```

## 결과물 파일
```bash
/src/
|- index.html              # html
/dist/css/
|- egloos.min.css          # css
/dist/js/
|- egloos.min.js           # js
```