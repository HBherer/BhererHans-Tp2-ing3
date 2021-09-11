import React, { useEffect, useState } from "react";
import { fetchCats } from "./API/TheCatApi";
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

const CardScreen = () => {
    const [cats, setCats] = useState([]);
    const [pages, setPages] = useState(1);
    const handleChange = (event, value) => {
        setPages(value);
    };
    useEffect(() => {
        const updateCatsValue = async () => {
            setCats(await fetchCats(pages));
        };
        updateCatsValue();
    }, [pages]);
    const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: 345,
        },
        root1: {
            '& > *': {
                marginTop: theme.spacing(2),
            },
        },
        media: {
            height: 240,
        },
    }));
    const classes = useStyles();
    const download = () => {

    };
    return (
        <>
            <div className="paginationNum">
                <div className={classes.root1}>
                    <Pagination count={1309} page={pages} onChange={handleChange} />
                </div>
            </div>
            <div className="container">
                {cats.map((cat) => (
                    <div className="card-bg">
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={cat.url} key={cat.id}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {cat.id}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <form action={cat.url} target="_blank">
                                    <Button component="Button" size="small" color="primary">
                                        Voir
                                    </Button>
                                </form>

                            </CardActions>
                        </Card>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CardScreen;