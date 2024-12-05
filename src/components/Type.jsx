// Destructure pokemon types props here :)
export const Type = ({ types = [] }) => (
  <div>
    Types: {types.length > 0 ? types.join(', ') : "No types available"}
  </div>
);
