<template>
  <div class="dorm-repair-page">
    <header class="header">
      <div class="logo">
        <i class="fa-solid fa-screwdriver-wrench"></i>
        <span>宿舍报修</span>
      </div>

      <nav class="navbar">
        <a href="#" @click.prevent="goHomeLife">返回生活服务</a>
      </nav>
    </header>

    <main class="repair-container">
      <h2>填写报修信息</h2>

      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label>宿舍号</label>
          <input v-model="form.dorm" required />
        </div>

        <div class="form-group">
          <label>联系方式</label>
          <input v-model="form.phone" required />
        </div>

        <div class="form-group">
          <label>报修内容</label>
          <textarea v-model="form.content" required />
        </div>

        <button type="submit">提交报修</button>
      </form>
    </main>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = reactive({
  dorm: '',
  phone: '',
  content: ''
})

const goHomeLife = () => {
  router.push({ path: '/', hash: '#life' })
}

const submitForm = () => {
  console.log('提交报修：', form)
  alert('报修提交成功！')
  
  // 清空表单
  form.dorm = ''
  form.phone = ''
  form.content = ''
}
</script>

<style scoped>
@import "@/assets/css/dorm-repair.css";
</style>
