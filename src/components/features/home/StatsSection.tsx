const stats = [
  { value: "6+", label: ["Years Of", "Experience"] },
  { value: "80+", label: ["Projects", "Completed"] },
  { value: "40+", label: ["Happy", "Clients"] },
  { value: "12", label: ["Industry", "Awards"] },
];

export function StatsSection() {
  return (
    <section className="bg-dark text-white grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-800 border-t-4 border-primary">
      {stats.map((stat) => (
        <div
          key={stat.value}
          className="p-8 text-center flex flex-col justify-center items-center"
        >
          <span className="text-primary text-4xl md:text-5xl font-black mb-2">
            {stat.value}
          </span>
          <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">
            {stat.label[0]}
            <br />
            {stat.label[1]}
          </span>
        </div>
      ))}
    </section>
  );
}
