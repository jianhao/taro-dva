import { get, post } from '@/utils/request'

// 查询所有合同列表
export const queryContractByOrderNo = params => get('cus/order/queryContractByOrderNo', params)

// 下载合同
export const sendEmailForOrderContracts = data => post('cus/order/sendEmailForOrderContracts', data)
