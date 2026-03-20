<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes, viewport-fit=cover">
    <title>寻找你的英雄原型 · 德尔菲神谕</title>
    <style>
        /* 重置 & 基础 — 神秘深色 · 神谕质感 */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background-color: #0b090c;
            background-image: radial-gradient(circle at 20% 30%, #1f1a1b 0%, #030203 90%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            font-family: 'Georgia', 'Times New Roman', 'Palatino', 'Songti SC', 'SimSun', '华文楷体', serif;
            color: #ece3d4;
            line-height: 1.5;
            padding: 12px 0 36px 0;
            -webkit-font-smoothing: antialiased;
        }

        /* 神谕卷轴 — 手机主容器 */
        .delphic-scroll {
            width: 100%;
            max-width: 420px;
            margin: 0 auto;
            padding: 20px 18px 30px 18px;
            background: rgba(12, 10, 15, 0.7);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border-radius: 36px 36px 30px 30px;
            border: 1px solid rgba(190, 160, 120, 0.2);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(170, 140, 100, 0.15) inset;
        }

        /* 顶部圣纹 */
        .temple-frieze {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 4px 14px 4px;
            border-bottom: 1px dashed #4f4234;
            font-size: 13px;
            letter-spacing: 2px;
            color: #bb9e7a;
            text-transform: uppercase;
            font-family: 'Helvetica', 'Arial', sans-serif;
            font-weight: 300;
        }

        .temple-frieze span:first-child {
            font-size: 22px;
            opacity: 0.9;
        }

        .temple-frieze span:last-child {
            background: #201d1b;
            padding: 4px 12px;
            border-radius: 60px;
            border: 1px solid #6f5c45;
            font-size: 12px;
            color: #ddc7a8;
        }

        /* 主神谕标题 */
        .oracle-header {
            text-align: center;
            margin: 18px 0 14px;
        }

        .oracle-symbol {
            font-size: 42px;
            filter: drop-shadow(0 0 6px #c9aa7b);
            line-height: 1;
        }

        .oracle-header h2 {
            font-size: 24px;
            font-weight: 400;
            color: #f7e9d4;
            letter-spacing: 2px;
            margin: 6px 0 4px;
            text-shadow: 0 2px 4px #1f130b;
        }

        .oracle-header .sub {
            font-size: 14px;
            color: #ab9277;
            font-style: italic;
            letter-spacing: 1px;
        }

        .divider-myth {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            margin: 16px 0;
