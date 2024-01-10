export const useGlobalStore = defineStore('global', () => {
  const state = reactive({
    isMenuVisible: false,
  });

  function toggleMenu(menuState?: boolean) {
    if (menuState) {
      return state.isMenuVisible = menuState;
    }

    return state.isMenuVisible = !state.isMenuVisible;
  }

  return {
    state,
    toggleMenu,
  };
});
