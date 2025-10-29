<template>
  <button
    class="dark-mode-toggle"
    :title="isDark ? '切换到日间模式' : '切换到夜间模式'"
    @click="toggleDark"
    :aria-label="isDark ? '切换到日间模式' : '切换到夜间模式'"
  >
    <div class="toggle-icon">
      <i v-if="isDark" class="i-line-md-sunny-outline-to-moon-loop-transition"></i>
      <i v-else class="i-line-md-moon-alt-to-sunny-outline-loop-transition"></i>
    </div>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useValaxyDark } from 'valaxy'

const isDark = ref(false)
const { isDark: valaxyIsDark, toggle } = useValaxyDark()

onMounted(() => {
  isDark.value = valaxyIsDark.value
})

const toggleDark = () => {
  toggle()
  isDark.value = !isDark.value
}
</script>

<style scoped>
.dark-mode-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.5rem;
  background: transparent;
  border: 2px solid transparent;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--sakura-color-text);
  font-size: 1.2rem;
}

.dark-mode-toggle:hover {
  background-color: var(--sakura-color-bg-hover, rgba(0, 0, 0, 0.05));
  border-color: var(--sakura-color-primary, #fe9500);
}

.dark-mode-toggle:active {
  transform: scale(0.95);
}

.toggle-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
}

.toggle-icon i {
  font-size: 1.5rem;
  display: inline-block;
}
</style>

