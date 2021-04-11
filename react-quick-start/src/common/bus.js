// 公共bus方式(事件总线) 实现兄弟组件间传值
import { EventEmitter } from "events";
var bus = new EventEmitter();

// 按需导出
export { bus }