document.addEventListener('DOMContentLoaded', () => {
    const links = [
        { href: 'https://g.co/kgs/3DGUEMA', imgSrc: 'tianqi.png', alt: '天气图标', name: '天气' },
        { href: 'https://www.pornhub.com/', imgSrc: 'dy.svg', alt: '成人网站图标', name: '成人' },
        { href: 'https://www.twitter.com/', imgSrc: 'tt.png', alt: '推特图标', name: '推特' },
        { href: 'https://theporndude.com/', imgSrc: 'zhihu.svg', alt: '导航网站图标', name: '导航' },
        { href: 'https://translate.google.com/?source=osdd&sl=zh-CN&tl=en&op=translate', imgSrc: 'fanyi.svg', alt: '翻译图标', name: '翻译' },
        { href: 'https://m.bilibili.com/', imgSrc: 'bilibili.png', alt: 'B站图标', name: 'B站' },
        { href: 'https://linux.do/', imgSrc: 'LinuxDo.png', alt: 'LinuxDo社区图标', name: 'LinuxDo' },
        { href: 'https://lobe-chat-dahai913.vercel.app/', imgSrc: 'LobeChat.png', alt: 'LobeChat图标', name: 'LobeChat' }
    ];

    const linkGrid = document.getElementById('link-grid');

    links.forEach(link => {
        const linkBox = document.createElement('div');
        linkBox.className = 'box';

        const linkElement = document.createElement('a');
        linkElement.href = link.href;
        linkElement.target = '_blank'; // 在新标签页打开
        linkElement.rel = 'noopener noreferrer'; // 安全性考虑
        linkElement.setAttribute('aria-label', `访问 ${link.name}`);

        const icon = document.createElement('img');
        icon.src = link.imgSrc;
        icon.alt = link.alt;
        icon.className = 'icon';
        icon.loading = 'lazy'; // 图片懒加载

        const nameSpan = document.createElement('span');
        nameSpan.className = 'url';
        nameSpan.textContent = link.name;

        linkElement.appendChild(icon);
        linkElement.appendChild(nameSpan);
        linkBox.appendChild(linkElement);
        linkGrid.appendChild(linkBox);
    });
});
