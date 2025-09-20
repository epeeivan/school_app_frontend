<script setup lang="ts">
import blog from '@/assets/datas/blog'
import BlogCard from '@/components/cards/BlogCard.vue'
</script>
<template>
  <div
    class="lg:px-[100px] 2xl:px-[8%] 3xl:px-[10%] px-5 lg:py-[50px] py-5 lg:space-y-[50px] space-y-5 lg:text-left text-center"
  >
    <div class="space-y-3">
      <h1 class="text-3xl lg:text-5xl font-bold">{{ $t('landing.home.blog.title') }}</h1>
      <span class="font-semibold text-neutral-500">{{ $t('landing.home.blog.description') }}</span>
    </div>
    <div class="space-y-5 grid lg:grid-cols-3 grid-cols-1 gap-5">
      <BlogCard
        v-for="(article, index) in blog"
        :key="`article-${index}`"
        :title="article.title"
        :description="article.content"
      />
    </div>
  </div>
</template>
