/**
 * 设置存储
 * @param mm 固定参数
 * @param key 键
 * @param val 值
 */
export default function set(key: string, val: unknown) {
	global[key] = val;
}
