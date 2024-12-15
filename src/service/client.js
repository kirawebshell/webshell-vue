// src/grpc/client.js
import { WsmManagerClient, WsmManagerPromiseClient } from '../proto/grpc_grpc_web_pb.js';
import { webShell, emptyRequest, queryRequest, response } from '../proto/grpc_pb.js';

// 设置gRPC Web客户端地址
const SERVER_URL = 'http://localhost:8081/api';  // 修改为您的服务端地址

class GrpcClient {
  constructor() {
    // 创建同步和Promise版本的客户端
    this.client = new WsmManagerClient(SERVER_URL);
    this.promiseClient = new WsmManagerPromiseClient(SERVER_URL);
  }

  // 公用方法：发送请求并返回 Promise
  _request(methodName, requestObj) {
    return new Promise((resolve, reject) => {
      this.client[methodName](requestObj, null, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  // 创建或更新WebShell
  createOrUpdateWebShell(webShell) {
    return this._request('createOrUpdateWebShell', webShell);
  }

  // 删除WebShell
  deleteWebShell(emptyRequest) {
    return this._request('deleteWebShell', emptyRequest);
  }

  // 查询WebShell
  selectWebShell(queryRequest) {
    return this._request('selectWebShell', queryRequest);
  }

  // 检查WebShell是否存活
  checkAlive(queryRequest) {
    return this._request('checkAlive', queryRequest);
  }

  // 请求URL
  requestUrl(webRequest) {
    return this._request('requestUrl', webRequest);
  }

  // 更新全局配置
  updateGlobal(globalConfig) {
    return this._request('updateGlobal', globalConfig);
  }
}

// 导出客户端实例
const grpcClient = new GrpcClient();
export default grpcClient;