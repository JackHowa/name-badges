// the type of that argument 

type NameBadgeProps = {
  name: string;
  greeting?: string; 
};
// one of the many important tests that you can return a jsx element
// saves yourself a unit test hehe
const NameBadge = ({ name, greeting }: NameBadgeProps): JSX.Element => {
  return (
    <section className="badge">
      <header className="badge-header">
        <h1 className="text-5xl">{greeting}</h1>
        <p>My name is…</p>
      </header>
      <div className="badge-body">
        <p className="badge-name">{name}</p>
      </div>
      <footer className="badge-footer" />
    </section>
  );
};

export default NameBadge;
