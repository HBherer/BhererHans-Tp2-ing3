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
    const [pageCountMax, setPageCountMax] = useState()
    const [pages, setPages] = useState(1);
    const handleChange = (event, value) => {
        setPages(value);
    };
    useEffect(() => {
        const updateCatsValue = async () => {
            const catsAndPaggination = fetchCats(pages);
            setPageCountMax((await catsAndPaggination).limitPages);
            setCats((await catsAndPaggination).cats);
        };
        updateCatsValue();
    }, [pages]);
    const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: 345,
        },
        roota: {
            '& > *': {
                marginTop: theme.spacing(2),
            },
        },
        media: {
            height: 240,
        },
    }));
    const classes = useStyles();
    return (
        <>
            <div className="paginationNum">
                <div className={classes.roota}>
                    <Pagination count={pageCountMax} page={pages} onChange={handleChange} />
                </div>
            </div>
            <div className="container">
                {cats.map((cat) => (
                    <div className="card-bg" key={cat.id}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={cat.url}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {cat.id}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button href={cat.url} type="button" target="_blank" variant="outlined" size="small" color="primary">
                                    Voir
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CardScreen;