import React from 'react';
import './product.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useStateValue } from '../components/StateProvider'



const Product = ({ id, title, img, price, rating }) => {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: img,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div>
            <Card id={id} className='card' >
                <CardActionArea>
                    <img id='img' src={img} alt="" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <p className="product__price">
                            <small>$</small>
                            <strong>{price}</strong>
                        </p>
                        <div className="product__rating">
                            {Array(rating)
                                .fill()
                                .map((_, i) => (
                                    <p>🌟</p>
                                ))}
                        </div>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button style={{
                        marginTop: '10px',
                        outline: 'none'
                    }}
                        variant="contained"
                        color="secondary"
                        onClick={addToBasket}
                    >
                        Add to Basket
                   </Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default Product;
