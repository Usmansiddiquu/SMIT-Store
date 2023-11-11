import * as React from 'react';
import Drawer from '@mui/material/Drawer';
// import { Box } from '@mui/material';
import Box from '@mui/material/Box';
import AlignItemsList from './Cartlist';

export default function TemporaryDrawer({ open, setOpen, cardData, deletecart, updateQty }) {
    return (
        <div style={{backgroundColor: 'black'}}>
            <React.Fragment>
                <Drawer
                    open={open}
                    anchor='right'
                    onClose={() => setOpen(false)}
                >
                    <Box
                        role="presentation"
                    >
                        <AlignItemsList updateQty={updateQty} deletecart={deletecart} cardData={cardData} />
                    </Box>
                </Drawer>
            </React.Fragment>
        </div>
    );
}