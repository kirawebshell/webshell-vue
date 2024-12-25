import * as jspb from 'google-protobuf'



export class Proxy extends jspb.Message {
  getSchema(): Schema;
  setSchema(value: Schema): Proxy;

  getUser(): string;
  setUser(value: string): Proxy;

  getPass(): string;
  setPass(value: string): Proxy;

  getAddress(): string;
  setAddress(value: string): Proxy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Proxy.AsObject;
  static toObject(includeInstance: boolean, msg: Proxy): Proxy.AsObject;
  static serializeBinaryToWriter(message: Proxy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Proxy;
  static deserializeBinaryFromReader(message: Proxy, reader: jspb.BinaryReader): Proxy;
}

export namespace Proxy {
  export type AsObject = {
    schema: Schema,
    user: string,
    pass: string,
    address: string,
  }
}

export class Config extends jspb.Message {
  getBlocksize(): number;
  setBlocksize(value: number): Config;

  getProxy(): Proxy | undefined;
  setProxy(value?: Proxy): Config;
  hasProxy(): boolean;
  clearProxy(): Config;

  getTimeout(): number;
  setTimeout(value: number): Config;

  getRetry(): number;
  setRetry(value: number): Config;

  getMaxsize(): number;
  setMaxsize(value: number): Config;

  getHeadersMap(): jspb.Map<string, string>;
  clearHeadersMap(): Config;

  getCookiesMap(): jspb.Map<string, string>;
  clearCookiesMap(): Config;

  getPostsMap(): jspb.Map<string, string>;
  clearPostsMap(): Config;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Config.AsObject;
  static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
  static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Config;
  static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
}

export namespace Config {
  export type AsObject = {
    blocksize: number,
    proxy?: Proxy.AsObject,
    timeout: number,
    retry: number,
    maxsize: number,
    headersMap: Array<[string, string]>,
    cookiesMap: Array<[string, string]>,
    postsMap: Array<[string, string]>,
  }
}

export class WebShell extends jspb.Message {
  getId(): number;
  setId(value: number): WebShell;

  getConfig(): Config | undefined;
  setConfig(value?: Config): WebShell;
  hasConfig(): boolean;
  clearConfig(): WebShell;

  getUrl(): string;
  setUrl(value: string): WebShell;

  getPassword(): string;
  setPassword(value: string): WebShell;

  getShelltype(): ShellType;
  setShelltype(value: ShellType): WebShell;

  getEncodemode(): CipherMode;
  setEncodemode(value: CipherMode): WebShell;

  getDecodemode(): CipherMode;
  setDecodemode(value: CipherMode): WebShell;

  getTag(): string;
  setTag(value: string): WebShell;

  getSession(): boolean;
  setSession(value: boolean): WebShell;

  getOs(): string;
  setOs(value: string): WebShell;

  getCharset(): string;
  setCharset(value: string): WebShell;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebShell.AsObject;
  static toObject(includeInstance: boolean, msg: WebShell): WebShell.AsObject;
  static serializeBinaryToWriter(message: WebShell, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebShell;
  static deserializeBinaryFromReader(message: WebShell, reader: jspb.BinaryReader): WebShell;
}

export namespace WebShell {
  export type AsObject = {
    id: number,
    config?: Config.AsObject,
    url: string,
    password: string,
    shelltype: ShellType,
    encodemode: CipherMode,
    decodemode: CipherMode,
    tag: string,
    session: boolean,
    os: string,
    charset: string,
  }
}

export class Response extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): Response;

  getMsg(): string;
  setMsg(value: string): Response;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
  export type AsObject = {
    status: boolean,
    msg: string,
  }
}

export class Param extends jspb.Message {
  getKey(): string;
  setKey(value: string): Param;

  getValue(): string;
  setValue(value: string): Param;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Param.AsObject;
  static toObject(includeInstance: boolean, msg: Param): Param.AsObject;
  static serializeBinaryToWriter(message: Param, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Param;
  static deserializeBinaryFromReader(message: Param, reader: jspb.BinaryReader): Param;
}

export namespace Param {
  export type AsObject = {
    key: string,
    value: string,
  }
}

export class WebUrl extends jspb.Message {
  getSchema(): string;
  setSchema(value: string): WebUrl;

  getAddress(): string;
  setAddress(value: string): WebUrl;

  getUser(): string;
  setUser(value: string): WebUrl;

  getPass(): string;
  setPass(value: string): WebUrl;

  getPath(): string;
  setPath(value: string): WebUrl;

  getParamsList(): Array<Param>;
  setParamsList(value: Array<Param>): WebUrl;
  clearParamsList(): WebUrl;
  addParams(value?: Param, index?: number): Param;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebUrl.AsObject;
  static toObject(includeInstance: boolean, msg: WebUrl): WebUrl.AsObject;
  static serializeBinaryToWriter(message: WebUrl, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebUrl;
  static deserializeBinaryFromReader(message: WebUrl, reader: jspb.BinaryReader): WebUrl;
}

export namespace WebUrl {
  export type AsObject = {
    schema: string,
    address: string,
    user: string,
    pass: string,
    path: string,
    paramsList: Array<Param.AsObject>,
  }
}

export class WebRequest extends jspb.Message {
  getMethod(): string;
  setMethod(value: string): WebRequest;

  getWeburl(): WebUrl | undefined;
  setWeburl(value?: WebUrl): WebRequest;
  hasWeburl(): boolean;
  clearWeburl(): WebRequest;

  getCookiesMap(): jspb.Map<string, string>;
  clearCookiesMap(): WebRequest;

  getHeadersMap(): jspb.Map<string, string>;
  clearHeadersMap(): WebRequest;

