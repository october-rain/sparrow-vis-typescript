const data = [
  { name: "questions", value: 17 },
  { name: "schools", value: 25 },
  { name: "philosophers", value: 35 },
];

const chartWidth = 480;
const chartHeight = 300;
const margin = 15;

const containerWidth = chartWidth + 2 * margin;
const containerHeight = chartHeight + 2 * margin;

const names = Array.from(data, (d) => d.name);
const values = Array.from(data, (v) => v.value);
const indices = Array.from(data, (_, idx) => idx);

const step = chartWidth / names.length;
const barWidth = step * 0.8;
const xs = Array.from(indices, (i) => i * step);

const y = chartHeight;

const vmax = Math.max(...values);
const barHeights = Array.from(values, (v) => (y * v) / vmax);

const nameColor = {
  questions: "#5B8FF9",
  philosophers: "#61DDAA",
  schools: "#65789B",
};

const colors = Array.from(names, (name) => nameColor[name]);

// 绘制
const canvas = document.getElementById("container-canvas");
canvas.style.width = containerWidth + "px";
canvas.style.height = containerHeight + "px";

const context = canvas.getContext("2d");

// 下面代码主要是为了解决模糊问题
// https://www.jianshu.com/p/2cd5143cf9aa
const getPixelRatio = function (context) {
  const backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;
  return (window.devicePixelRatio || 1) / backingStore;
};
const ratio = getPixelRatio(context);

canvas.width = containerWidth * ratio;
canvas.height = containerHeight * ratio;

context.scale(ratio, ratio); // 抵消将画布宽高设置为样式宽高两倍的影响

context.translate(margin, margin); // 将坐标原点移动到绘制图表的区域

for (const index of indices) {
  // 将需要绘制的属性取出来
  const color = colors[index];
  const x = xs[index];
  const barHeight = barHeights[index];
  const value = values[index];
  // 绘制条
  context.fillStyle = color;
  context.fillRect(x, y - barHeight, barWidth, barHeight);

  // 绘制值
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillStyle = "white";
  context.font = "25px PingFangSC-Regular, sans-serif";
  context.fillText(value, x + barWidth / 2, y - barHeight / 2);
}
