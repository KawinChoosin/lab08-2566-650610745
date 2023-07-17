export const Footer = (props) => {
  return (
    <div className="mt-3">
      <p className="text-secondary text-center">
        copyright © {props.years} {props.fullname} {props.id}
      </p>
    </div>
  );
};
