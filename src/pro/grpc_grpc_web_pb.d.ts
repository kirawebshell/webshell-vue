import * as grpcWeb from 'grpc-web';

import * as grpc_pb from './grpc_pb'; // proto import: "grpc.proto"


export class WsmManagerClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createOrUpdateWebShell(
    request: grpc_pb.WebShell,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: grpc_pb.Response) => void
  ): grpcWeb.ClientReadableStream<grpc_pb.Response>;

  deleteWebShell(
    request: grpc_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: grpc_pb.Response) => void
  ): grpcWeb.ClientReadableStream<grpc_pb.Response>;

  selectWebShell(
    request: grpc_pb.QueryRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: grpc_pb.Response) => void
  ): grpcWeb.ClientReadableStream<grpc_pb.Response>;

  checkAlive(
    request: grpc_pb.QueryRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: grpc_pb.Response) => void
  ): grpcWeb.ClientReadableStream<grpc_pb.Response>;

  requestUrl(
    request: grpc_pb.WebRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: grpc_pb.WebResponse) => void
  ): grpcWeb.ClientReadableStream<grpc_pb.WebResponse>;

  updateGlobal(
    request: grpc_pb.GlobalConfig,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: grpc_pb.Response) => void
  ): grpcWeb.ClientReadableStream<grpc_pb.Response>;

}

export class WsmManagerPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createOrUpdateWebShell(
    request: grpc_pb.WebShell,
    metadata?: grpcWeb.Metadata
  ): Promise<grpc_pb.Response>;

  deleteWebShell(
    request: grpc_pb.EmptyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<grpc_pb.Response>;

  selectWebShell(
    request: grpc_pb.QueryRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<grpc_pb.Response>;

  checkAlive(
    request: grpc_pb.QueryRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<grpc_pb.Response>;

  requestUrl(
    request: grpc_pb.WebRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<grpc_pb.WebResponse>;

  updateGlobal(
    request: grpc_pb.GlobalConfig,
    metadata?: grpcWeb.Metadata
  ): Promise<grpc_pb.Response>;

}

