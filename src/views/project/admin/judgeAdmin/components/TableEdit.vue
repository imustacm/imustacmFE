<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogFormVisible"
    width="500px"
    @close="close"
  >
    <el-form
      ref="formInter"
      :model="formInter"
      :rules="rules"
      label-width="80px"
    >
      <el-form-item label="服务名称" prop="serviceName">
        <el-input
          v-model.trim="formInter.serviceName"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="接口地址" prop="interfaceUrl">
        <el-input
          v-model.trim="formInter.interfaceUrl"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="中文描述" prop="description">
        <el-input
          v-model.trim="formInter.description"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="启用状态" prop="visible">
        <el-radio-group v-model.trim="formInter.visible">
          <el-radio :label="true">启用</el-radio>
          <el-radio :label="false">关闭</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="save">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import { doEdit } from '@/api/interface'
  import Event from '@/assets/js/inter.js'

  export default {
    name: 'TableEdit',
    data() {
      return {
        formInter: {
          serviceName: '',
          interfaceUrl: '',
          description: '',
          visible: true,
        },
        rules: {
          serviceName: [
            { required: true, trigger: 'blur', message: '请输入服务名称' },
          ],
          interfaceUrl: [
            { required: true, trigger: 'blur', message: '请输入接口地址' },
          ],
          description: [{ required: false }],
          visible: [{ required: true }],
        },
        title: '',
        dialogFormVisible: false,
      }
    },
    created() {},
    methods: {
      showEdit(row) {
        if (!row) {
          this.title = '新增'
        } else {
          this.title = '编辑'
          this.formInter = Object.assign({}, row)
        }
        this.dialogFormVisible = true
      },
      close() {
        this.$refs['formInter'].resetFields()
        this.formInter = this.$options.data().formInter
        this.dialogFormVisible = false
        Event.$emit('fetch-data')
      },
      save() {
        this.$refs['formInter'].validate(async (valid) => {
          if (valid) {
            const { msg } = await doEdit(this.formInter)
            this.$baseMessage(msg, 'success')
            this.close()
          } else {
            return false
          }
        })
      },
    },
  }
</script>
