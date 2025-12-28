<template>
    <div class="container">
            <div class="page-header">
                <div class="breadcrumb">
                    <a href="index.html">首页</a>
                    <span class="separator">/</span>
                    <a href="#" id="lifeServiceLink2">生活服务</a>
                    <span class="separator">/</span>
                    <span class="current">校园卡充值</span>
                </div>
                <h1 class="page-title">校园卡充值</h1>
                <p class="page-description">为您的校园卡在线充值，支持多种支付方式，即时到账</p>
            </div>

            <div class="card-recharge-container">
                <div class="card-info-section">
                    <div class="card-info">
                        <div class="card-header">
                            <h2>校园卡信息</h2>
                        </div>
                        <div class="card-content">
                            <div class="card-balance">
                                <div class="balance-label">当前余额</div>
                                <div class="balance-amount">¥<span id="currentBalance">58.50</span></div>
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

                <div class="recharge-form-section">
                    <div class="recharge-form-container">
                        <h2>充值信息</h2>
                        <form id="rechargeForm" class="recharge-form">
                            <div class="form-group">
                                <label for="studentId">学号 <span class="required">*</span></label>
                                <input type="text" id="studentId" name="studentId" placeholder="请输入您的学号" required>
                                <div class="error-message" id="studentIdError"></div>
                            </div>

                            <div class="form-group">
                                <label for="rechargeAmount">充值金额 <span class="required">*</span></label>
                                <div class="amount-options">
                                    <div class="amount-option" data-amount="10">¥10</div>
                                    <div class="amount-option" data-amount="20">¥20</div>
                                    <div class="amount-option" data-amount="50">¥50</div>
                                    <div class="amount-option" data-amount="100">¥100</div>
                                    <div class="amount-option" data-amount="200">¥200</div>
                                    <div class="amount-option" data-amount="500">¥500</div>
                                </div>
                                <div class="custom-amount">
                                    <input type="number" id="rechargeAmount" name="rechargeAmount" placeholder="自定义金额" min="10" max="500">
                                    <span class="amount-unit">元</span>
                                </div>
                                <div class="error-message" id="rechargeAmountError"></div>
                            </div>

                            <div class="form-group">
                                <label>支付方式 <span class="required">*</span></label>
                                <div class="payment-methods">
                                    <div class="payment-option" data-method="alipay">
                                        <div class="payment-icon alipay-icon">
                                            <i class="fab fa-alipay"></i>
                                        </div>
                                        <div class="payment-info">
                                            <div class="payment-name">支付宝</div>
                                            <div class="payment-desc">推荐使用，支付便捷</div>
                                        </div>
                                        <div class="payment-radio">
                                            <input type="radio" name="paymentMethod" value="alipay" id="alipay">
                                            <span class="radio-custom"></span>
                                        </div>
                                    </div>
                                    <div class="payment-option" data-method="wechat">
                                        <div class="payment-icon wechat-icon">
                                            <i class="fab fa-weixin"></i>
                                        </div>
                                        <div class="payment-info">
                                            <div class="payment-name">微信支付</div>
                                            <div class="payment-desc">安全快捷，支持扫码</div>
                                        </div>
                                        <div class="payment-radio">
                                            <input type="radio" name="paymentMethod" value="wechat" id="wechat">
                                            <span class="radio-custom"></span>
                                        </div>
                                    </div>
                                    <div class="payment-option" data-method="unionpay">
                                        <div class="payment-icon unionpay-icon">
                                            <i class="fas fa-credit-card"></i>
                                        </div>
                                        <div class="payment-info">
                                            <div class="payment-name">银联支付</div>
                                            <div class="payment-desc">支持各大银行卡</div>
                                        </div>
                                        <div class="payment-radio">
                                            <input type="radio" name="paymentMethod" value="unionpay" id="unionpay">
                                            <span class="radio-custom"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="error-message" id="paymentMethodError"></div>
                            </div>

                            <div class="recharge-summary">
                                <div class="summary-item">
                                    <span class="summary-label">充值金额：</span>
                                    <span class="summary-value">¥<span id="summaryAmount">0.00</span></span>
                                </div>
                                <div class="summary-item">
                                    <span class="summary-label">支付方式：</span>
                                    <span class="summary-value" id="summaryPayment">未选择</span>
                                </div>
                                <div class="summary-total">
                                    <span class="total-label">应付金额：</span>
                                    <span class="total-value">¥<span id="totalAmount">0.00</span></span>
                                </div>
                            </div>

                            <div class="form-actions">
                                <button type="submit" class="btn btn-primary" id="rechargeBtn">
                                    <i class="fas fa-credit-card"></i> 立即充值
                                </button>
                                <button type="reset" class="btn btn-secondary">
                                    <i class="fas fa-redo"></i> 重置
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

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
                            <tr>
                                <td>2024-12-18 14:32:15</td>
                                <td>¥100.00</td>
                                <td>支付宝</td>
                                <td class="status-success">成功</td>
                                <td><a href="#" class="detail-link">查看详情</a></td>
                            </tr>
                            <tr>
                                <td>2024-12-15 09:18:42</td>
                                <td>¥50.00</td>
                                <td>微信支付</td>
                                <td class="status-success">成功</td>
                                <td><a href="#" class="detail-link">查看详情</a></td>
                            </tr>
                            <tr>
                                <td>2024-12-10 16:45:28</td>
                                <td>¥20.00</td>
                                <td>银联支付</td>
                                <td class="status-success">成功</td>
                                <td><a href="#" class="detail-link">查看详情</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    
  
</template>

<script setup>
import { reactive, ref } from 'vue';

const currentBalance = ref(125.50);
const formData = reactive({ studentId: '', amount: 100, payType: 'alipay' });
const errors = reactive({ studentId: '' });

const paymentMethods = [
  { id: 'alipay', name: '支付宝', icon: 'fab fa-alipay' },
  { id: 'wechat', name: '微信支付', icon: 'fab fa-weixin' },
  { id: 'unionpay', name: '云闪付', icon: 'fas fa-credit-card' }
];

const history = reactive([
  { time: '2023-10-25 14:20:15', id: 'RECH202310250012', amount: 100, methodName: '支付宝' },
  { time: '2023-09-12 09:15:32', id: 'RECH202309120045', amount: 50, methodName: '微信支付' }
]);

const handleRechargeSubmit = () => {
  if (!formData.studentId) {
    errors.studentId = '请输入学号';
    return;
  }
  errors.studentId = '';
  alert(`模拟充值提交：学号 ${formData.studentId}，金额 ¥${formData.amount}`);
};
</script>

<style src="@/assets/css/cardrecharge.css"></style>