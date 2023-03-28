// standard convention is to use inline or create a new type

// standard is FunctionNameProps
// if you ever feel tempted to use any, you're doing something wrong
type ControlPanelProps = {
  name: string;
  // straight off of the react element type
  // better than () => {} because it's more specific with props
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

// type vs interface
// in modern versions of ts, there are fewer differences
// an interface is like a class to overridei ndidvidual methods
// a type is a little more constrained
// tend to use a type unless you need an interface
// https://fem-react-typescript.vercel.app/Types%20versus%20interfaces.md

// can extend an interface to extend 
// interface SpecialControlPanelProps extends ControlPanelProps {
//   isAdmin: true;
// }

// type AdminControls = ControlPanelProps | { isAdmin: true };
// https://fem-react-typescript.vercel.app/Types%20versus%20interfaces.md

// always leave them in this file or put them in a globally available file
// generally can put global types in the global.d.ts file
// very commonly used models

// ChangeEventHandler can be determined by looking at the input's type
// hehe breaking out into a type is the better long-term decision. generally speaking you want to break it out in a type
const ControlPanel = ({ name, onChange }: ControlPanelProps) => {
  return (
    <form
      className="flex flex-row gap-4 text-white bg-primary-10"
      onSubmit={(event) => event.preventDefault()}
    >
      <div>
        <label className="font-bold">Your Name</label>
        <input
          name="name"
          className="w-full"
          type="text"
          value={name}
          onChange={onChange}
        />
      </div>
    </form>
  );
};


export default ControlPanel;
