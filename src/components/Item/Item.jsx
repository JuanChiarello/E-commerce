import './Item.css';

const Item = ({ id, name, price }) => {
    return (
        <div className="item">
            <h2>{name}</h2>
            <p>{price}</p>
        </div>
    );
};

export default Item;