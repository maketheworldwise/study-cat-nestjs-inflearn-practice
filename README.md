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
npm install --save-dev @types/bcrypt
```

```shell
npm install --save @nestjs/swagger swagger-ui-express
```

```shell
npm install --save @nestjs/passport passport
npm install --save @nestjs/jwt passport-jwt
npm install --save-dev @types/passport-jwt
```

```shell
npm install --save express-basic-auth
```

```shell
npm install --save-dev @types/multer
```

**DTO 설정 :**

- DTO 클래스 생성후 타입으로 지정
- DTO 클래스에서는 validator를 이용하여 유효성 검사 처리

**읽기 전용 데이터 반환 :**

- 스키마 클래스에서 읽기 전용 데이터 메서드를 만들어서 반환

**Fastify :**

- Nest는 Express 프레임워크를 기본적으로 사용하지만, 성능 향상을 위한다면 Express 대신 Fastify 사용

**Swagger :**

- Swagger API 문서 엔드포인트 설정
- Swagger API 문서 설명
- 예시 Request, Response 설정
- `express-basic-auth`를 이용하여 문서 접근 보안성 향상

**CORS 적용 :**

- (생략)

**Repository 패턴 적용 :**

- (생략)

**JWT 토큰 생성 :**

- 의존성 순환 문제를 해결하기 위해 `forwardRef()` 사용

**JWT 토큰 인증 (Guard) :**

- JWT Guard -> JWT Strategy (Secret Key) -> Request user & API
- `@UseGuards`

**파일 업로드 :**

- `Multer` 사용

**Populate :**

- Virtual 필드 추가를 통해 다른 Document 참조
- 컬렉션의 특정 데이터를 기반으로 다른 컬렉션의 데이터를 참조
- https://mongoosejs.com/docs/populate.html
