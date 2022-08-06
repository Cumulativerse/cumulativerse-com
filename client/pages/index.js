// Material
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// Styles
import styles from 'styles/pages/index.module.css'
// Components
import { HeapversesOneWayRotation } from 'components/logoAnimations/LogoAnimations';

export default function Home() {
  const svgStyle = {
    width: "3em",
    margin: "0 1em",
    flexShrink: "0"
  };
  const SectionContainer = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.section,
    borderRadius: '1rem',
    padding: '1rem',
    margin: '1rem',
  }));


  return (
    <>
      <Container maxWidth={false} sx={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>

        <Typography variant="h3" component="h1" gutterBottom align="center">CUMULATIVERSE</Typography>

        <Typography variant="h4" component="div" gutterBottom align="center" className={styles['index-header']} >
          <HeapversesOneWayRotation svgStyle={svgStyle} />
          We are still building it..
          <HeapversesOneWayRotation svgStyle={svgStyle} />
        </Typography>

      </Container>

      <Container maxWidth={false} sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignSelf: "center",
      }}>
        <SectionContainer>

          <Typography variant="h5" component="h2" gutterBottom>Coming projects:</Typography>
          <List>
            <ListItem >1. Decentralized Discord</ListItem>
            <ListItem >2. Social Network without admin</ListItem>
            <ListItem >3. NFT Game. Genre: DCCG</ListItem>
          </List>

        </SectionContainer>
      </Container>
    </>
  )
}
