import { Accordion2 } from "./Accordion2";
import "./Accordion2Example.css";

const faqs = [
  {
    header: (
      <div className="accordion-2-header">
        <span class="material-symbols-outlined">mail</span> Canada & 加拿大
      </div>
    ),
    content: `加拿大以其壮丽的自然景观闻名于世。从落基山脉的巍峨雪峰到温哥华的现代都市风貌，这里完美融合了自然与文明。广阔的森林、清澈的湖泊和丰富的野生动物，为游客提供了独特的探索体验。`,
  },
  {
    header: (
      <div className="accordion-2-header">
        <span class="material-symbols-outlined">credit_card</span> New Zealand & 新西兰
      </div>
    ),
    content: `新西兰是一片纯净的天堂，这里有着令人惊叹的自然奇观。从霍比特人故乡般的翠绿草原，到米尔福德峡湾的壮丽景色，处处展现着大自然的鬼斧神工。这里的毛利文化和现代生活的和谐共存，创造了独特的文化体验。`,
  },
  {
    header: (
      <div className="accordion-2-header">
        <span class="material-symbols-outlined">warning</span> Indonesia & 印度尼西亚
      </div>
    ),
    content: `印度尼西亚是由17000多个岛屿组成的群岛国家，拥有丰富的文化遗产和自然美景。从巴厘岛的梯田和古老寺庙，到科莫多岛的原始景观，这里的每个角落都蕴含着独特的魅力。热带雨林、火山和珊瑚礁构成了这个天堂般的度假胜地。`,
  },
  {
    header: (
      <div className="accordion-2-header">
        <span class="material-symbols-outlined">package_2</span> Spain & 西班牙
      </div>
    ),
    content: `西班牙是一个充满激情与艺术的国度。从巴塞罗那的高迪建筑到马德里的皇家宫殿，从弗拉门戈舞蹈到地中海美食，这里的每一处都展现着独特的文化魅力。悠久的历史与现代艺术在这里完美融合。`,
  },
];

export const Accordion2Example = () => (
  <section className="page accordion-2-page">
    <div className="accordion-2-card">
      <Accordion2 items={faqs} />
    </div>
  </section>
);
