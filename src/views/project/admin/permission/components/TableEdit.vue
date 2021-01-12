<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogFormVisible"
    width="500px"
    @close="close"
  >
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="权限键名" prop="permission_name">
        <el-input
          v-model.trim="form.permission_name"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="中文描述" prop="description">
        <el-input v-model.trim="form.description" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="启用状态" prop="visible">
        <el-radio v-model.trim="form.visible" label="true">启用</el-radio>
        <el-radio v-model.trim="form.visible" label="false">关闭</el-radio>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="save">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import { doEdit } from '@/api/table'

  export default {
    name: 'TableEdit',
    data() {
      return {
        form: {
          permission_name: '',
          description: '',
          visible: 'true',
        },
        rules: {
          permission_name: [
            { required: true, trigger: 'blur', message: '请输入权限键名' },
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
          this.form = Object.assign({}, row)
        }
        this.dialogFormVisible = true
      },
      close() {
        this.$refs['form'].resetFields()
        this.form = this.$options.data().form
        this.dialogFormVisible = false
        this.$emit('fetch-data')
      },
      save() {
        this.$refs['form'].validate(async (valid) => {
          if (valid) {
            const { msg } = await doEdit(this.form)
            this.$baseMessage(msg, 'success')
            this.$refs['form'].resetFields()
            this.dialogFormVisible = false
            this.$emit('fetch-data')
            this.form = this.$options.data().form
          } else {
            return false
          }
        })
      },
    },
  }
</script>
