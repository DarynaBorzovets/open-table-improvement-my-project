

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-screen-xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">OpenTable Problem</h1>
        <p className="text-lg mb-4">
        Open Table faces challenges when seating 30 guests or more simultaneously, making it hard to manage and recall notes and tags efficiently. Transmitting this crucial information to the kitchen and managers becomes nearly impossible in such scenarios.
        </p><br/>
        <h1 className="text-3xl font-bold mb-4">Solution</h1>

        <p className="text-lg mb-4">
        To address this issue, I developed a VIP list exclusively for guests with special tags or notes. During peak hours, these VIP guests will receive exceptional service directly from management, ensuring a smoother and more personalized dining experience.
        </p>
      </div>
    </div>
  );
};

export default Home;
