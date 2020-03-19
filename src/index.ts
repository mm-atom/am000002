import am1 from '@mmstudio/am000001';

/**
 * 设置存储
 * @param mm 固定参数
 * @param key 键
 * @param val 值
 */
export default function set(mm: am1, key: string, val: unknown) {
	mm.global[key] = val;
}
