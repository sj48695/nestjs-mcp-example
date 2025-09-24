import { Module } from '@nestjs/common';
import { McpModule as BaseMcpModule, McpTransportType } from '@rekog/mcp-nest';
import { HelloWorldTool } from './tools/hello-world.tool';

@Module({
  imports: [
    BaseMcpModule.forRoot({
      name: 'demo-nest-mcp',
      version: '0.1.0',
      transport: [McpTransportType.SSE, McpTransportType.STREAMABLE_HTTP],
      instructions: '간단한 Hello World MCP 툴을 제공합니다.',
    }),
  ],
  providers: [HelloWorldTool],
})
export class McpModule {}
