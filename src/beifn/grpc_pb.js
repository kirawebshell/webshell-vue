/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.setOptions({
  syntax: "proto3",
  go_package: "/;pb"
})
.addJSON({
  ShellType: {
    values: {
      Aspx: 0,
      Jsp: 1,
      Php: 2,
      Jspx: 3
    }
  },
  CipherMode: {
    values: {
      Null: 0,
      AesBase64: 1,
      XorBase64: 2,
      Base64: 3
    }
  },
  Schema: {
    values: {
      Http: 0,
      Socks5: 1
    }
  },
  Payload: {
    values: {
      Ping: 0
    }
  },
  Proxy: {
    fields: {
      Schema: {
        type: "Schema",
        id: 1
      },
      User: {
        type: "string",
        id: 2
      },
      Pass: {
        type: "string",
        id: 3
      },
      address: {
        type: "string",
        id: 4
      }
    }
  },
  Config: {
    fields: {
      BlockSize: {
        type: "int64",
        id: 1
      },
      Proxy: {
        type: "Proxy",
        id: 2
      },
      Timeout: {
        type: "int64",
        id: 3
      },
      Retry: {
        type: "int64",
        id: 4
      },
      MaxSize: {
        type: "int64",
        id: 5
      },
      Headers: {
        keyType: "string",
        type: "string",
        id: 6
      },
      Cookies: {
        keyType: "string",
        type: "string",
        id: 7
      },
      Posts: {
        keyType: "string",
        type: "string",
        id: 8
      }
    }
  },
  WebShell: {
    fields: {
      Id: {
        type: "int64",
        id: 1
      },
      Config: {
        type: "Config",
        id: 2
      },
      Url: {
        type: "string",
        id: 3
      },
      Password: {
        type: "string",
        id: 4
      },
      ShellType: {
        type: "ShellType",
        id: 5
      },
      EncodeMode: {
        type: "CipherMode",
        id: 6
      },
      DecodeMode: {
        type: "CipherMode",
        id: 7
      },
      Tag: {
        type: "string",
        id: 8
      },
      Session: {
        type: "bool",
        id: 9
      },
      Os: {
        type: "string",
        id: 10
      },
      Charset: {
        type: "string",
        id: 11
      }
    }
  },
  Response: {
    fields: {
      Status: {
        type: "bool",
        id: 1
      },
      Msg: {
        type: "string",
        id: 2
      }
    }
  },
  Param: {
    fields: {
      Key: {
        type: "string",
        id: 1
      },
      Value: {
        type: "string",
        id: 2
      }
    }
  },
  WebUrl: {
    fields: {
      Schema: {
        type: "string",
        id: 1
      },
      Address: {
        type: "string",
        id: 2
      },
      User: {
        type: "string",
        id: 3
      },
      Pass: {
        type: "string",
        id: 4
      },
      Path: {
        type: "string",
        id: 5
      },
      Params: {
        rule: "repeated",
        type: "Param",
        id: 6
      }
    }
  },
  WebRequest: {
    fields: {
      Method: {
        type: "string",
        id: 1
      },
      WebUrl: {
        type: "WebUrl",
        id: 2
      },
      Cookies: {
        keyType: "string",
        type: "string",
        id: 3
      },
      Headers: {
        keyType: "string",
        type: "string",
        id: 4
      },
      Body: {
        type: "bytes",
        id: 5
      }
    }
  },
  EmptyRequest: {
    fields: {
      Id: {
        type: "int64",
        id: 1
      },
      Url: {
        type: "string",
        id: 2
      }
    }
  },
  QueryRequest: {
    fields: {
      Limit: {
        type: "int64",
        id: 1
      },
      Offset: {
        type: "int64",
        id: 2
      },
      Request: {
        type: "EmptyRequest",
        id: 3
      },
      Company: {
        type: "string",
        id: 4
      }
    }
  },
  WebResponse: {
    fields: {
      ResponseType: {
        type: "string",
        id: 1
      },
      Name: {
        type: "string",
        id: 2
      },
      Size: {
        type: "string",
        id: 3
      },
      Url: {
        type: "WebUrl",
        id: 4
      },
      ExtraData: {
        rule: "repeated",
        type: "Param",
        id: 5
      },
      Response: {
        type: "Response",
        id: 6
      }
    }
  },
  GlobalConfig: {
    fields: {
      Proxy: {
        type: "Proxy",
        id: 1
      },
      Timeout: {
        type: "int64",
        id: 2
      }
    }
  },
  Generate: {
    fields: {
      Type: {
        type: "ShellType",
        id: 1
      },
      CipherMode: {
        type: "CipherMode",
        id: 2
      },
      ConfusionMode: {
        type: "string",
        id: 3
      },
      Confusion: {
        type: "bool",
        id: 4
      }
    }
  },
  CacheLog: {
    fields: {
      User: {
        type: "string",
        id: 1
      },
      IP: {
        type: "string",
        id: 2
      },
      log: {
        type: "string",
        id: 3
      }
    }
  },
  WsmManager: {
    methods: {
      CreateOrUpdateWebShell: {
        requestType: "WebShell",
        responseType: "Response"
      },
      DeleteWebShell: {
        requestType: "EmptyRequest",
        responseType: "Response"
      },
      SelectWebShell: {
        requestType: "QueryRequest",
        responseType: "Response"
      },
      CheckAlive: {
        requestType: "QueryRequest",
        responseType: "Response"
      },
      RequestUrl: {
        requestType: "WebRequest",
        responseType: "WebResponse"
      },
      UpdateGlobal: {
        requestType: "GlobalConfig",
        responseType: "Response"
      }
    }
  }
});

module.exports = $root;
