import { Button, Container, Typography } from "@mui/material";

function Login() {
    return (
        <>
            <Typography variant="h1" component="h2">
                Ismael Valerón Hernández
            </Typography>


            <Container>
                <Typography variant="h1" component="h2">
                    Ismael Valerón Hernández
                </Typography>
                <Typography variant="h2" component="h2">
                    Ismael Valerón Hernández
                </Typography>
                <Typography variant="h3" component="h2">
                    Ismael Valerón Hernández
                </Typography>
                <Typography variant="subtitle1" component="h2">
                    Ismael Valerón Hernández
                </Typography>
                <Typography variant="body1" component="h2">
                    Ismael Valerón Hernández
                </Typography>
                <Typography variant="caption" component="h2">
                    Ismael Valerón Hernández
                </Typography>
                <Button variant="text" color="primary">Text</Button>
                <Button variant="contained" color="error">Text</Button>
                <Button variant="outlined" color="success">Text</Button>
            </Container>
        </>
    );
}

export default Login;