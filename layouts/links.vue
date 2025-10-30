<script setup lang="ts">
import { useFrontmatter } from 'valaxy'
import { computed } from 'vue'

const frontmatter = useFrontmatter()

// Process links data for SSG compatibility
const linksData = computed(() => {
  const links = frontmatter.value.links
  if (!links) return []

  // If it's already an array, use it directly
  if (Array.isArray(links)) {
    const data = links
    // Apply random shuffle if needed
    if (frontmatter.value.random) {
      return Array.from(data).sort(() => Math.random() - 0.5)
    }
    return data
  }

  // If it's a string URL, return empty for SSG (will be fetched client-side)
  return []
})
</script>

<template>
  <SakuraPage>
    <RouterView v-slot="{ Component }">
      <component :is="Component">
        <template #main-content>
          <div class="links">
            <ul class="link-items">
              <li v-for="link, i in linksData" :key="i" class="link-item" :style="`--primary-color: ${link.color}`">
                <a class="link-url" p="x-4 y-2" :href="link.url" :title="link.name" alt="portrait" rel="friend"
                  target="_blank">
                  <div class="link-left">
                    <SakuraImageCard class="link-avatar" width="64" height="64" w="16" h="16" :src="link.avatar"
                      :alt="link.name" :error-img="frontmatter.errorImg" />
                  </div>
                  <div class="link-info" m="l-2">
                    <div class="link-blog" font="serif black">{{ link.blog }}</div>
                    <div class="link-desc">{{ link.desc }}</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </template>
      </component>
    </RouterView>
  </SakuraPage>
</template>

<style lang="scss" scoped>
.link-item {
  display: inline-flex;
}

.links {
  .link-items {
    display: flex;
    text-align: center;
    justify-content: center;
    flex-wrap: wrap;
    padding-left: 0;
  }

  .link-url {
    --smc-link-color: var(--primary-color);

    display: inline-flex;
    text-align: center;
    justify-self: center;
    line-height: 1.5;
    margin: 0.5rem;
    transition: 0.2s;
    color: var(--primary-color, black);
    border: 1px solid var(--primary-color, gray);
    border-radius: var(--sakura-radius);

    &:hover {
      color: white;
      background-color: var(--primary-color, gray);
      box-shadow: 0 2px 20px var(--primary-color, gray);
    }

    .link {
      &-left {
        line-height: 0;
      }

      &-avatar {
        margin: 0;
        display: inline-flex;
        max-width: 100%;
        border-radius: 50%;
        background-color: oklch(100% 0 0);
        border: 1px solid var(--primary-color, gray);
        transition: 0.5s;

        &:hover {
          box-shadow: 0 0 20px oklch(0% 0 0 / 10%);
        }
      }

      &-desc {
        font-size: 0.8rem;
        width: 10rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }

  .link-info {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
