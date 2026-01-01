<template>
  <div class="container">
    <div class="page-header">
      <div class="breadcrumb">
        <router-link to="/">首页</router-link>
        <span class="separator">/</span>
        <router-link to="/life">生活服务</router-link>
        <span class="separator">/</span>
        <span class="current">校园卡充值</span>
      </div>
      <h1 class="page-title">校园卡充值</h1>
      <p class="page-description">为您的校园卡在线充值，支持多种支付方式，即时到账</p>
    </div>

    <div class="card-recharge-container">
      <!-- 左侧信息 -->
      <div class="card-info-section">
        <div class="card-info">
          <div class="card-header">
            <h2>校园卡信息</h2>
          </div>

          <div class="card-content">
            <div class="card-balance">
              <div class="balance-label">当前余额</div>
              <div class="balance-amount">
                ¥<span id="currentBalance">{{ currentBalance.toFixed(2) }}</span>
              </div>
            </div>

            <div class="card-details">
              <div class="detail-item">
                <span class="detail-label">卡号：</span>
                <span class="detail-value" id="cardNumber">**** **** **** 3456</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">持卡人：</span>
                <span class="detail-value" id="cardHolder">张三</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">状态：</span>
                <span class="detail-value status-active">正常</span>
              </div>
            </div>
          </div>
        </div>

        <div class="recharge-tips">
          <div class="tips-header">
            <i class="fas fa-lightbulb"></i>
            <h3>充值提示</h3>
          </div>
          <div class="tips-content">
            <ul>
              <li>单次充值金额最低为10元，最高为500元</li>
              <li>充值金额将在1-3分钟内到账</li>
              <li>如遇充值失败，款项将在24小时内原路退回</li>
              <li>校园卡每日累计充值上限为1000元</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 右侧表单 -->
      <div class="recharge-form-section">
        <div class="recharge-form-container">
          <h2>充值信息</h2>

          <form class="recharge-form" @submit.prevent="handleSubmit">
            <!-- 学号 -->
            <div class="form-group">
              <label for="studentId">学号 <span class="required">*</span></label>
              <input
                id="studentId"
                type="text"
                v-model.trim="form.studentId"
                placeholder="请输入您的学号"
                @focus="clearError('studentId')"
              />
              <div class="error-message" id="studentIdError" v-if="errors.studentId">
                {{ errors.studentId }}
              </div>
            </div>

            <!-- 金额 -->
            <div class="form-group">
              <label>充值金额 <span class="required">*</span></label>

              <div class="amount-options">
                <div
                  v-for="a in presetAmounts"
                  :key="a"
                  class="amount-option"
                  :class="{ active: isPresetActive(a) }"
                  :data-amount="a"
                  @click="choosePresetAmount(a)"
                >
                  ¥{{ a }}
                </div>
              </div>

              <div class="custom-amount">
                <input
                  type="number"
                  id="rechargeAmount"
                  name="rechargeAmount"
                  placeholder="自定义金额"
                  min="10"
                  max="500"
                  v-model.number="form.amount"
                  @input="onCustomAmountInput"
                  @focus="clearError('amount')"
                />
                <span class="amount-unit">元</span>
              </div>

              <div class="error-message" id="rechargeAmountError" v-if="errors.amount">
                {{ errors.amount }}
              </div>
            </div>

            <!-- 支付方式 -->
            <div class="form-group">
              <label>支付方式 <span class="required">*</span></label>

              <div class="payment-methods">
                <div
                  v-for="m in paymentMethods"
                  :key="m.id"
                  class="payment-option"
                  :class="{ selected: form.paymentMethod === m.id }"
                  :data-method="m.id"
                  @click="choosePayment(m.id)"
                >
                  <div class="payment-icon" :class="m.iconClass">
                    <i :class="m.icon"></i>
                  </div>

                  <div class="payment-info">
                    <div class="payment-name">{{ m.name }}</div>
                    <div class="payment-desc">{{ m.desc }}</div>
                  </div>

                  <div class="payment-radio">
                    <!-- ✅ v-model 绑定后，小圆点会跟着亮 -->
                    <input
                      type="radio"
                      name="paymentMethod"
                      :value="m.id"
                      v-model="form.paymentMethod"
                      @change="clearError('paymentMethod')"
                    />
                    <span class="radio-custom"></span>
                  </div>
                </div>
              </div>

              <div class="error-message" id="paymentMethodError" v-if="errors.paymentMethod">
                {{ errors.paymentMethod }}
              </div>
            </div>

            <!-- 汇总 -->
            <div class="recharge-summary">
              <div class="summary-item">
                <span class="summary-label">充值金额：</span>
                <span class="summary-value">¥<span id="summaryAmount">{{ displayAmount.toFixed(2) }}</span></span>
              </div>

              <div class="summary-item">
                <span class="summary-label">支付方式：</span>
                <span class="summary-value" id="summaryPayment">{{ paymentLabel }}</span>
              </div>

              <div class="summary-total">
                <span class="total-label">应付金额：</span>
                <span class="total-value">¥<span id="totalAmount">{{ displayAmount.toFixed(2) }}</span></span>
              </div>
            </div>

            <div class="form-actions">
              <button type="submit" class="btn btn-primary" id="rechargeBtn" :disabled="submitting">
                <i class="fas fa-credit-card"></i>
                {{ submitting ? "处理中..." : "立即充值" }}
              </button>
              <button type="button" class="btn btn-secondary" @click="resetForm">
                <i class="fas fa-redo"></i> 重置
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- 最近记录 -->
    <div class="recharge-history">
      <h2>最近充值记录</h2>
      <div class="history-table">
        <table>
          <thead>
            <tr>
              <th>交易时间</th>
              <th>充值金额</th>
              <th>支付方式</th>
              <th>交易状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(r, idx) in history" :key="idx">
              <td>{{ r.time }}</td>
              <td>¥{{ r.amount.toFixed(2) }}</td>
              <td>{{ r.methodName }}</td>
              <td class="status-success">成功</td>
              <!-- 不做跳转：看起来也不要太像可点 -->
              <td><span class="detail-link disabled-link">查看详情</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- ✅ 居中弹窗（不会跑到页面底部） -->
    <div v-if="dialog.open" class="nk-modal-overlay" @click.self="closeDialog">
      <div class="nk-modal">
        <div class="nk-modal-header">
          <h3 class="nk-modal-title">{{ dialog.title }}</h3>
          <button class="nk-modal-close" type="button" @click="closeDialog">×</button>
        </div>

        <div class="nk-modal-body">
          <p>{{ dialog.message }}</p>
          <div v-if="dialog.type === 'success'" class="nk-modal-summary">
            <p>学号：{{ form.studentId }}</p>
            <p>金额：¥{{ displayAmount.toFixed(2) }}</p>
            <p>支付方式：{{ paymentLabel }}</p>
          </div>
        </div>

        <div class="nk-modal-footer">
          <button class="nk-modal-btn" type="button" @click="closeDialog">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref, watch } from "vue";

