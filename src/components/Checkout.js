import DrawerAppBar from "../components/AppBar";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Button from "@mui/material/Button";
import "./index.css"
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    root: {
        '& label.Mui-focused': {
            color: '#8bc34a',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#8bc34a',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#8bc34a'
            },
        },
    },
})


export default function Checkout() {

    const classes = useStyles();
    return (
        <div>
            <DrawerAppBar />
            <Box sx={{ flexGrow: 1, width: '50%', margin: '0 auto', marginTop: 5 }}>
                <Grid container spacing={2} direction={'row'} justifyContent={'center'} alignItems={'center'}>
                    <Grid xs={12}><h1>Checkout</h1>

                    </Grid>
                    <Grid xs={6}>
                        <TextField className={classes.root} style={{ width: '100%' }} id="outlined-basic" label="Fullname" variant="outlined" />
                    </Grid>
                    <Grid xs={6}>
                        <TextField className={classes.root} style={{ width: '100%' }} id="outlined-basic" label="Phone" variant="outlined" />
                    </Grid>
                    <Grid xs={6}>
                        <TextField className={classes.root} style={{ width: '100%' }} id="outlined-basic" label="Email" variant="outlined" />
                    </Grid>
                    <Grid xs={6}>
                        <TextField className={classes.root} style={{ width: '100%' }} id="outlined-basic" label="Address" variant="outlined" />
                    </Grid>
                    <Grid xs={12}>
                        <Button style={{ width: "100%", marginTop: 20 }} size="small">Place Order</Button>

                    </Grid>
                </Grid>
            </Box>

        </div>
    )
}