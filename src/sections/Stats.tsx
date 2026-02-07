// import CountUp from "/react-countup";

const Stats = () => {
  const stats = [
    { title: "Projects Completed", value: 120 },
    { title: "Happy Clients", value: 85 },
    { title: "Success Rate", value: 99 },
    { title: "Years of Experience", value: 5 },
  ];

  return (
    <section className="py-20 text-center bg-gray-50 dark:bg-dark-900">
      <div className="grid max-w-5xl grid-cols-2 gap-8 mx-auto md:grid-cols-4">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3 className="text-4xl font-bold text-primary-600">
              {/* <CountUp end={item.value} duration={2.5} />+ */}
            </h3>
            <p className="mt-2 text-dark-600 dark:text-dark-200">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
