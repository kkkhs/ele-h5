<script setup lang="ts">
import { ref } from 'vue'
import type { ILoginInfo } from '@/types'
import { useAuth } from '@/use/useAuth'
const username = ref('')
const password = ref('')
const onClickLeft = () => history.back() //回到上一个页面
const { login } = useAuth()

const onSubmit = async (data: ILoginInfo) => {
  await login(data)
  onClickLeft()
}
</script>

<template>
  <div class="login-page on-fullscreen">
    <VanNavBar title="请登录" left-text="返回" left-arrow @click="onClickLeft"></VanNavBar>
    <VanForm class="login-page__form" @submit="onSubmit">
      <VanCellGroup inset>
        <VanField
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <VanField
          v-model="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </VanCellGroup>
      <div style="margin: 16px">
        <VanButton round block type="primary" native-type="submit">登陆</VanButton>
      </div>
    </VanForm>
  </div>
</template>

<style lang="scss" scoped>
.login-page {
  .login-page__form {
    margin-top: 100px;
  }
}
</style>
