# 탄탄한 백엔드 NestJS, 기초부터 심화까지

> 이 프로젝트는 [탄탄한 백엔드 NestJS, 기초부터 심화까지](https://www.inflearn.com/course/%ED%83%84%ED%83%84%ED%95%9C-%EB%B0%B1%EC%97%94%EB%93%9C-%EB%84%A4%EC%8A%A4%ED%8A%B8)강의에서 진행하는 고양이 정보 커뮤니티 프로젝트입니다.

## 🌴 진행 과정

**프로젝트 설치 :**

```shell
nest new .
npm install --save @nestjs/mongoose mongoose
npm install --save @nestjs/config
npm install --save class-validator class-transformer
```

```shell
npm install --save bcrypt
npm install --save @types/bcrypt
```

**DTO 설정 :**

- DTO 클래스 생성후 타입으로 지정
- DTO 클래스에서는 validator를 이용하여 유효성 검사 처리

**읽기 전용 데이터 반환 :**

- 스키마 클래스에서 읽기 전용 데이터 메서드를 만들어서 반환
