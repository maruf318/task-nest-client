const Benefits = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-center font-bold text-2xl my-10">Benefits</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.imgur.com/C3oj04K.jpg"
              alt="Office"
              className="rounded-xl h-[250px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Businessman</h2>
            <p>Make Proper plan of the tasks that needs to be done</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.imgur.com/Ib5gfaS.jpg"
              alt="Shoes"
              className="rounded-xl h-[250px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Developer</h2>
            <p>Plan building website in a structured way</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.imgur.com/SaP4N70.jpg"
              alt="Shoes"
              className="rounded-xl h-[250px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Student</h2>
            <p>Plan your Assignments and Home works</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.imgur.com/wwMLzDD.jpg"
              alt="Shoes"
              className="rounded-xl h-[250px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Team Organizers</h2>
            <p>Plan your work according to the requirements</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.imgur.com/I02x9po.jpg"
              alt="Shoes"
              className="rounded-xl h-[250px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Teachers</h2>
            <p>Schedule a parents meeting or an exam</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.imgur.com/4tKUqYy.jpg"
              alt="Shoes"
              className="rounded-xl h-[250px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Engineers</h2>
            <p>Make a plan for tomorrow</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
