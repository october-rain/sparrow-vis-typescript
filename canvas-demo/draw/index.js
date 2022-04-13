const canvas = document.getElementById('canvas')

canvas.style.width = 400 + "px";
canvas.style.height = 200 + "px";

canvas.width = 400;
canvas.height = 200;

const context = canvas.getContext("2d");

// 绘制一个矩形
context.fillStyle = "red"; // 设置填充颜色
context.strokeStyle = "yellow"; // 设置边框的颜色
context.lineWidth = 10; // 设置边框的宽度
context.strokeRect(0, 0, 100, 100); // 绘制边框
context.fillRect(5, 5, 95, 95); // 绘制填充颜色

// 绘制一段文字
context.fillStyle = "black"; // 设置文字的颜色
context.font = "25px PingFangSC-Regular, sans-serif"; // 设置文字的大小和字体
context.fillText("hello world", 150, 100); // 绘制文字