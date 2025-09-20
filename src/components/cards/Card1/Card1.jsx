import "./styles.css";


const cards = [
  {
    name: "summary",
    total: 21,
    description: "待办任务",
    footer: "已完成: 13",
    more: "更多信息",
  },
  {
    name: "overdue",
    total: 17,
    description: "项目",
    footer: "昨日: 9",
    more: "更多信息",
  },
  {
    name: "features",
    total: 38,
    description: "提案",
    footer: "已实施: 6",
    more: "更多信息",
  },
];

export const Card1 = () => {
  return (
    <section className="page card-1-page">
      <div className="cards">
        {cards.map((card) => (
          <label id={card.name}>
            <input type="checkbox" />
            <div className="card">
              <div className="front">
                <header>
                  <h2>{card.name}</h2>
                  <span className="material-symbols-outlined"> more_vert </span>
                </header>
                <var>{card.total}</var>
                <h3>{card.description}</h3>
                <h4>{card.footer}</h4>
              </div>
              <div className="back">
                <header>
                  <h2>{card.name}</h2>
                  <span className="material-symbols-outlined"> close </span>
                </header>
                <p>更多信息....</p>
              </div>
            </div>
          </label>
        ))}
      </div>
    </section>
  );
};
