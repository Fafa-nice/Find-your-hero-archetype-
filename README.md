**Description**: Find Your Hero Archetype test adapted for mobile with a vintage nude palette, 30 questions, and a results system.
**Files**:
- index.html: Main entry point and layout. Refs: TailwindCSS, Lucide.
- styles.css: Vintage, nude-toned styles, animations, and line art patterns.
- data.js: 30 archetype questions and result definitions.
- app.js: Logic for test progression, scoring, and result rendering.
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes, viewport-fit=cover">
    <title>寻找你的英雄原型 · 德尔菲神谕</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <link rel="stylesheet" href="./styles.css">
</head>
<body>
    <div class="vintage-pattern-bg"></div>
    
    <main class="delphic-scroll" id="app-container">
        <header class="temple-frieze">
            <span>⎈</span>
            <span id="progress-indicator">序章 / 起源</span>
            <span>⎈</span>
        </header>

        <div class="oracle-header">
            <div class="oracle-symbol text-accent">✧</div>
            <h2 class="font-serif text-2xl font-medium tracking-widest mt-2 text-primary">英雄原型测试</h2>
            <p class="sub text-secondary italic mt-1 text-sm tracking-wide">倾听内心的回音</p>
        </div>

        <div class="divider-myth">
            <div class="line"></div>
            <i data-lucide="sun" class="w-4 h-4 text-accent opacity-70"></i>
            <div class="line"></div>
        </div>

        <!-- Start Screen -->
        <section id="screen-start" class="screen-content active flex flex-col items-center text-center mt-6">
            <p class="text-primary mb-8 leading-relaxed font-serif">
                这是一个包含30个灵魂叩问的旅程。<br>
                请褪去尘世的伪装，<br>
                凭借第一直觉作出选择。
            </p>
            <button id="btn-start" class="btn-primary">开启神谕</button>
        </section>

        <!-- Question Screen -->
        <section id="screen-question" class="screen-content hidden flex-col mt-4">
            <div class="progress-bar-container mb-6">
                <div id="progress-bar" class="progress-bar-fill"></div>
            </div>
            <h3 id="question-text" class="text-xl font-serif text-primary text-center mb-8 leading-relaxed min-h-[80px] flex items-center justify-center">
                <!-- Question appears here -->
            </h3>
            <div id="options-container" class="flex flex-col gap-4">
                <!-- Options injected here -->
            </div>
        </section>

        <!-- Result Screen -->
        <section id="screen-result" class="screen-content hidden flex-col items-center mt-2 text-center">
            <div class="text-accent mb-2">
                <i data-lucide="sparkles" class="w-8 h-8 mx-auto"></i>
            </div>
            <h4 class="text-sm text-secondary tracking-widest mb-1">你的灵魂原型是</h4>
            <h2 id="result-title" class="text-3xl font-serif text-primary font-bold tracking-wider mb-4"></h2>
            <div class="bg-card-inner p-5 rounded-2xl border border-accent/20 mb-8 shadow-inner">
                <p id="result-desc" class="text-primary/80 leading-relaxed font-serif text-sm text-left"></p>
            </div>
            <button id="btn-restart" class="btn-outline">重新开始旅程</button>
        </section>
    </main>

    <script>
        lucide.createIcons();
    </script>
    <script type="module" src="./app.js"></script>
</body>
</html>
