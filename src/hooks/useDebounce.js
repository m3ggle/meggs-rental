// const processChange = debounce(() => saveInput("big daddy"), 2000);

export const useDebounce = () => {
      function debounce(func, timeout) {
        let timer;
        return (...args) => {
          clearTimeout(timer);
          timer = setTimeout(() => {
            func.apply(this, args);
          }, timeout);
        };
      }

    return { debounce };
}