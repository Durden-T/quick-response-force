// 测试 extractTagsFromInput 功能
import { extractAllTags } from './utils/tagProcessor.js';

console.log('测试 extractAllTags 函数...');

// 测试用例1：提取单个标签
const testText1 = '这是<正文>一些内容</正文>和<正文>更多内容</正文>';
console.log('测试用例1:', testText1);
const result1 = extractAllTags(testText1, '正文');
console.log('结果:', result1);
console.log('预期: ["一些内容", "更多内容"]');
console.log('通过:', JSON.stringify(result1) === JSON.stringify(["一些内容", "更多内容"]));

// 测试用例2：提取不存在的标签
const testText2 = '这是<think>一些思考</think>';
console.log('\n测试用例2:', testText2);
const result2 = extractAllTags(testText2, '正文');
console.log('结果:', result2);
console.log('预期: []');
console.log('通过:', JSON.stringify(result2) === JSON.stringify([]));

// 测试用例3：混合标签
const testText3 = '<think>思考内容</think><正文>正文内容</正文><think>更多思考</think>';
console.log('\n测试用例3:', testText3);
const result3 = extractAllTags(testText3, 'think');
console.log('结果:', result3);
console.log('预期: ["思考内容", "更多思考"]');
console.log('通过:', JSON.stringify(result3) === JSON.stringify(["思考内容", "更多思考"]));

// 测试用例4：空文本
const testText4 = '';
console.log('\n测试用例4: 空文本');
const result4 = extractAllTags(testText4, '正文');
console.log('结果:', result4);
console.log('预期: []');
console.log('通过:', JSON.stringify(result4) === JSON.stringify([]));

console.log('\n所有测试完成！');