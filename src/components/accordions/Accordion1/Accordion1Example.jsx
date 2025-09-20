import { Accordion1 } from "./Accordion1";
import image1 from "./6.jpg";
import image2 from "./2.jpg";
import image3 from "./3.jpg";
import image4 from "./4.jpg";
import image5 from "./5.jpg";

const coolImages = [
  {
    header: "加拿大",
    image: image2,
    text: `加拿大以其壮丽的自然景观闻名于世。从落基山脉的巍峨雪峰到温哥华的现代都市风貌，这里完美融合了自然与文明。广阔的森林、清澈的湖泊和丰富的野生动物，为游客提供了独特的探索体验。`,
  },

  {
    header: "新西兰",
    image: image1,
    text: `新西兰是一片纯净的天堂，这里有着令人惊叹的自然奇观。从霍比特人故乡般的翠绿草原，到米尔福德峡湾的壮丽景色，处处展现着大自然的鬼斧神工。这里的毛利文化和现代生活的和谐共存，创造了独特的文化体验。`,
  },

  {
    header: "印度尼西亚",
    image: image4,
    text: `印度尼西亚是由17000多个岛屿组成的群岛国家，拥有丰富的文化遗产和自然美景。从巴厘岛的梯田和古老寺庙，到科莫多岛的原始景观，这里的每个角落都蕴含着独特的魅力。热带雨林、火山和珊瑚礁构成了这个天堂般的度假胜地。`,
  },
  {
    header: "南非",
    image: image5,
    text: `南非是一个充满野性与文明交融的国度。这里有克鲁格国家公园的野生动物，有开普敦的绚丽海岸，还有比林斯堡的文化遗产。从safari探险到葡萄酒庄园，南非为游客提供了丰富多彩的旅行体验。`,
  },
  {
    header: "西班牙",
    image: image3,
    text: `西班牙是一个充满激情与艺术的国度。从巴塞罗那的高迪建筑到马德里的皇家宫殿，从弗拉门戈舞蹈到地中海美食，这里的每一处都展现着独特的文化魅力。悠久的历史与现代艺术在这里完美融合。`,
  },
];

export const Accordion1Example = () => (
  <section className="page">
    <Accordion1 items={coolImages} />
  </section>
);