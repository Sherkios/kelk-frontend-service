/**
 * Функция эмулирует задержку между действиямия
 * @param {number} [timeout=1000] - время в милисекундах
 */
export default (timeout: number = 1000): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
