import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: '#ade8f4'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function NewCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.title}  
        </Typography>

        <Typography variant="body2" component="p">
          {props.description} 
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={props.src}>
          <Typography color='primary'>Check it out!</Typography>
        </Link>
      </CardActions>
    </Card>
  );
}

export default NewCard;