/**
 * 草稿检查脚本
 * 用于诊断草稿文章是否被正确过滤
 */

import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

console.log('🔍 检查草稿文章状态...\n');

// 检查源文件
console.log('📁 源文件（src/contents/posts/）：');
console.log('─'.repeat(60));

const postsDir = './src/contents/posts';
const posts = readdirSync(postsDir).filter(f => f.endsWith('.md'));

posts.forEach(file => {
  const content = readFileSync(join(postsDir, file), 'utf-8');
  const draftMatch = content.match(/^draft:\s*(true|false)/m);
  const titleMatch = content.match(/^title:\s*(.+)/m);
  
  const isDraft = draftMatch ? draftMatch[1] === 'true' : false;
  const title = titleMatch ? titleMatch[1] : file;
  
  const status = isDraft ? '📝 草稿' : '✅ 已发布';
  const color = isDraft ? '\x1b[33m' : '\x1b[32m';
  const reset = '\x1b[0m';
  
  console.log(`${color}${status}${reset} ${title.trim()}`);
  console.log(`   文件: ${file}`);
  console.log(`   draft: ${isDraft ? 'true' : 'false'}`);
  console.log();
});

// 检查构建结果
console.log('\n📦 构建结果（dist/posts/）：');
console.log('─'.repeat(60));

try {
  const distPostsDir = './dist/posts';
  const builtPosts = readdirSync(distPostsDir);
  
  console.log(`✅ 共生成 ${builtPosts.length} 篇文章：`);
  builtPosts.forEach(dir => {
    console.log(`   - ${dir}`);
  });
  
  console.log();
  
  // 统计
  const draftCount = posts.filter(file => {
    const content = readFileSync(join(postsDir, file), 'utf-8');
    const draftMatch = content.match(/^draft:\s*true/m);
    return draftMatch;
  }).length;
  
  const publishedCount = posts.length - draftCount;
  
  console.log('\n📊 统计：');
  console.log('─'.repeat(60));
  console.log(`总文章数: ${posts.length}`);
  console.log(`草稿文章: ${draftCount}`);
  console.log(`已发布文章: ${publishedCount}`);
  console.log(`构建生成: ${builtPosts.length}`);
  
  if (builtPosts.length === publishedCount) {
    console.log('\n✅ 草稿过滤正常！构建结果与已发布文章数一致。');
  } else {
    console.log('\n⚠️  警告：构建结果与已发布文章数不一致！');
    console.log(`   预期: ${publishedCount} 篇`);
    console.log(`   实际: ${builtPosts.length} 篇`);
  }
  
} catch (error) {
  console.log('⚠️  dist/posts/ 目录不存在');
  console.log('   请先运行: pnpm build');
}

console.log('\n' + '─'.repeat(60));
console.log('💡 提示：');
console.log('   - 开发环境（pnpm dev）会显示所有文章（包括草稿）');
console.log('   - 生产环境（pnpm build）只会生成已发布文章');
console.log('   - 如果线上仍显示草稿，请清除浏览器缓存或重新部署');
console.log('─'.repeat(60));