  getBody(): Uint8Array | string;
  getBody_asU8(): Uint8Array;
  getBody_asB64(): string;
  setBody(value: Uint8Array | string): WebRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WebRequest): WebRequest.AsObject;
  static serializeBinaryToWriter(message: WebRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebRequest;
  static deserializeBinaryFromReader(message: WebRequest, reader: jspb.BinaryReader): WebRequest;
}

export namespace WebRequest {
  export type AsObject = {
    method: string,
    weburl?: WebUrl.AsObject,
    cookiesMap: Array<[string, string]>,
    headersMap: Array<[string, string]>,
    body: Uint8Array | string,
  }
}

export class EmptyRequest extends jspb.Message {
  getId(): number;
  setId(value: number): EmptyRequest;

  getUrl(): string;
  setUrl(value: string): EmptyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmptyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EmptyRequest): EmptyRequest.AsObject;
  static serializeBinaryToWriter(message: EmptyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmptyRequest;
  static deserializeBinaryFromReader(message: EmptyRequest, reader: jspb.BinaryReader): EmptyRequest;
}

export namespace EmptyRequest {
  export type AsObject = {
    id: number,
    url: string,
  }
}

export class QueryRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): QueryRequest;

  getOffset(): number;
  setOffset(value: number): QueryRequest;

  getRequest(): EmptyRequest | undefined;
  setRequest(value?: EmptyRequest): QueryRequest;
  hasRequest(): boolean;
  clearRequest(): QueryRequest;

  getCompany(): string;
  setCompany(value: string): QueryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRequest): QueryRequest.AsObject;
  static serializeBinaryToWriter(message: QueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRequest;
  static deserializeBinaryFromReader(message: QueryRequest, reader: jspb.BinaryReader): QueryRequest;
}

export namespace QueryRequest {
  export type AsObject = {
    limit: number,
    offset: number,
    request?: EmptyRequest.AsObject,
    company: string,
  }
}

export class WebResponse extends jspb.Message {
  getResponsetype(): string;
  setResponsetype(value: string): WebResponse;

  getName(): string;
  setName(value: string): WebResponse;

  getSize(): string;
  setSize(value: string): WebResponse;

  getUrl(): WebUrl | undefined;
  setUrl(value?: WebUrl): WebResponse;
  hasUrl(): boolean;
  clearUrl(): WebResponse;

  getExtradataList(): Array<Param>;
  setExtradataList(value: Array<Param>): WebResponse;
  clearExtradataList(): WebResponse;
  addExtradata(value?: Param, index?: number): Param;

  getResponse(): Response | undefined;
  setResponse(value?: Response): WebResponse;
  hasResponse(): boolean;
  clearResponse(): WebResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WebResponse): WebResponse.AsObject;
  static serializeBinaryToWriter(message: WebResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebResponse;
  static deserializeBinaryFromReader(message: WebResponse, reader: jspb.BinaryReader): WebResponse;
}

export namespace WebResponse {
  export type AsObject = {
    responsetype: string,
    name: string,
    size: string,
    url?: WebUrl.AsObject,
    extradataList: Array<Param.AsObject>,
    response?: Response.AsObject,
  }
}

export class GlobalConfig extends jspb.Message {
  getProxy(): Proxy | undefined;
  setProxy(value?: Proxy): GlobalConfig;
  hasProxy(): boolean;
  clearProxy(): GlobalConfig;

  getTimeout(): number;
  setTimeout(value: number): GlobalConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GlobalConfig.AsObject;
  static toObject(includeInstance: boolean, msg: GlobalConfig): GlobalConfig.AsObject;
  static serializeBinaryToWriter(message: GlobalConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GlobalConfig;
  static deserializeBinaryFromReader(message: GlobalConfig, reader: jspb.BinaryReader): GlobalConfig;
}

export namespace GlobalConfig {
  export type AsObject = {
    proxy?: Proxy.AsObject,
    timeout: number,
  }
}

export class Generate extends jspb.Message {
  getType(): ShellType;
  setType(value: ShellType): Generate;

  getCiphermode(): CipherMode;
  setCiphermode(value: CipherMode): Generate;

  getConfusionmode(): string;
  setConfusionmode(value: string): Generate;

  getConfusion(): boolean;
  setConfusion(value: boolean): Generate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Generate.AsObject;
  static toObject(includeInstance: boolean, msg: Generate): Generate.AsObject;
  static serializeBinaryToWriter(message: Generate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Generate;
  static deserializeBinaryFromReader(message: Generate, reader: jspb.BinaryReader): Generate;
}

export namespace Generate {
  export type AsObject = {
    type: ShellType,
    ciphermode: CipherMode,
    confusionmode: string,
    confusion: boolean,
  }
}

export class CacheLog extends jspb.Message {
  getUser(): string;
  setUser(value: string): CacheLog;

  getIp(): string;
  setIp(value: string): CacheLog;

  getLog(): string;
  setLog(value: string): CacheLog;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CacheLog.AsObject;
  static toObject(includeInstance: boolean, msg: CacheLog): CacheLog.AsObject;
  static serializeBinaryToWriter(message: CacheLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CacheLog;
  static deserializeBinaryFromReader(message: CacheLog, reader: jspb.BinaryReader): CacheLog;
}

export namespace CacheLog {
  export type AsObject = {
    user: string,
    ip: string,
    log: string,
  }
}

export enum ShellType { 
  ASPX = 0,
  JSP = 1,
  PHP = 2,
  JSPX = 3,
}
export enum CipherMode { 
  NULL = 0,
  AESBASE64 = 1,
  XORBASE64 = 2,
  BASE64 = 3,
}
export enum Schema { 
  HTTP = 0,
  SOCKS5 = 1,
}
export enum Payload { 
  PING = 0,
}
