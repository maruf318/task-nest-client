const Faq = () => {
  return (
    <div className="max-w-7xl mx-auto min-h-[100vh]">
      <h2 className="text-center font-bold text-2xl my-10">
        Frequent Asked Questions
      </h2>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          Which methods are available for login?
        </div>
        <div className="collapse-content">
          <p>
            You can login using Gmail, Github. You can even create a account and
            use your email and password for login.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What kind of tasks I can add?
        </div>
        <div className="collapse-content">
          <p>
            You can add any kinds of tasks you want. As soon as you post it, the
            tasks will be added in the to-do list.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Can a user delete or update his tasks?
        </div>
        <div className="collapse-content">
          <p>A user can delete, update and create tasks</p>
        </div>
      </div>
      <div className="diff aspect-[16/9] mt-10">
        <div className="diff-item-1">
          <div className="bg-primary text-primary-content text-lg lg:text-4xl font-black grid place-content-center">
            <p>📢For Advertisement</p>
            <p>Contact: hossainmaruf001@gmail.com</p>
          </div>
        </div>
        <div className="diff-item-2">
          <div className="bg-base-200 text-lg lg:text-4xl font-black grid place-content-center">
            <p>📢For Advertisement</p>
            <p>Contact: hossainmaruf001@gmail.com</p>
          </div>
        </div>
        <div className="diff-resizer"></div>
      </div>
    </div>
  );
};

export default Faq;
