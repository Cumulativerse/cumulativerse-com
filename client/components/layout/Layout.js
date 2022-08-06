import * as React from 'react';
import Head from 'next/head'
// Styles
import styles from './layout.module.css'
// Material
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
// Material Icons
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
// Simple Icons
import { Medium } from '@icons-pack/react-simple-icons';
import { Discord } from '@icons-pack/react-simple-icons';
import { Opensea } from '@icons-pack/react-simple-icons';

export default function Layout({ children }) {
  const FooterItems = styled('div')({
    display: 'flex',
    justifyContent: 'center',
  });

  return (
    <div className={styles.layout} >
      <Head>
        {/* Used to scale properly */}
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        {/* Website name and description */}
        <title>Cumulativerse</title>
        <meta name="description" content="Ethical Freedom For Internet" />
        {/* For Favicons */}
        {/* <ToDo> Do we really need all these? Does it cause unnecessary downloads? */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main className={styles.main} >
        {children}
      </main>

      <Container component='footer' className={styles.footer} maxWidth={false} >
        <Grid container spacing={2}>

          <Grid item xs={12} md={4}>
            <FooterItems><span>Definition of <Link href="/cumulativerse.txt" target="_blank" rel="noreferrer" >Cumulativerse</Link></span></FooterItems>
          </Grid>

          <Grid item xs={12} md={4} >
            <FooterItems sx={{
              '& > a': {
                marginRight: "1rem",
              },
            }}>
              <Link href="https://twitter.com/cumulativerse" target="_blank" rel="noreferrer" ><TwitterIcon /></Link>
              <Link href="https://www.instagram.com/cumulativerse/" target="_blank" rel="noreferrer" ><InstagramIcon /></Link>
              <Link href="https://discord.com/invite/XJKdhfmD4t" target="_blank" rel="noreferrer" ><Discord /></Link>
              <Link href="https://medium.com/@cumulativerse" target="_blank" rel="noreferrer" ><Medium /></Link>
              <Link href="https://opensea.io/collection/cumulativerse" target="_blank" rel="noreferrer" ><Opensea /></Link>
              <Link href="https://github.com/Cumulativerse" target="_blank" rel="noreferrer" ><GitHubIcon /></Link>
            </FooterItems>
          </Grid>

          <Grid item xs={12} md={4}>
            <FooterItems><span>IPFS <Link href="https://ipfs.io/ipfs/QmVmifbia6WpwYnnEiq6AA3KVwmHUiS6TvkeEpENAg8ex5" target="_blank" rel="noreferrer" >link</Link> for definition </span></FooterItems>
          </Grid>

        </Grid>
      </Container>

    </div>
  );
}