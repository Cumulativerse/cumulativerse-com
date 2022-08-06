// Material
import Container from '@mui/material/Container';

export default function Custom404() {
  return (
    <Container maxWidth={false} sx={{
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <h1>404 | Page Not Found</h1>
    </Container>
  );
}