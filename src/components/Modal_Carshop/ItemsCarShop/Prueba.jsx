import { FaTrashAlt } from "react-icons/fa";


const Prueba = (props) => {
  const { nombre, apellido, id, causa, deleteData } = props;

  return (
        <div>
            <span>{nombre}</span>
            <span>{apellido}</span>
            <span>{id}</span>
            <span>{causa}</span>
            <div className="deleteItem">
            <button onClick={() => deleteData(id)}>
                <FaTrashAlt />
            </button>
            </div>
        </div>
  );
};

export default Prueba;
