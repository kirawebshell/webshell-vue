<template>
  <el-container style="height: 100vh; border: 1px solid #ddd;">
    <!-- 上部区域，固定 20% -->
    <el-header style="height: 10%; border-bottom: 1px solid #ddd;">
      <div style="margin-bottom: 20px">
        <el-button size="small">
          add tab
        </el-button>
      <!-- </div>
      <div class="mb-4"> -->
        <div>
    <button @click="createWebShell">Create Web Shell</button>
    <div v-if="response">
      <pre>{{ response }}</pre>
    </div>
  </div>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
      </div>
    </el-header>

    <!-- 中部区域，固定 40% -->
    <el-main ref="main" style="height: 50%; border-bottom: 1px solid #ddd; overflow: hidden; padding: 10px;">
      <div>
       <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%" stripe>
      <!-- 表头 -->
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="age" label="年龄" width="180"></el-table-column>
      <el-table-column prop="address" label="地址" width="180"></el-table-column>
      <el-table-column prop="phone" label="电话" width="180"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="180"></el-table-column>
      <el-table-column prop="company" label="公司" width="180"></el-table-column>
      <el-table-column prop="position" label="职位" width="180"></el-table-column>
      <el-table-column prop="department" label="部门" width="180"></el-table-column>
      <el-table-column prop="hobby" label="爱好" width="180"></el-table-column>
      <el-table-column prop="city" label="城市" width="180"></el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      :current-page="currentPage"
      :page-size="pageSize"
      :total="totalData"
      layout="total, prev, pager, next"
      @current-change="handlePageChange"
    ></el-pagination>
  </div>
    </el-main>

    <!-- 下部区域，固定 40% -->
    <el-footer ref="footer" style="height: 40%; border-top: 1px solid #ddd; padding: 10px;">
      
    </el-footer>
  </el-container>
</template>

<script>
import grpcClient from '@/service/client.js';
import { WebShell, EmptyRequest } from '@/proto/grpc_pb.js';

export default {
  name: 'ResizableLayout',
  data() {
    return {
      tabIndex: 2,
      editableTabsValue: '2',
      editableTabs: [
        {
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content',
        },
        {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content',
        },
      ],
       // 表格数据
       tableData: [],
      // 当前页数
      currentPage: 1,
      // 每页显示的行数
      pageSize: 10,
      // 总数据量（假设是100条）
      totalData: 100
    };
  },
  methods: {
    
    loadTableData() {
      const data = [];
      // 填充10行10列的示例数据
      for (let i = 0; i < 10; i++) {
        data.push({
          name: `姓名${i + 1}`,
          age: 20 + i,
          address: `地址${i + 1}`,
          phone: `1234567890${i}`,
          email: `user${i + 1}@example.com`,
          company: `公司${i + 1}`,
          position: `职位${i + 1}`,
          department: `部门${i + 1}`,
          hobby: `爱好${i + 1}`,
          city: `城市${i + 1}`
        });
      }
      this.tableData = data;
    },
    // 页码改变时的处理方法
    handlePageChange(page) {
      this.currentPage = page;
      this.loadTableData();
    },
    async createWebShell() {
      try {
        const webShell = new WebShell();
        webShell.setId(123);
        webShell.setUrl('http://example.com');
        webShell.setPassword('yourpassword');
        
        // 调用 grpcClient 的方法
        this.response = await grpcClient.createOrUpdateWebShell(webShell);
        console.log('WebShell created:', this.response);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }
};
</script>

<style scoped>
/* 边框样式 */
.el-container {
  border: 1px solid #ddd;
  border-radius: 8px;
}

.el-header,
.el-footer {
  padding: 10px;
}

/* Tab 样式 */
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.tab-content {
  padding: 10px;
  height: 100%;
  overflow-y: auto;
}
</style>