const currentBalance = ref(58.5);
const submitting = ref(false);

const presetAmounts = [10, 20, 50, 100, 200, 500];

const paymentMethods = [
  {
    id: "alipay",
    name: "支付宝",
    desc: "推荐使用，支付便捷",
    icon: "fab fa-alipay",
    iconClass: "alipay-icon",
  },
  {
    id: "wechat",
    name: "微信支付",
    desc: "安全快捷，支持扫码",
    icon: "fab fa-weixin",
    iconClass: "wechat-icon",
  },
  {
    id: "unionpay",
    name: "银联支付",
    desc: "支持各大银行卡",
    icon: "fas fa-credit-card",
    iconClass: "unionpay-icon",
  },
];

const form = reactive({
  studentId: "",
  amount: 0,
  paymentMethod: "",
  // 用于判断是否“选中了预设金额”
  presetSelected: null, // number | null
});

const errors = reactive({
  studentId: "",
  amount: "",
  paymentMethod: "",
});

const dialog = reactive({
  open: false,
  type: "success", // success / error
  title: "",
  message: "",
});

const history = ref([
  { time: "2024-12-18 14:32:15", amount: 100, methodName: "支付宝" },
  { time: "2024-12-15 09:18:42", amount: 50, methodName: "微信支付" },
  { time: "2024-12-10 16:45:28", amount: 20, methodName: "银联支付" },
]);

