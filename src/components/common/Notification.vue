<template>
  <div v-if="show" class="notification" :class="type">
    <div class="notification-content">
      <i class="notification-icon" :class="iconClass"></i>
      <span class="notification-message">{{ message }}</span>
      <button class="notification-close" @click="close">
        <i class="fas fa-times"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    type: {
      type: String,
      default: 'info',
      validator: value => ['success', 'error', 'warning', 'info'].includes(value)
    },
    message: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      default: 5000
    }
  },
  data() {
    return {
      show: true,
      timer: null
    }
  },
  computed: {
    iconClass() {
      const iconMap = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        warning: 'fas fa-exclamation-triangle',
        info: 'fas fa-info-circle'
      }
      return iconMap[this.type]
    }
  },
  mounted() {
    this.timer = setTimeout(() => {
      this.close()
    }, this.duration)
  },
  beforeUnmount() {
    if (this.timer) {
      clearTimeout(this.timer)
    }
  },
  methods: {
    close() {
      this.show = false
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  min-width: 300px;
  max-width: 500px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  animation: slideIn 0.3s ease-out;
}

.notification.success {
  background-color: #4caf50;
  color: white;
}

.notification.error {
  background-color: #f44336;
  color: white;
}

.notification.warning {
  background-color: #ff9800;
  color: white;
}

.notification.info {
  background-color: #2196f3;
  color: white;
}

.notification-content {
  display: flex;
  align-items: center;
}

.notification-icon {
  margin-right: 12px;
  font-size: 20px;
}

.notification-message {
  flex: 1;
  font-size: 14px;
}

.notification-close {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  margin-left: 12px;
  font-size: 14px;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.notification-close:hover {
  opacity: 1;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>