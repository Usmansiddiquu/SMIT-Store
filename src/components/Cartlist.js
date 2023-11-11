import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { MdDelete } from 'react-icons/md';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import "./index.css"
import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';
import { Link } from 'react-router-dom';

export default function AlignItemsList({ cardData, deletecart, updateQty }) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {cardData.map((v, i) => {
        return (
          <div key={i} >
            <ListItem alignItems="flex-start">
              <ListItemAvatar style={{ padding: 5 }}>
                <img style={{ width: 70, height: 70, objectFit: 'contain' }} alt="Remy Sharp" src={v.image} />
              </ListItemAvatar>
              <ListItemText
                primary={v.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Rs  {v.price * v.qty}
                    </Typography>
                    <Typography className='Quantity'>
                      {" QTY: "}
                      <AiOutlineMinusSquare size={22} onClick={() => v.qty > 1 && updateQty('-', v.id)} />
                      {v.qty}
                      <AiOutlinePlusSquare size={22} onClick={() => updateQty('+', v.id)} />
                      <span style={{ marginLeft: 5, marginRight: 5 }}>
                      </span>
                      <MdDelete onClick={() => deletecart(v.id)} style={{ marginLeft: 10, cursor: 'pointer' }} size={22} />
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        )
      })}
      {cardData.length ? <div>
        <Link to={'/checkout'}>
        <Button style={{ width: "100%", marginTop: 20 }} size="small">CHECKOUT</Button>
         </Link>
      </div> :
        <div style={{padding: 50}}> <Alert variant='outlined' severity="warning">
          Your cart is empty!
        </Alert></div>
      }
    </List>
  );
}