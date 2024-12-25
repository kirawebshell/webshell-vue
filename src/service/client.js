// src/grpc/client.js
import { WsmManagerClient, WsmManagerPromiseClient } from '../proto/grpc_grpc_web_pb.js';
import { webShell, emptyRequest, queryRequest, response } from '../proto/grpc_pb.js';

// 设置gRPC Web客户端地址
const SERVER_URL = '/api';  // 修改为您的服务端地址

class GrpcClient {
  constructor() {
    // 创建同步和Promise版本的客户端
    this.client = new WsmManagerClient(SERVER_URL, null, null);
    this.promiseClient = new WsmManagerPromiseClient(SERVER_URL);
  }

  // 公用方法：发送请求并返回 Promise
  _request(methodName, requestObj) {
    return new Promise((resolve, reject) => {
      this.client[methodName](requestObj, null, (error, response) => {
        if (error) {
          console.error(`Error calling ${methodName}:`, error);  // 错误日志
          reject(error);
        } else {
          console.log(`${methodName} response:`, response);  // 响应日志
          resolve(response);
        }
      });
    });
  }

  // 创建或更新WebShell
  createOrUpdateWebShell(webShell) {
    return this._request('createOrUpdateWebShell', webShell)
      .then(response => {
        console.log('WebShell updated:', response);
        return response;
      })
      .catch(error => {
        console.error('Failed to create or update WebShell:', error);
        throw error;  // 继续抛出错误，或者在这里处理
      });
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