const displayAmount = computed(() => {
  const n = Number(form.amount || 0);
  return Number.isFinite(n) ? n : 0;
});

const paymentLabel = computed(() => {
  const m = paymentMethods.find((x) => x.id === form.paymentMethod);
  return m ? m.name : "未选择";
});

function clearError(field) {
  errors[field] = "";
}

function isPresetActive(a) {
  return form.presetSelected === a;
}

function choosePresetAmount(a) {
  form.amount = a;
  form.presetSelected = a;
  clearError("amount");
}

function onCustomAmountInput() {
  // 自定义输入后，不再高亮任何预设
  form.presetSelected = null;
  clearError("amount");
}

function choosePayment(id) {
  form.paymentMethod = id;
  clearError("paymentMethod");
}

function validate() {
  let ok = true;

  if (!form.studentId) {
    errors.studentId = "学号不能为空";
    ok = false;
  }

  if (!displayAmount.value || displayAmount.value < 10 || displayAmount.value > 500) {
    errors.amount = "充值金额需在 10 ~ 500 元之间";
    ok = false;
  }

  if (!form.paymentMethod) {
    errors.paymentMethod = "请选择支付方式";
    ok = false;
  }

  return ok;
}

function openDialog(type, title, message) {
  dialog.type = type;
  dialog.title = title;
  dialog.message = message;
  dialog.open = true;
}

function closeDialog() {
  dialog.open = false;
}

function formatNow() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(
    d.getMinutes()
  )}:${pad(d.getSeconds())}`;
}

async function handleSubmit() {
  if (!validate()) return;

  submitting.value = true;

  // 模拟请求延迟
  setTimeout(() => {
    // 余额 + 记录
    currentBalance.value += displayAmount.value;
    history.value.unshift({
      time: formatNow(),
      amount: displayAmount.value,
      methodName: paymentLabel.value,
    });

    openDialog("success", "充值提交成功", "您的充值申请已提交");

    submitting.value = false;
  }, 500);
}

function resetForm() {
  form.studentId = "";
  form.amount = 0;
  form.paymentMethod = "";
  form.presetSelected = null;

  errors.studentId = "";
  errors.amount = "";
  errors.paymentMethod = "";
}

/** 弹窗打开时禁止页面滚动（关闭恢复） */
watch(
  () => dialog.open,
  (v) => {
    document.body.style.overflow = v ? "hidden" : "";
    document.documentElement.style.overflow = v ? "hidden" : "";
  }
);
</script>

<!-- 你原来的样式文件继续用 -->
<style src="@/assets/css/cardrecharge.css"></style>

<!-- ✅ 弹窗专用样式：不要 scoped，避免被覆盖/失效 -->
<style>
/* 让“查看详情”看起来不可点 */
.disabled-link {
  color: #999;
  cursor: default;
  user-select: none;
}

/* ✅ 防冲突的弹窗样式：固定在屏幕中央 */
.nk-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.nk-modal {
  width: min(520px, 92vw);
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
}

.nk-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  border-bottom: 1px solid #eee;
}

.nk-modal-title {
  margin: 0;
  font-size: 16px;
}

.nk-modal-close {
  border: none;
  background: transparent;
  font-size: 22px;
  cursor: pointer;
  line-height: 1;
}

.nk-modal-body {
  padding: 16px;
  font-size: 14px;
  line-height: 1.6;
}

.nk-modal-summary {
  margin-top: 12px;
  padding: 12px;
  background: #f7f7f7;
  border-radius: 8px;
}

.nk-modal-footer {
  padding: 12px 16px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: flex-end;
}

.nk-modal-btn {
  padding: 8px 18px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

/* ✅ 金额/支付方式选中态（如果你的 cardrecharge.css 里没有） */
.amount-option.active {
  outline: 2px solid #8b0000;
  border-radius: 6px;
}

.payment-option.selected {
  outline: 2px solid #8b0000;
  border-radius: 10px;
}
</style>
