# NestJS MCP Example

간단한 NestJS 애플리케이션에서 `@rekog/mcp-nest` 모듈을 사용해 STDIO 기반 MCP 서버를 띄우는 예제입니다.

## 구성 파일

- `src/main.ts`: Nest 애플리케이션 컨텍스트를 부트스트랩합니다.
- `src/app.module.ts`: MCP 모듈을 애플리케이션에 연결합니다.
- `src/mcp/mcp.module.ts`: MCP 서버 설정과 `HelloWorldTool` 등록을 담당합니다.
- `src/mcp/tools/hello-world.tool.ts`: `hello_world` MCP 툴 구현입니다.

## 실행 방법

```bash
npm install
npm run start
```

기본 STDIO 전송 방식을 사용하므로, MCP 호환 클라이언트(예: Claude, Cursor)의 로컬 MCP 설정에 이 디렉토리의 실행 명령을 연결하면 됩니다.

### 툴 호출 예시

```json
{
  "name": "hello_world",
  "arguments": {
    "name": "AWAVE",
    "language": "en"
  }
}
```
