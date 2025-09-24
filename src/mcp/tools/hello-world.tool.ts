import { Injectable } from "@nestjs/common";
import { Context, Tool } from "@rekog/mcp-nest";
import { z } from "zod";

const HelloWorldParameters = z.object({
  name: z
    .string()
    .min(1, "name must be at least 1 character long.")
    .default("World"),
  language: z.enum(["ko", "en"]).default("ko"),
});

type HelloWorldParams = z.infer<typeof HelloWorldParameters>;

@Injectable()
export class HelloWorldTool {
  @Tool({
    name: "hello_world",
    description: "Return a simple greeting with optional language selection.",
    parameters: HelloWorldParameters,
  })
  async handle({ name, language }: HelloWorldParams, ctx: Context) {
    ctx.log.debug("hello_world called", { name, language });

    if (language === "en") {
      return { message: `Hello, ${name}!` };
    }

    return {
      message: `${name}\uB2D8\uC744 \uB9CC\uB098\uC11C \uBC18\uAC00\uC6CC\uC694!`,
    };
  }
}
